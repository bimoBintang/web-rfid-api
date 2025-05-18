import { verfiyDeviceToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const deviceAuth = await verfiyDeviceToken(req);
        if(!deviceAuth.success) {return NextResponse.json({error: "Unauthorized"}, {status: 401})};

        const { temperature, humidity, batteryLevel, signalStrength } = await req.json();
        const deviceId = deviceAuth.deviceId;

        const telemetry = await prisma.deviceTelemetry.create({
        data: {
            deviceId: deviceId!,
            temperature,
            humidity,
            batteryLevel,
            signalStrength
        }
        });

        await prisma.device.update({
        where: { id: deviceId },
        data: { lastOnline: new Date() }
        });

        return NextResponse.json({
        message: 'Telemetry data recorded',
        telemetry
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}