"use client";

import React from 'react';
import { DoubleBezelContainer } from '@/components/ui/DoubleBezelContainer';
import { IslandButton } from '@/components/ui/IslandButton';
import { cn } from '@/lib/utils';
import { Search, Filter, BookOpen, Download, FileText, Calendar, GraduationCap, Zap } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';

const subjects = [
  { id: 1, title: "Algèbre Linéaire - Partiel S3", university: "UAC / FAST", year: "2024", type: "Examen", code: "MAT101", price: "Premium" },
  { id: 2, title: "Algorithmique & Graphes", university: "EPAC", year: "2023", type: "Concours", code: "INFO202", price: "500 FCFA" },
  { id: 3, title: "Physique Ondulatoire", university: "UAC / FAST", year: "2024", type: "TD Corrigé", code: "PHY201", price: "Gratuit" },
  { id: 4, title: "Analyse Mathématique", university: "UAC / FAST", year: "2023", type: "Examen", code: "MAT201", price: "500 FCFA" },
  { id: 5, title: "Systèmes d'Exploitation", university: "EPAC", year: "2022", type: "Examen", code: "INFO301", price: "Premium" },
  { id: 6, title: "Probabilités & Statistiques", university: "UAC / FAST", year: "2024", type: "Partiel", code: "MAT205", price: "Gratuit" },
];

export default function ArchivesPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 pt-12 space-y-12">
        <header className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight">Archives & Épreuves</h1>
          <p className="text-lg text-petrol/60 font-medium">
            Réunir les épreuves du Bénin pour une réussite sans frontières.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-petrol/30" />
              <input
                type="text"
                placeholder="Rechercher un sujet (UAC, EPAC, BAC...)"
                className="w-full h-16 pl-16 pr-6 rounded-2xl bg-surface-base border border-border-subtle focus:ring-2 focus:ring-primary/10 transition-all text-sm font-medium shadow-level-1"
              />
            </div>
            <IslandButton icon={Filter} className="h-16 px-8">Filtrer</IslandButton>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <DoubleBezelContainer key={subject.id} className="p-8 group hover:shadow-level-2 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-surface-canvas flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <span className={cn(
                  "text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-widest",
                  subject.price === 'Gratuit' ? "text-emerald-600 bg-emerald-50 border-emerald-200" :
                  subject.price === 'Premium' ? "text-secondary bg-secondary/5 border-secondary/20" :
                  "text-primary bg-primary/5 border-primary/20"
                )}>
                  {subject.price}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                {subject.title}
              </h3>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-petrol/60">
                  <GraduationCap className="w-4 h-4" />
                  <span>{subject.university}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-petrol/60">
                  <Calendar className="w-4 h-4" />
                  <span>Année {subject.year}</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border-subtle flex gap-3">
                <IslandButton className="flex-1 text-xs" icon={Download}>
                  {subject.price === 'Gratuit' ? 'Télécharger' : 'Débloquer'}
                </IslandButton>
                <button className="w-12 h-12 rounded-2xl bg-surface-canvas flex items-center justify-center text-petrol hover:bg-primary hover:text-white transition-colors">
                  <BookOpen className="w-5 h-5" />
                </button>
              </div>
            </DoubleBezelContainer>
          ))}
        </section>

        <DoubleBezelContainer className="bg-signature-gradient p-10 text-white text-center space-y-6">
          <h2 className="text-2xl font-bold italic">« One student. One AI mentor. One path to mastery. »</h2>
          <p className="text-white/80 max-w-xl mx-auto font-medium">
            Accédez à toutes les annales en illimité pour seulement 1 000 FCFA / mois.
          </p>
          <IslandButton variant="outline" className="bg-white border-none text-primary mx-auto" icon={Zap}>
            Passer Premium
          </IslandButton>
        </DoubleBezelContainer>
      </div>
    </PageTransition>
  );
}
