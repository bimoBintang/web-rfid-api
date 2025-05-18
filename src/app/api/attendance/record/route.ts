import { verfiyDeviceToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {
        const deviceAuth = await verfiyDeviceToken(req);
        if(!deviceAuth.success) {
            return NextResponse.json(
                {error: deviceAuth.message},
                {status: 401}
            )
        };

        const { cardUid } = await req.json();
        const deviceId = deviceAuth.deviceId;

        const rfidCard = await prisma.rfidCard.findUnique({
            where: {cardUid, isActive: true},
            include: {user: true}
        });

        if (!rfidCard || !rfidCard.user.isActive) {
            return NextResponse.json(
              { error: 'Invalid or inactive RFID card' },
              { status: 404 }
            );
        };

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const schedule = await prisma.schedule.findFirst({
            where: { isActive: true}
        });

        if (!schedule) {
            return NextResponse.json(
              { error: 'No active schedule found' },
              { status: 404 }
            );
          };

        const existingAttendance = await prisma.attendance.findUnique({
            where: {
                userId_date: {
                    userId: rfidCard.userId,
                    date: today
                }
            }
        });

        const currentTime = new Date();
        let attendanceStatus;
        let updatedAttendance;

        const checkInStart = new Date(schedule.checkInStart);
        const checkInEnd = new Date(schedule.checkInEnd);
        const checkOutStart = new Date(schedule.checkOutStart);
        const checkOutEnd = new Date(schedule.checkOutEnd);

        const formatTimeComparison = (time: Date) => {
            const hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            return new Date(0,0,0, hours, minutes, seconds);
        };

        const currentTimeForComperison = formatTimeComparison(currentTime);
        const checkInStartForComperison = formatTimeComparison(checkInStart);
        const checkInEndForComperison = formatTimeComparison(checkInEnd);
        const checkOutStartForComperison = formatTimeComparison(checkOutStart);
        const checkOutEndForComperison = formatTimeComparison(checkOutEnd);

        if(!existingAttendance) {
            if(currentTimeForComperison >= checkInStartForComperison && currentTimeForComperison <= checkInEndForComperison) {
                attendanceStatus!.PRESENT;
            } else if(currentTimeForComperison > checkInEndForComperison) {
                attendanceStatus!.LATE;
            } else {
                attendanceStatus!.PENDING;
            };

            updatedAttendance = await prisma.attendance.create({
                data: {
                    userId: rfidCard.userId,
                    rfidCardId: rfidCard.id,
                    deviceId: deviceId!,
                    scheduleId: schedule.id,
                    date: today,
                    checkInTime: currentTime,
                    status: attendanceStatus,
                }
            });

            return NextResponse.json({
                message: "Attendance recorded successfully",
                attendance: updatedAttendance
            })
        } else if(!existingAttendance.checkOutTime) {
            if(currentTimeForComperison >= checkOutStartForComperison && currentTimeForComperison <= checkOutEndForComperison) {
                updatedAttendance = await prisma.attendance.update({
                    where: {id: existingAttendance.id},
                    data: {
                        checkOutTime: currentTime,
                    }
                });
                
                return NextResponse.json({
                    message: "Check-out successfully",
                    attendance: updatedAttendance
                });
            } else if(currentTimeForComperison < checkOutStartForComperison) {
                return NextResponse.json({
                    message: "Check-out time not yet reached",
                    attendance: existingAttendance
                });
            } else {
                updatedAttendance = await prisma.attendance.update({
                    where: {id: existingAttendance.id},
                    data: { checkOutTime: currentTime }
                });

                return NextResponse.json({
                    message: "Late check-out recorded successfully",
                    attendance: updatedAttendance
                });
            }
        } else {
            return NextResponse.json({
                message: "Attendance already completed for today",
                attendance: existingAttendance
            })
        }
    } catch (error) {
        return NextResponse.json({error: 'Something went wrong'}, {status: 406})
    }
}