import { verifyAdminToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    try {
        const adminAuth = await verifyAdminToken(req);
        if(!adminAuth.success) {return NextResponse.json({error: "Unauthorized"}, {status: 401})};

        const schedules = await prisma.schedule.findMany({orderBy: {name: 'asc'}});

        return NextResponse.json({schedules});
    } catch (error) {
        return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
};

export async function POST(req: Request) {
    try {
        const adminAuth = await verifyAdminToken(req);
        if(!adminAuth.success) {return NextResponse.json({error: "Unauthorized"}, {status: 401})};

        const { name, checkInStart, checkInEnd, checkOutStart, checkOutEnd, isActive } = await req.json();

        if(!name || checkInStart || checkInEnd || checkOutStart || checkOutEnd) {
            return NextResponse.json(
                {error: "All fields are required"},
                {status: 400}
            )
        };

        const schedule = await prisma.schedule.create({
            data: {
                name,
                checkInStart: new Date(checkInStart),
                checkInEnd: new Date(checkInEnd),
                checkOutStart: new Date(checkOutStart),
                checkOutEnd: new Date(checkOutEnd),
                isActive: isActive ?? true
            }
        });

        await prisma.adminActivity.create({
            data: {
                adminId:adminAuth.id!,
                action: "Schedule Created",
                description: `Schedule ${schedule.name} created`,
                ipAddress: req.headers.get('x-forwarded-for') || ''
            }
        });

        return NextResponse.json({
            message: "Schedule created successfully",
            schedule
        }, {status: 201})
    } catch (error) {
        return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
}