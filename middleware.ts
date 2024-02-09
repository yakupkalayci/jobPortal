import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = request.cookies.get("session");
  
  if(request.nextUrl.pathname.startsWith('/login')) {
    if(session) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  if(request.nextUrl.pathname.startsWith('/dashboard')) {

    // Return to /login if don't have a session
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
