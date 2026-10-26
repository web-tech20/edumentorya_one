import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { getSupabasePublicConfig, isSupabaseConfigured } from '@/lib/supabase/config';
import type { Database } from '@/lib/supabase/database.types';

const protectedRoutes = ['/dashboard', '/mentor', '/corrections', '/archives', '/formules'];

export async function proxy(request: NextRequest) {
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname === route || request.nextUrl.pathname.startsWith(`${route}/`)
  );

  if (!isProtectedRoute) {
    return NextResponse.next({ request });
  }

  if (!isSupabaseConfigured()) {
    const loginUrl = new URL('/auth/login?error=configuration', request.url);
    return NextResponse.redirect(loginUrl);
  }

  const { url, publishableKey } = getSupabasePublicConfig();
  let response = NextResponse.next({ request });

  const supabase = createServerClient<Database>(url, publishableKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, cacheHeaders) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
        Object.entries(cacheHeaders).forEach(([name, value]) => {
          response.headers.set(name, value);
        });
      },
    },
  });

  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    const loginUrl = new URL('/auth/login', request.url);
    const redirectResponse = NextResponse.redirect(loginUrl);
    response.cookies.getAll().forEach(({ name, value, ...options }) => {
      redirectResponse.cookies.set(name, value, options);
    });
    for (const header of ['cache-control', 'expires', 'pragma']) {
      const value = response.headers.get(header);
      if (value) {
        redirectResponse.headers.set(header, value);
      }
    }
    return redirectResponse;
  }

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/mentor/:path*', '/corrections/:path*', '/archives/:path*', '/formules/:path*'],
};