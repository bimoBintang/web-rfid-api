import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const token =
        req.cookies.get("next-auth.session-token")?.value ||
        req.cookies.get("__Secure-next-auth.session-token")?.value;


    if (pathname.startsWith("/dashboard")) {
        if (!token) {

        return NextResponse.redirect(new URL("/auth/sign-in", req.url));
        }
    }

    if (pathname === "/auth") {
        req.headers.set("X-Hide-Layout", "true");
    }
    
    const res = NextResponse.next();
    res.headers.set('Access-Control-Allow-Origin', `${process.env.NEXT_PUBLIC_APP_URL}`);
    res.headers.set('Access-Control-Allow-Credentials', 'true');
    return res;
}

export const config = {
  matcher: '/api/:path*', 
};
