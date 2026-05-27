import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isAuthPage =
    request.nextUrl.pathname.startsWith("/auth");

  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/company");

  // If no token and trying to access protected routes
  if (!token && isProtectedRoute && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // If logged in and tries to access login/register
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/company/dashboard", request.url));
  }

  return NextResponse.next();
}

// Apply middleware only to relevant routes
export const config = {
  matcher: ["/company/:path*", "/auth/:path*"],
};