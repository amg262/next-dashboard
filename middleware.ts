import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {getCookie} from "@/app/actions/actions";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('whateverToken')

    // const token2 = await getCookie('whateverToken')


    console.log("middleware token: ", token);
    // Protect routes that require authentication
    if (!token && request.nextUrl.pathname.startsWith('/protected')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/protected/:path*'
}