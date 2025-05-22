import { verifyAdminToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    try {
        const adminAuth = await verifyAdminToken(req);
        if(!adminAuth.success) {return NextResponse.json({error: "Unauthorized"}, {status: 401})};

        const { searchParams } = new URL(req.url);
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');
        const userId = searchParams.get('userId');
        const department = searchParams.get('department');
        const status = searchParams.get('status');

        if(!startDate || !endDate) {
            return NextResponse.json(
                {error: "Start date and end date are require"},
                {status: 400}
            )
        };

        const where:  any = {
            date: {
                gte: new Date(startDate),
                lte: new Date(endDate)
            }
        };

        if(userId) {
            where.userId = parseInt(userId)
        };

        if(status) {
            where.status = status;
        };

        if(department) {
            where.user = {department}
        };

        const attendance = await prisma.attendance.findMany({
            where,
            include: {
                user: true,
                device: true,
                schedule: true
            },
            orderBy: [
                {date: 'asc'},
                {user: {fullName: 'asc'}}
            ]
        })

        const totalPresent = attendance.filter((a) => a.status === 'PRESENT').length;
        const totalLate = attendance.filter((a) => a.status === 'LATE').length;
        const totalAbsent = attendance.filter((a) => a.status === 'ABSENT').length;
        const totalLeave = attendance.filter((a) => a.status === 'LEAVE').length;   

        return NextResponse.json({
            attendance,
            status: {
                totalAttendance: attendance.length,
                totalPresent,
                totalLate,
                totalAbsent,
                totalLeave
            }
        })
    } catch (error) {
        return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
}