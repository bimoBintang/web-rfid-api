import { NextRequest, NextResponse } from "next/server";
import { verfiyAdminToken, logAdminActivity } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {

        const authHeader = req.headers.get('authorization');

        if(!authHeader && authHeader?.startsWith('Bearer')) {
            const authResult = await verfiyAdminToken(req);

            if (!authResult.success) {
                return NextResponse.json({
                    message: "User sudah logout atau tidak terautentikasi"
                }, { status: 401 });
            }

            const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
            
            await logAdminActivity({
                adminId: authResult.id!,
                action: "LOGOUT",
                description: `Admin ${authResult.username} telah logout`,
                ipAddress: clientIp
            });
        }
        

        const response = NextResponse.json({
            message: "Logout berhasil"
        });

        response.cookies.set({
            name: "token",
            value: "",
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0
        });

        return response;
    } catch (error) {
        console.error("Logout error:", error);
        return NextResponse.json(
            { message: "Terjadi kesalahan saat logout" },
            { status: 500 }
        );
    }
}