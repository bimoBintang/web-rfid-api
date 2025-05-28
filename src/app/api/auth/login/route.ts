import jwt  from 'jsonwebtoken';
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z } from "zod"

const loginSchema = z.object({
    email: z.string().email("format email tidak valid"),
    password: z.string().min(1, "password tidak boleh kosong")
});


export async function POST(req: Request) {
    try {
        const body = await req.json();

        const validation = loginSchema.safeParse(body);

        if(!validation.success) {
            return NextResponse.json(
                {error: "Data input tidak valid", details: validation.error.format()},
                { status: 400},
            )
        }

        const {email, password} = validation.data;

        const admin = await prisma.admin.findUnique({where: {email}});

        if(!admin || !admin.isActive) {
            return NextResponse.json({error: "Kredensial tidak valid"}, {status: 401});
        };

        const passwordMatch = await bcrypt.compare(password, admin.password);
        if(!passwordMatch) {
            return NextResponse.json({error: "Kredensial tidak valid"}, {status: 401});
        };

        const token = jwt.sign(
            {id: admin.id, email: admin.email, role: admin.role},
            process.env.JWT_SECRET as string,
            {expiresIn: '1h'}
        );

        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined in environment variables");
            return NextResponse.json(
                { error: "Konfigurasi server tidak valid" },
                { status: 500 }
            );
        };

        const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
        await prisma.adminActivity.create({
            data: {
                adminId: admin.id!,
                action: "LOGIN",
                description: `Admin ${admin.username} logged in`,
                ipAddress: clientIp
            }
        });


        const response = NextResponse.json({
            message: 'Login Successful',
            token,
            admin: {
                id: admin.id,
                email: admin.email,
                username: admin.username,
                role: admin.role
            }
        });

        response.cookies.set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60
        })

        response.headers.set('token', token);
        response.headers.set('Access-Control-Allow-Origin', `${process.env.NEXT_PUBLIC_APP_URL}`);
        response.headers.set('Access-Control-Allow-Credentials', 'true');

        return response;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            {error: "terjadi kesalahan saat login"},
            {status: 500}
        )
    }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:5173',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}