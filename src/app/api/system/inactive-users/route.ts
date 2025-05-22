import { NextResponse } from 'next/server';
import { verfiyAdminToken } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { subDays } from 'date-fns';

export async function GET(req: Request) {
  try {
    const adminAuth = await verfiyAdminToken(req);
    if (!adminAuth?.success) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const ninetyDaysAgo = subDays(new Date(), 90);
    const sixtyDaysAgo = subDays(new Date(), 60);
    const thirtyDaysAgo = subDays(new Date(), 30);

    // Get all users with their last activity
    const users = await prisma.user.findMany({
      where: { 
        rfidCard: { 
            isNot: null
         } // Only users with RFID cards
      },
      select: {
        id: true,
        fullName: true,
        department: true,
        isActive: true,
        attendances: {
          orderBy: { checkInTime: 'desc' },
          take: 1,
          select: {
            checkInTime: true
          }
        }
      }
    });

    // Calculate inactive user statistics
    const inactiveUsers = {
      critical: [] as any[], // 90+ days
      warning: [] as any[],  // 60-89 days
      notice: [] as any[],   // 30-59 days
      active: [] as any[]    // < 30 days
    };

    let totalInactive = 0;

    users.forEach(user => {
      const lastActivity = user.attendances[0]?.checkInTime;
      
      if (!lastActivity) {
        // Never had any activity
        inactiveUsers.critical.push({
          id: user.id,
          fullName: user.fullName,
          department: user.department,
          isActive: user.isActive,
          daysSinceLastActivity: null,
          status: 'never_active'
        });
        totalInactive++;
        return;
      }

      const lastActivityDate = new Date(lastActivity);
      const daysSinceLastActivity = Math.floor(
        (new Date().getTime() - lastActivityDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      const userData = {
        id: user.id,
        fullName: user.fullName,
        department: user.department,
        isActive: user.isActive,
        daysSinceLastActivity,
        lastActivity: lastActivityDate
      };

      if (lastActivityDate < ninetyDaysAgo) {
        inactiveUsers.critical.push({ ...userData, status: 'critical' });
        totalInactive++;
      } else if (lastActivityDate < sixtyDaysAgo) {
        inactiveUsers.warning.push({ ...userData, status: 'warning' });
      } else if (lastActivityDate < thirtyDaysAgo) {
        inactiveUsers.notice.push({ ...userData, status: 'notice' });
      } else {
        inactiveUsers.active.push({ ...userData, status: 'active' });
      }
    });

    return NextResponse.json({
      statistics: {
        total: users.length,
        inactive: totalInactive,
        critical: inactiveUsers.critical.length,
        warning: inactiveUsers.warning.length,
        notice: inactiveUsers.notice.length,
        active: inactiveUsers.active.length
      },
      users: {
        critical: inactiveUsers.critical,
        warning: inactiveUsers.warning,
        notice: inactiveUsers.notice
      },
      thresholds: {
        critical: 90,
        warning: 60,
        notice: 30
      }
    });
  } catch (error) {
    console.error("Error fetching inactive users:", error);
    return NextResponse.json({ 
      error: "Internal server error", 
      message: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}