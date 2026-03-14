import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.VERCEL) {
    const { pathname } = request.nextUrl;
    // Block catalog and the print download page in prod
    // Allow /print/raw since Puppeteer uses it for PDF/PPTX generation
    if (pathname.startsWith("/catalog") || pathname === "/print") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/catalog/:path*", "/print"],
};
