import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest, response: NextResponse) {
  const token = request.cookies.get('accessToken');

  if (!token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
}