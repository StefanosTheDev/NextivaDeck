import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/catalog" || pathname.startsWith("/catalog/")) {
    return NextResponse.redirect(
      new URL(`/projects/investor-deck/catalog${search}`, request.url)
    );
  }

  if (pathname === "/print") {
    return NextResponse.redirect(
      new URL(`/projects/investor-deck/print${search}`, request.url)
    );
  }

  if (pathname === "/print/raw") {
    return NextResponse.redirect(
      new URL(`/projects/investor-deck/print/raw${search}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/catalog/:path*", "/print", "/print/raw"],
};
