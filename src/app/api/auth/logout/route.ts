import { NextResponse } from "next/server";
import { verifyAdminToken, logAdminActivity } from "@/lib/auth";

export async function POST(req: Request) {
    try {

        const authHeader = req.headers.get('authorization');

        if(!authHeader && authHeader?.startsWith('Bearer ')) {
            const authResult = await verifyAdminToken(req);

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

        response.headers.set('Access-Control-Allow-Origin', `${process.env.NEXT_PUBLIC_APP_URL}`);
        response.headers.set('Access-Control-Allow-Credentials', 'true');

        return response;
    } catch (error) {
        console.error("Logout error:", error);
        return NextResponse.json(
            { message: "Terjadi kesalahan saat logout" },
            { status: 500 }
        );
    }
}

export async function OPTIONS() {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_APP_URL}`,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }