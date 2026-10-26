"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, CheckCheck, ClipboardCheck, GraduationCap } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const pillars = [
  { number: '01', icon: Brain, title: 'Comprendre', description: 'Un mentor IA qui explique les cours et les exercices étape par étape, à votre rythme.' },
  { number: '02', icon: ClipboardCheck, title: 'Progresser', description: 'Des corrections détaillées pour repérer vos erreurs et savoir comment les éviter.' },
  { number: '03', icon: BookOpen, title: 'S’entraîner', description: 'Les épreuves des universités béninoises et des corrigés pour préparer vos examens.' },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-surface-canvas text-petrol">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <div className="sm:hidden"><Logo size="sm" /></div>
        <div className="hidden sm:block"><Logo size="md" /></div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/auth/login" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border-subtle bg-white px-4 text-sm font-semibold text-primary-dark transition hover:border-primary/40 hover:text-primary">
            Connexion <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#064E55] text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.12]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-14 md:px-10 md:pb-20 md:pt-20">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85">
              <GraduationCap className="h-4 w-4 text-[#D2A7CE]" /> Conçu pour les étudiants du Bénin
            </div>
            <h1 className="text-4xl font-bold leading-[1.08] md:text-6xl">EDUMENTORYA ONE</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              Un mentor académique à vos côtés pour comprendre vos cours, corriger vos devoirs et réussir vos examens.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/auth/signup" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-5 text-sm font-bold text-primary-dark transition hover:bg-[#E9F3F1]">
                Créer mon compte <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/auth/login" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-5 text-sm font-semibold text-white transition hover:bg-white/10">
                J’ai déjà un compte
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-xs font-medium text-white/70">
              <span className="inline-flex items-center gap-2"><CheckCheck className="h-4 w-4 text-[#B8E5D8]" /> Ressources UAC, EPAC, ENEAM</span>
              <span>À partir de 0 FCFA</span>
              <span>Disponible sur web et mobile</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
        <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div><p className="text-xs font-bold uppercase text-secondary">Votre parcours, au même endroit</p><h2 className="mt-2 text-2xl font-bold text-petrol md:text-3xl">De la question à la maîtrise.</h2></div>
          <p className="max-w-md text-sm leading-6 text-petrol/60">Un espace de travail pensé pour les réalités des études supérieures au Bénin.</p>
        </div>
        <div className="grid border-y border-border-subtle md:grid-cols-3 md:divide-x md:divide-border-subtle">
          {pillars.map(({ number, icon: Icon, title, description }) => (
            <article key={number} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-border-subtle py-6 last:border-0 md:border-0 md:px-6 md:first:pl-0 md:last:pr-0">
              <span className="row-span-2 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-base text-primary shadow-level-1"><Icon className="h-5 w-5" /></span>
              <span className="self-end text-[11px] font-bold text-secondary">{number}</span>
              <div><h3 className="text-lg font-bold text-petrol">{title}</h3><p className="mt-2 text-sm leading-6 text-petrol/60">{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-border-subtle bg-surface-base">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-petrol/55 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>EDUMENTORYA ONE · Un étudiant. Un mentor IA. Un chemin vers la réussite.</p>
          <p>Premium à 1 000 FCFA / mois · Annales à partir de 500 FCFA</p>
        </div>
      </footer>
    </main>
  );
}