import { verfiyAdminToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    try {
        const adminAuth = await verfiyAdminToken(req);
        if(!adminAuth) {return NextResponse.json({error: "Unauthorized"}, {status: 401})};


        // Pagination dan filter
        const { searchParams } = new URL(req.url);
        const page = Number(searchParams.get('page')) || 1;
        const limit = Number(searchParams.get('limit')) || 10;
        const search = searchParams.get('search') || '';
        const department = searchParams.get('department') || '';
        const skip = (page - 1) * limit;

        const where: any = {};

        if(search) {
            where.OR = [
                {fullName: {contains: search, mode: 'insensitive'}},
                {nim: {contains: search, mode: 'insensitive'}},
                {email: {contains: search, mode: 'insensitive'}},
                {phoneNumber: {contains: search, mode: 'insensitive'}}
            ];
        };

        if(department) {
            where.department = department;
        };

        const total = await prisma.user.count({where});

        const users = await prisma.user.findMany({
            where,
            skip,
            take: limit,
            orderBy: {fullName: 'asc'}
        });

        return NextResponse.json({
            users,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            }
        });
    } catch (error) {
        return NextResponse.json(
            {error: "Request failed"},
            {status: 406}
        )
    }
};


export async function POST(req: Request) {
    try {
        const adminAuth = await verfiyAdminToken(req);
        if(!adminAuth) {return NextResponse.json({error: "Unauthorized"}, {status: 401})};

        const {fullName, nim, email, position, phoneNumber, department, cardUid} = await req.json();

        if(!fullName || !nim || !email || !phoneNumber || !department || !position) {
            return NextResponse.json({error: "Missing required fields"}, {status: 400});
        };
        
        const existingUser = await prisma.user.findUnique({where: {nim}});
        if(existingUser) {
            return NextResponse.json({error: "nim sudah terdaftar"}, {status: 400});
        };

        if(cardUid) {
            const existingCard = await prisma.rfidCard.findUnique({where: {cardUid}});
            if(existingCard) {
                return NextResponse.json({error: "Card sudah terdaftar"}, {status: 400});
            }
        };

        const user = await prisma.$transaction(async (tx) => {
            const createdUser = await tx.user.create({
                data: {
                    nim,
                    fullName,
                    department,
                    position,
                    email,
                    phoneNumber
                }
            });

            if(cardUid) {
                await tx.rfidCard.create({
                    data: {
                        cardUid,
                        userId: createdUser.id
                    }
                });
            };

            return createdUser;
        });

        await prisma.adminActivity.create({
            data: {
                adminId: adminAuth.id!,
                action: "CREATE_USER",
                description: `membuat User ${fullName} dengan NIM ${nim}`,
                ipAddress: req.headers.get('x-forwarded-for') || ''
            }
        });

        return NextResponse.json({
            message: "berhasil membuat akunu",
            user
        }, {status: 201});
        
    } catch (error) {
        return NextResponse.json({
            message: "request gagal",
            error
        }, {status: 406});
    }
}