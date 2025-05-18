import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { token, macAddress} = await req.json();

        const apiToken = await prisma.apiToken.findUnique({
            where: {token},
            include: {device: true}
        });

        if(!apiToken || !apiToken.isActive || apiToken.device.macAddress !== macAddress) {
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        };

        if(apiToken.expiresAt && Date.now() > apiToken.expiresAt.getTime()) {
            return NextResponse.json({error: "Token expired"}, {status: 401});
        };

        await prisma.device.update({
            where: {id: apiToken.deviceId},
            data: {
                lastOnline: new Date(),
                ipAddress: req.headers.get('x-forwarded-for') || undefined
            }
        });

        return NextResponse.json({
            message: "Device authenticated successfully",
            deviceId: apiToken.deviceId,
            deviceName: apiToken.device.deviceName
        });

    } catch (error) {
        return NextResponse.json({error: "Invalid request"}, {status: 406});
    }
}