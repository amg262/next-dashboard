import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

export async function middleware(request: NextRequest) {
    // First try to get the token from cookies
    let token: string | undefined = request.cookies.get('whateverToken')?.value

    // If no cookie token is found, check for Bearer token in Authorization header
    if (!token) {
        const authHeader = request.headers.get('authorization')

        // Check if it's a Bearer token and extract the actual token
        if (authHeader?.startsWith('Bearer ')) {
            token = authHeader.substring(7)
        }
    }

    console.log("middleware token:", token)

    // Protect all routes except authentication routes
    // Both token types are now handled by this single check
    if (!token &&
        !request.nextUrl.pathname.startsWith('/auth') &&
        !request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        // Match all request paths except specific system paths
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}