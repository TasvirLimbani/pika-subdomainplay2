import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add CORS headers for API routes
  response.headers.set("Access-Control-Allow-Origin", "*")
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  response.headers.set("Access-Control-Allow-Headers", "Content-Type")

  return response
}

export const config = {
  matcher: "/api/:path*",
}
