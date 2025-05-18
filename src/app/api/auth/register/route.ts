import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

const registerSchema = z.object({
  username: z.string().min(1, "username tidak boleh kosong"),
  email: z.string().email("format email tidak valid"),
  password: z.string().min(7, "password minimal 7 karakter")
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Menerima permintaan pendaftaran untuk:", body.email);
    
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      console.log("Validasi gagal:", validation.error.format());
      return NextResponse.json(
        { error: "gagal input data", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { username, email, password } = validation.data;

    try {
      await prisma.$connect();
      console.log("Berhasil terhubung ke database");
      console.log("Memeriksa admin yang ada dengan email:", email, "atau username:", username);
      
      const existingAdmin = await prisma.admin.findFirst({
        where: {
          OR: [
            { email },
            { username }
          ]
        }
      });

      console.log("Database query result:", existingAdmin ? "Admin exists" : "Admin does not exist");

      if (existingAdmin) {
        return NextResponse.json(
          { error: "email atau username sudah digunakan" },
          { status: 409 }
        );
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      
      console.log("Creating new admin with username:", username);

      const newAdmin = await prisma.admin.create({
        data: {
          username,
          email,
          password: hashedPassword,
        }
      });

      console.log("Admin berhasil dibuat dengan ID:", newAdmin.id);
      const { password: _, ...adminWithoutPassword } = newAdmin;

      return NextResponse.json(
        { message: "Berhasil register", admin: adminWithoutPassword },
        { status: 201 }
      );
    } catch (dbError: any) {
      console.error("Database operation error:", dbError);
      const errorMessage = dbError.message || "Unknown database error";
      const errorCode = dbError.code || "NO_CODE";
      const errorMeta = dbError.meta ? JSON.stringify(dbError.meta) : "NO_META";
      
      console.error(`Error code: ${errorCode}, Message: ${errorMessage}, Meta: ${errorMeta}`);
      
      return NextResponse.json(
        { 
          error: "Gagal mendaftarkan akun", 
          details: errorMessage,
          code: errorCode,
          meta: errorMeta
        },
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Gagal mendaftarkan Akun", details: error.message },
      { status: 500 }
    );
  }
}