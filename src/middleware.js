import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// Hardcoded secret (for testing only!)
const secret = "my-secret-key";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Protect /AddProduct route
  if (pathname.startsWith("/AddProduct")) {
    // get token from request
    const token = await getToken({ req, secret });

    // If token not exists, redirect to /Login
    if (!token) {
      return NextResponse.redirect(new URL("/Login", req.url));
    }
  }

  return NextResponse.next();
}

// Only protect /AddProduct route
export const config = {
  matcher: ["/AddProduct/:path*"],
};
