"use client";

import React from 'react';
import { DoubleBezelContainer } from '@/components/ui/DoubleBezelContainer';
import { IslandButton } from '@/components/ui/IslandButton';
import { cn } from '@/lib/utils';
import { Check, Sparkles, GraduationCap, Bookmark, Zap, ChevronRight, Library } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';

const plans = [
  {
    name: "Gratuit",
    price: "0",
    period: "Toujours",
    desc: "Explication de cours et questions.",
    features: ["Questions IA limitées", "Annales gratuites"],
    icon: Bookmark,
    featured: false
  },
  {
    name: "Premium",
    price: "1 000",
    period: "Mois",
    desc: "Correction OCR et mentorat illimité.",
    features: ["Mentorat IA Illimité", "Correction Photo/PDF", "Toutes les annales"],
    icon: Sparkles,
    featured: true
  },
  {
    name: "Annales",
    price: "500",
    period: "Unité",
    desc: "Accédez à une épreuve payante.",
    features: ["Accès épreuve + corrigé", "Explication mentor"],
    icon: Library,
    featured: false
  }
];

export default function FormulesPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto space-y-12 text-center pb-20">
        <header className="max-w-2xl mx-auto space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-primary text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
            <Zap className="w-3.5 md:w-4 h-3.5 md:h-4" />
            Accès Académique
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Nos Formules</h1>
          <p className="text-sm md:text-lg text-petrol/60 font-medium leading-relaxed px-4">
            Un mentor IA personnel au prix du marché local.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
          {plans.map((plan, i) => (
            <DoubleBezelContainer
              key={i}
              outerClassName={cn("h-full", plan.featured && "md:scale-105 shadow-level-2 z-10")}
              className={cn(
                "p-8 md:p-10 flex flex-col justify-between text-left h-full transition-all",
                plan.featured ? "bg-surface-base border-2 border-primary/20" : "bg-surface-base"
              )}
            >
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center justify-between">
                  <div className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center",
                    plan.featured ? "bg-signature-gradient text-white shadow-ai-glow" : "bg-surface-canvas text-petrol"
                  )}>
                    <plan.icon className="w-5 md:w-6 h-5 md:h-6" />
                  </div>
                  {plan.featured && (
                    <span className="text-[8px] md:text-[10px] font-bold text-primary bg-primary/5 px-2 md:px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">
                      Populaire
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-petrol">{plan.name}</h3>
                  <div className="mt-3 md:mt-4 flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-xs md:text-sm font-semibold text-petrol/40">FCFA / {plan.period}</span>
                  </div>
                  <p className="mt-3 md:mt-4 text-xs md:text-sm text-petrol/60 leading-relaxed font-medium">{plan.desc}</p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-xs font-bold text-petrol/70">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 md:mt-12 space-y-3 md:space-y-4">
                <IslandButton
                  variant={plan.featured ? 'secondary' : 'primary'}
                  className="w-full justify-center h-12 md:h-14"
                  icon={ChevronRight}
                >
                  Activer
                </IslandButton>
                {plan.price !== '0' && (
                  <p className="text-[8px] md:text-[9px] font-bold text-center text-petrol/30 uppercase tracking-[0.2em]">
                    Paiement MTN / MOOV Money
                  </p>
                )}
              </div>
            </DoubleBezelContainer>
          ))}
        </section>

        <footer className="pt-10 md:pt-12 border-t border-border-subtle flex flex-col items-center gap-4 px-4">
          <div className="flex items-center gap-4">
             <div className="h-px w-8 md:w-12 bg-border-subtle" />
             <GraduationCap className="w-5 md:w-6 h-5 md:h-6 text-petrol/20" />
             <div className="h-px w-8 md:w-12 bg-border-subtle" />
          </div>
          <p className="text-[10px] font-bold text-petrol/40 uppercase tracking-widest leading-loose text-center">
            Système homologué • Activation par SMS <br />
            EDUMENTORYA ONE © 2025
          </p>
        </footer>
      </div>
    </PageTransition>
  );
}
