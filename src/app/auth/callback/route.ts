import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/config';

export async function GET(request: NextRequest) {
  if (!isSupabaseConfigured()) {
    return NextResponse.redirect(new URL('/auth/login?error=configuration', request.url));
  }

  const code = request.nextUrl.searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(new URL('/auth/login?error=oauth', request.url));
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      return NextResponse.redirect(new URL('/auth/login?error=oauth', request.url));
    }
  } catch {
    return NextResponse.redirect(new URL('/auth/login?error=oauth', request.url));
  }

  return NextResponse.redirect(new URL('/dashboard', request.url));
}