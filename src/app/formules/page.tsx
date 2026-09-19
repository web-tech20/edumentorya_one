"use client";

import React from 'react';
import { DoubleBezelContainer } from '@/components/ui/DoubleBezelContainer';
import { IslandButton } from '@/components/ui/IslandButton';
import { cn } from '@/lib/utils';
import { Check, Sparkles, GraduationCap, Users, Bookmark, Zap, ChevronRight, Library } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';

const plans = [
  {
    name: "Gratuit",
    price: "0",
    period: "Toujours",
    desc: "Explication de cours, questions et apprentissage par chapitre.",
    features: ["Questions IA limitées", "Annales gratuites", "Accès bibliothèque standard"],
    icon: Bookmark,
    featured: false
  },
  {
    name: "Premium",
    price: "1 000",
    period: "Mois",
    desc: "L'expérience complète avec correction OCR et mentorat illimité.",
    features: ["Mentorat IA Illimité", "Correction de copies (Photo/PDF)", "Toutes les annales incluses", "Explications détaillées"],
    icon: Sparkles,
    featured: true
  },
  {
    name: "Annales",
    price: "500",
    period: "Unité",
    desc: "Accédez à n'importe quelle épreuve payante instantanément.",
    features: ["Accès épreuve + corrigé", "Explication par le mentor", "Sauvegarde cloud"],
    icon: Library,
    featured: false
  }
];

export default function FormulesPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 pt-12 space-y-12 text-center pb-20">
        <header className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4" />
            Accès Académique
          </div>
          <h1 className="text-5xl font-bold tracking-tight">Formules d'Adhésion</h1>
          <p className="text-lg text-petrol/60 font-medium leading-relaxed">
            Un mentor IA personnel accessible à tous les étudiants au prix du marché local.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <DoubleBezelContainer
              key={i}
              outerClassName={cn("h-full", plan.featured && "scale-105 shadow-level-3 z-10")}
              className={cn(
                "p-10 flex flex-col justify-between text-left h-full",
                plan.featured ? "bg-surface-base border-2 border-primary/20" : "bg-surface-base"
              )}
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center",
                    plan.featured ? "bg-signature-gradient text-white shadow-ai-glow" : "bg-surface-canvas text-petrol"
                  )}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  {plan.featured && (
                    <span className="text-[10px] font-bold text-primary bg-primary/5 px-3 py-1 rounded-full uppercase tracking-widest">
                      Plus Populaire
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-petrol">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-sm font-semibold text-petrol/40">FCFA / {plan.period}</span>
                  </div>
                  <p className="mt-4 text-sm text-petrol/60 leading-relaxed font-medium">{plan.desc}</p>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3 text-xs font-bold text-petrol/70">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <IslandButton
                  variant={plan.featured ? 'secondary' : 'primary'}
                  className="w-full justify-center"
                  icon={ChevronRight}
                >
                  Activer maintenant
                </IslandButton>
                {plan.price !== '0' && (
                  <p className="text-[9px] font-bold text-center text-petrol/30 uppercase tracking-[0.2em]">
                    Paiement MTN / MOOV Money
                  </p>
                )}
              </div>
            </DoubleBezelContainer>
          ))}
        </section>

        <footer className="pt-12 border-t border-border-subtle flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
             <div className="h-px w-12 bg-border-subtle" />
             <GraduationCap className="w-6 h-6 text-petrol/20" />
             <div className="h-px w-12 bg-border-subtle" />
          </div>
          <p className="text-xs font-bold text-petrol/40 uppercase tracking-widest leading-loose">
            Système homologué • Activation immédiate par SMS <br />
            EDUMENTORYA ONE © 2025
          </p>
        </footer>
      </div>
    </PageTransition>
  );
}
