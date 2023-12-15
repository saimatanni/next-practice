import { NextResponse } from "next/server";

export function middleware(request) {
  // Uncomment and modify the condition as needed
  // if (request.nextUrl.pathname !== "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // Check if the path is exactly "/about", allow access
  //  if (request.nextUrl.pathname === "/about") {
  //     return NextResponse.next();
  //   }

  // Always redirect to the "/login" route for demonstration purposes
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  // Update the matcher based on your requirements
  matcher: ["/about/:path*"],
};
