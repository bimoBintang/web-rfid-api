import { verfiyAdminToken } from "@/lib/auth";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import crypto from "crypto";

export async function GET(req: Request) {
    try {
        const adminAuth = await verfiyAdminToken(req);
        if(!adminAuth.success) {return NextResponse.json({error: "Unauthorized"}, {status: 401})};

        const devices = await prisma.device.findMany({include: {apiToken: true}});
        return NextResponse.json({devices})
    } catch (error) {
        return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
};


export async function POST(req: Request) {
    try {
        const adminAuth = await verfiyAdminToken(req);
        if(!adminAuth.success) {return NextResponse.json({error: "Unauthorized"}, {status: 401})};

        const { deviceName, macAddress, location } = await req.json();

        if(!deviceName || !macAddress) {
            return NextResponse.json({error: "Device name and MAC address are required"}, {status: 400})
        };

        const existingDevice = await prisma.device.findUnique({where: {macAddress}});

        if(existingDevice) {
            return NextResponse.json({error: "Device already registered"}, {status: 400});
        };

        const token = crypto.randomBytes(32).toString('hex');
        const expiresAt = new Date();
        expiresAt.setFullYear(expiresAt.getFullYear() + 1);

        const device = await prisma.device.create({
            data: {
                deviceName,
                macAddress,
                location,
                apiToken: {
                    create: {
                        token,
                        description: `API token for ${deviceName}`,
                        expiresAt
                    }
                }
            },
            include: {apiToken: true}
        });

        await prisma.adminActivity.create({
            data: {
                adminId: adminAuth.id!,
                action: 'REGISTER_DEVICE',
                description: `Register device ${deviceName} ${macAddress}`,
                ipAddress: req.headers.get('x-forwarded-for') || ''
            }
        });

        return NextResponse.json({message: "Device registered successfully", device}, {status: 201});
    } catch (error) {
        return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
}