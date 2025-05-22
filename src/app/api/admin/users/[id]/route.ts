import { verfiyAdminToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: {params: {id: string}}) {
    try {
        const adminAuth = await verfiyAdminToken(req);
        if(!adminAuth) {return NextResponse.json({error: "Unauthorized"}, {status: 401})};
    
       const { params } = context;
       const id = parseInt(params.id);

        const user = await prisma.user.findUnique({
            where: {id},
            include: {
                rfidCard: true,
                attendances: {
                    orderBy: {date: 'desc'},
                    take: 30,
                    include: {schedule: true}
                }
            }
        });

        if(!user) {
            return NextResponse.json({error: "User not found"}, {status: 404});
        };

        // Get days since last activity
        let daysSinceLastActivity = null;
        if (user.attendances.length > 0 && user.attendances[0].checkInTime) {
            const lastActivity = new Date(user.attendances[0].checkInTime);
            const today = new Date();
            const diffTime = Math.abs(today.getTime() - lastActivity.getTime());
            daysSinceLastActivity = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }

        return NextResponse.json({
            user,
            daysSinceLastActivity,
            inactiveThreshold: 90 // Including the threshold for UI reference
        });
    } catch (error) {
        return NextResponse.json({error: "Internal server error"}, {status: 500});
    }
};

export async function PATCH(req: Request, context: { params: { id: string } }) {
    try {
        const adminAuth = await verfiyAdminToken(req);
        if(!adminAuth.success) {return NextResponse.json({error: "Unauthorized"}, {status: 401})};

        const { params } = context;
        const id = parseInt(params.id);

        const { fullName, department, position, email, phoneNumber, isActive, cardUid } = await req.json();

        const existingUser = await prisma.user.findUnique({
            where: {id}, 
            include: {rfidCard: true}
        });

        if(!existingUser) {
            return NextResponse.json({message: "User not found"}, {status: 404});
        };

        const updatedUser = await prisma.$transaction(async (tx) => {
            const user = await tx.user.update({
                where: {id},
                data: {
                    fullName,
                    department,
                    position,
                    email,
                    phoneNumber,
                    isActive
                }
            });

            if(cardUid) {
                if(existingUser.rfidCard) {
                    if(existingUser.rfidCard.cardUid !== cardUid) {
                        const existingCard = await tx.rfidCard.findUnique({
                            where: {cardUid}
                        });

                        if(existingCard) {
                            throw new Error('Card sudah ditugaskan ke pengguna lain');
                        };

                        await tx.rfidCard.update({
                            where: {id: existingUser.rfidCard.id},
                            data: {cardUid}
                        });
                    }
                } else {
                    const existingCard = await tx.rfidCard.findUnique({
                        where: {cardUid}
                    });

                    if(existingCard) {
                        throw new Error('RFID Card sudah ditugaskan ke pengguna lain');
                    };

                    await tx.rfidCard.create({
                        data: {
                            cardUid,
                            userId: id
                        }
                    });
                }
            }

            return user;
        }).catch((error) => {
            if(error.message === "Card already assigned to another user" || 
               error.message === "RFID Card already assigned to another user" ||
               error.message === "Card sudah ditugaskan ke pengguna lain" ||
               error.message === "RFID Card sudah ditugaskan ke pengguna lain") {
                throw new Error(error.message);
            };
            throw error;
        });

        if (!updatedUser || typeof updatedUser !== 'object' || !('fullName' in updatedUser)) {
            return NextResponse.json({error: "Data pengguna tidak valid dikembalikan"}, {status: 500});
        }

        await prisma.adminActivity.create({
            data: {
                adminId: adminAuth.id!,
                action: "UPDATED_USER",
                description: `Updated user ${updatedUser.fullName} with ID ${id}`,
                ipAddress: req.headers.get('x-forwarded-for') || ''
            }
        });

        return NextResponse.json({
            message: 'user updated successfully',
            user: updatedUser
        });
    } catch (error) {
        if (error instanceof Error) {
            if (error.message === 'RFID Card sudah ditugaskan ke pengguna lain' ||
                error.message === 'Card sudah ditugaskan ke pengguna lain') {
                return NextResponse.json(
                    { error: error.message },
                    { status: 400 }
                );
            }
        }

        return NextResponse.json({error: "Update user failed"}, {status: 406});
    }
};

export async function DELETE(req: Request, context: { params: { id: string}}) {
    try {
        const adminAuth = await verfiyAdminToken(req);
        if(!adminAuth.success) {return NextResponse.json({error: "Unauthorized"}, {status: 401})};

        const { params } = context;
        const id = parseInt(params.id);

        const user = await prisma.user.findUnique({where: {id}});
        if(!user) {
            return NextResponse.json({error: "User not found"}, {status: 404});
        };

        await prisma.user.delete({where: {id}});

        await prisma.adminActivity.create({
            data: {
                adminId: adminAuth.id!,
                action: "DELETED_USER",
                description: `Deleted user ${user.fullName} with ID ${id}`,
                ipAddress: req.headers.get('x-forwarded-for') || ''
            }
        });

        return NextResponse.json({
            message: "User deleted successfully"
        });
    } catch (error) {
        return NextResponse.json(
            {error: "Deleted user failed"},
            {status: 406}
        );
    }
}