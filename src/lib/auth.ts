import prisma from "./prisma";
import jwt from "jsonwebtoken";

interface AdminJwtPayload {
    id: number,
    username: string,
    role: string,
}

interface AdminActivityPayload {
    adminId: number;
    action: string;
    description: string;
    ipAddress?: string
}

export async function verifyAdminToken(req: Request) {
    try {
        const authHeader = req.headers.get('authorization');
        if(!authHeader || !authHeader.startsWith('Bearer ')) {
            return {success: false, message: "Unauthorized: No token provided"}
        };

        const token = authHeader.split(' ')[1];
        if(!token) {
            return {success: false, message: "Unauthorized: Invalid token format"}
        };

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as AdminJwtPayload;
        if(!decoded || !decoded.id) {
            return {success: false, message: "Unauthorized: Invalid token"}
        };

        const admin = await prisma.admin.findUnique({
            where: {id: decoded.id}
        });

        if(!admin || !admin?.isActive) {
            return {success: false, message: "Unauthorized: Admin not found or inactive"}
        };

        return {
            success: true,
            id: admin.id,
            username: admin.username,
            role: admin.role
        }
    } catch (error) {
        return { success: false, message: 'Unauthorized: Invalid token' };
    }
};

export async function verifyDeviceToken(req: Request) {
    try {
        const authHeader = req.headers.get('authorization');
        if(!authHeader || !authHeader.startsWith('Bearer ')) {
            return {success: false, message: "Unauthorized: No token provided"}
        };

        const token = authHeader.split(' ')[1];
        if(!token) {
            return {success: false, message: "Unauthorized: Invalid token format"}
        };

        const apiToken = await prisma.apiToken.findUnique({
            where: {token},
            include: {device: true}
        });

        if(!apiToken || !apiToken.isActive) {
            return {success: false, message: "Unauthorized: Invalid device token"}
        };

        if(apiToken.expiresAt && Date.now() > apiToken.expiresAt.getTime()) {
           return {success: false, message: "Unauthorized: Device token expired"} 
        };

        if (!apiToken.device || !apiToken.device.isActive) {
            return { success: false, message: 'Unauthorized: Device not found or inactive' };
        };

        return {
            success: true,
            deviceId: apiToken.deviceId,
            deviceName: apiToken.device.deviceName,
            deviceMac: apiToken.device.macAddress
        }
    } catch (error) {
        return { success: false, message: 'Unauthorized: Invalid token' };
    }
};

export function generateAdminToken({id, username, role}: AdminJwtPayload) {
    return jwt.sign({id, username, role}, process.env.JWT_SECRET as string, {expiresIn: '1h'});
};

export function generateDeviceToken() {
    const character = process.env.RANDOM_CHARACTER as string;
    const tokenLength = 32;

    let token = '';
    for (let i = 0; i < tokenLength; i++) {
        token += character.charAt(Math.floor(Math.random() * character.length));
    };

    return token;
};

export function hasRole(role: string | string[], userRole: string) {
    if(Array.isArray(role)) {
        return role.includes(userRole);
    } 
    return role === userRole;
};

export async function logAdminActivity({adminId, action, description, ipAddress}: AdminActivityPayload) {
    try {
        await prisma.adminActivity.create({
            data: {
                adminId,
                action,
                description,
                ipAddress
            }
        });
        return true;
    } catch (error) {
        console.error('Failed to log admin activity:', error);
        return false;
    }
};

export function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export function isValidMacAddress(mac: string) {
    const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return macRegex.test(mac);
}