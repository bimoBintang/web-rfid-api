import { NextResponse } from 'next/server';
import { updateInactiveUsers } from '@/lib/inactiveUsers';
import { verifyAdminToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(req: Request) {
  try {
    const adminAuth = await verifyAdminToken(req);
    if (!adminAuth?.success) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const url = new URL(req.url);
    const dryRun = url.searchParams.get('dryRun') === 'true';
    
    if (dryRun) {
      const ninetyDaysAgo = new Date();
      ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
      
      const inactiveUsersCount = await prisma.user.count({
        where: {
          isActive: true,
          rfidCard: {
            isNot: null
          },
          attendances: {
            none: {
              checkInTime: {
                gte: ninetyDaysAgo
              }
            }
          }
        }
      });
      
      return NextResponse.json({
        message: `Found ${inactiveUsersCount} users inactive for 90+ days`,
        inactiveCount: inactiveUsersCount,
        dryRun: true
      });
    } else {
      const result = await updateInactiveUsers();
      
      if (result.success) {
        return NextResponse.json({
          message: `Berhasil memeriksa pengguna tidak aktif. ${result.deactivatedCount} pengguna dinonaktifkan.`,
          ...result
        });
      } else {
        return NextResponse.json({ 
          error: "Gagal memperbarui pengguna tidak aktif",
          ...result
        }, { status: 500 });
      }
    }
  } catch (error) {
    return NextResponse.json({ 
      error: "Kesalahan server internal", 
      message: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    
    if (!authHeader?.startsWith('Bearer scheduler_')) {
      const adminAuth = await verifyAdminToken(req);
      if (!adminAuth?.success) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      await prisma.adminActivity.create({
        data: {
          adminId: adminAuth.id!,
          action: "EXECUTE_INACTIVE_CHECK",
          description: `Admin secara manual menjalankan pengecekan pengguna yang tidak aktif`,
          ipAddress: req.headers.get('x-forwarded-for') || ''
        }
      });
    }
    
    const result = await updateInactiveUsers();
    
    if (result.success) {
      return NextResponse.json({
        message: `Berhasil memeriksa pengguna tidak aktif. ${result.deactivatedCount} pengguna dinonaktifkan.`,
        ...result
      });
    } else {
      return NextResponse.json({ 
        error: "Gagal memperbarui pengguna tidak aktif",
        ...result
      }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ 
      error: "Kesalahan server internal", 
      message: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}