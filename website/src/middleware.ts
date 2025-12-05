import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // Handle precise.ai/local → shows local page
  // Handle precise.ai/cdp → shows cdp page
  // Everything else → default page

  // If already on a specific path, let Next.js handle it normally
  // The routing is handled by the file structure:
  // - /local → src/app/local/page.tsx
  // - /cdp → src/app/cdp/page.tsx
  // - / → src/app/page.tsx

  // Optional: Add any custom routing logic here
  // For example, redirect old URLs or handle subdomains

  // Check for subdomain-based routing (if needed in the future)
  // const subdomain = hostname.split('.')[0];
  // if (subdomain === 'local') {
  //   return NextResponse.rewrite(new URL('/local', request.url));
  // }

  // Log visits for analytics (optional)
  if (process.env.NODE_ENV === 'production') {
    // Could add analytics tracking here
  }

  // Continue with normal request handling
  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)',
  ],
};
