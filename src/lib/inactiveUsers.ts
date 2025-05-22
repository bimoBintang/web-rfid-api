import { subDays } from 'date-fns';
import prisma from "@/lib/prisma"; // Use your existing prisma instance

export async function updateInactiveUsers() {
  const ninetyDaysAgo = subDays(new Date(), 90);
  
  try {
    // Find all active users
    const activeUsers = await prisma.user.findMany({
      where: { 
        isActive: true 
      },
      include: {
        attendances: {
          orderBy: {
            checkInTime: 'desc'
          },
          take: 1
        },
        rfidCard: true
      }
    });

    // Track users to update
    const usersToDeactivate = [];

    // Check last activity date for each user
    for (const user of activeUsers) {
      // Skip users without an RFID card
      if (!user.rfidCard) continue;
      
      // If user has no attendance records or last attendance is older than 90 days
      const hasRecentActivity = user.attendances.length > 0 && 
                              user.attendances[0].checkInTime && 
                              new Date(user.attendances[0].checkInTime) > ninetyDaysAgo;
      
      if (!hasRecentActivity) {
        usersToDeactivate.push(user.id);
      }
    }

    // Update inactive users in a batch
    if (usersToDeactivate.length > 0) {
      const updateResult = await prisma.user.updateMany({
        where: {
          id: {
            in: usersToDeactivate
          }
        },
        data: {
          isActive: false
        }
      });
      
      console.log(`Deactivated ${updateResult.count} users due to 90+ days of inactivity`);
      
      // Log this admin activity
      await prisma.adminActivity.create({
        data: {
          adminId: 1, // System admin ID - adjust as needed
          action: "BATCH_DEACTIVATE_USERS",
          description: `Automatically deactivated ${updateResult.count} users due to 90+ days of inactivity`,
          ipAddress: "system"
        }
      });
      
      return {
        success: true,
        deactivatedCount: updateResult.count,
        userIds: usersToDeactivate
      };
    }
    
    return {
      success: true,
      deactivatedCount: 0,
      message: "No inactive users found"
    };
    
  } catch (error) {
    console.error("Error updating inactive users:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
}