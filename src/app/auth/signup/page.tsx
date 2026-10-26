"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Chrome, LockKeyhole, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signUp, signInWithGoogle } from '@/app/actions/auth';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function SignupPage() {
  const router = useRouter();
  const [notice, setNotice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice('');
    setIsSubmitting(true);

    try {
      const result = await signUp(new FormData(event.currentTarget));
      if (!result.ok) {
        setNotice(result.error);
        return;
      }
      if (result.needsEmailConfirmation) {
        setNotice('Compte créé. Consultez votre email pour confirmer votre adresse avant de vous connecter.');
        return;
      }
      router.replace('/dashboard');
      router.refresh();
    } catch {
      setNotice('Création du compte impossible pour le moment. Vérifiez votre réseau et réessayez.');
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleGoogleSignIn() {
    setNotice('');
    setIsSubmitting(true);

    try {
      const result = await signInWithGoogle();
      if (!result.ok) {
        setNotice(result.error);
        return;
      }
      window.location.assign(result.url);
    } catch {
      setNotice('Connexion Google impossible pour le moment. Réessayez.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-canvas px-4 py-10">
      <div className="fixed right-4 top-4 z-10"><ThemeToggle /></div>
      <div className="w-full max-w-md rounded-2xl border border-border-subtle bg-surface-base p-6 shadow-level-2 sm:p-9">
        <div className="mb-8 flex justify-center"><Logo size="md" /></div>
        <div className="mb-7">
          <p className="text-xs font-bold uppercase text-secondary">Votre espace d’étude</p>
          <h1 className="mt-2 text-2xl font-bold text-petrol">Créer mon compte</h1>
          <p className="mt-2 text-sm leading-6 text-petrol/60">Un email et un mot de passe suffisent pour commencer.</p>
        </div>

        <button type="button" disabled={isSubmitting} onClick={handleGoogleSignIn} className="flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-border-subtle px-4 text-sm font-semibold text-petrol transition hover:bg-surface-canvas disabled:cursor-wait disabled:opacity-60">
          <Chrome className="h-4 w-4" /> Continuer avec Google
        </button>

        <div className="my-6 flex items-center gap-3 text-xs text-petrol/45"><span className="h-px flex-1 bg-border-subtle" />ou par email<span className="h-px flex-1 bg-border-subtle" /></div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-xs font-semibold text-petrol">
            Adresse email
            <span className="relative mt-2 block">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-petrol/40" />
              <input required name="email" type="email" autoComplete="email" placeholder="nom@exemple.com" className="h-12 w-full rounded-lg border border-border-subtle bg-surface-base pl-10 pr-3 text-sm font-normal outline-none transition placeholder:text-petrol/35 focus:border-primary focus:ring-2 focus:ring-primary/15" />
            </span>
          </label>
          <label className="block text-xs font-semibold text-petrol">
            Mot de passe
            <span className="relative mt-2 block">
              <LockKeyhole className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-petrol/40" />
              <input required name="password" type="password" minLength={8} autoComplete="new-password" placeholder="8 caractères minimum" className="h-12 w-full rounded-lg border border-border-subtle bg-surface-base pl-10 pr-3 text-sm font-normal outline-none transition placeholder:text-petrol/35 focus:border-primary focus:ring-2 focus:ring-primary/15" />
            </span>
          </label>
          <button type="submit" disabled={isSubmitting} className="flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-primary px-4 text-sm font-bold text-white transition hover:bg-primary-dark disabled:cursor-wait disabled:opacity-60">
            {isSubmitting ? 'Création…' : 'Créer mon compte'} <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {notice && <p role="status" className="mt-4 rounded-lg bg-secondary/10 px-3 py-2.5 text-xs leading-5 text-secondary">{notice}</p>}
        <p className="mt-6 text-center text-sm text-petrol/60">Déjà inscrit ? <Link href="/auth/login" className="font-bold text-primary hover:underline">Se connecter</Link></p>
        <Link href="/landing" className="mt-5 block text-center text-xs font-medium text-petrol/45 hover:text-primary">Retour à l’accueil</Link>
      </div>
    </main>
  );
}