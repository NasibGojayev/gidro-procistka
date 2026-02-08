import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const { pathname, search } = request.nextUrl;

    // If URL has trailing slash AND is not root
    if (pathname !== '/' && pathname.endsWith('/')) {
        // Remove trailing slash
        const newPathname = pathname.replace(/\/$/, '');
        const url = request.nextUrl.clone();
        url.pathname = newPathname;

        // 301 Permanent Redirect
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Match all paths except static files, images, and Next.js internal paths
        '/((?!_next/static|_next/image|favicon.ico|images|media|upload).*)',
    ],
};
