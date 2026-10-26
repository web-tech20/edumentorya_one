'use server';

import { createClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/config';

export type AuthActionResult =
  | { ok: true; needsEmailConfirmation?: boolean }
  | { ok: false; error: string };

export type OAuthActionResult =
  | { ok: true; url: string }
  | { ok: false; error: string };

function readCredentials(formData: FormData):
  | { ok: true; email: string; password: string }
  | { ok: false; error: string } {
  const email = formData.get('email');
  const password = formData.get('password');

  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return { ok: false, error: 'Saisissez une adresse email valide.' };
  }

  if (typeof password !== 'string' || password.length < 8) {
    return { ok: false, error: 'Le mot de passe doit contenir au moins 8 caractères.' };
  }

  return { ok: true, email: email.trim().toLowerCase(), password };
}

function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw new Error('NEXT_PUBLIC_SITE_URL is not configured.');
  }

  return siteUrl;
}

export async function signIn(formData: FormData): Promise<AuthActionResult> {
  const credentials = readCredentials(formData);

  if (!credentials.ok) {
    return { ok: false, error: credentials.error };
  }

  if (!isSupabaseConfigured()) {
    return { ok: false, error: 'Supabase n’est pas configuré. Renseignez les variables dans .env.local.' };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword(credentials);

    if (error) {
      return { ok: false, error: 'Email ou mot de passe incorrect.' };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: 'Connexion impossible pour le moment. Réessayez.' };
  }
}

export async function signUp(formData: FormData): Promise<AuthActionResult> {
  const credentials = readCredentials(formData);

  if (!credentials.ok) {
    return { ok: false, error: credentials.error };
  }

  if (!isSupabaseConfigured()) {
    return { ok: false, error: 'Supabase n’est pas configuré. Renseignez les variables dans .env.local.' };
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      ...credentials,
      options: {
        data: { display_name: credentials.email.split('@')[0] },
        emailRedirectTo: new URL('/auth/callback', getSiteUrl()).toString(),
      },
    });

    if (error) {
      return { ok: false, error: 'Création du compte impossible. Vérifiez les informations saisies.' };
    }

    return { ok: true, needsEmailConfirmation: !data.session };
  } catch {
    return { ok: false, error: 'Création du compte impossible. Vérifiez la configuration Supabase.' };
  }
}

export async function signInWithGoogle(): Promise<OAuthActionResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: 'Supabase n’est pas configuré. Renseignez les variables dans .env.local.' };
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: new URL('/auth/callback', getSiteUrl()).toString() },
    });

    if (error || !data.url) {
      return { ok: false, error: 'Connexion Google indisponible. Vérifiez son activation dans Supabase.' };
    }

    return { ok: true, url: data.url };
  } catch {
    return { ok: false, error: 'Connexion Google indisponible. Vérifiez la configuration Supabase.' };
  }
}

export async function signOut() {
  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient();
      await supabase.auth.signOut();
    } catch {
      // The UI still returns to login and the next request validates the session.
    }
  }
}