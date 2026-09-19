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
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        <header className="space-y-6">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Archives & Épreuves</h1>
            <p className="text-sm md:text-lg text-petrol/60 font-medium max-w-xl">
              Réunir les épreuves du Bénin pour une réussite sans frontières.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-petrol/30" />
              <input
                type="text"
                placeholder="Rechercher (UAC, EPAC, BAC...)"
                className="w-full h-14 md:h-16 pl-12 md:pl-16 pr-6 rounded-xl md:rounded-2xl bg-surface-base border border-border-subtle focus:ring-2 focus:ring-primary/10 transition-all text-sm font-medium shadow-sm"
              />
            </div>
            <IslandButton icon={Filter} className="h-14 md:h-16 px-6 md:px-8">Filtrer</IslandButton>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {subjects.map((subject) => (
            <DoubleBezelContainer key={subject.id} className="p-6 md:p-8 group hover:shadow-level-2 transition-all">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-surface-canvas flex items-center justify-center text-primary">
                  <FileText className="w-5 md:w-6 h-5 md:h-6" />
                </div>
                <span className={cn(
                  "text-[9px] md:text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-widest",
                  subject.price === 'Gratuit' ? "text-emerald-600 bg-emerald-50 border-emerald-200" :
                  subject.price === 'Premium' ? "text-secondary bg-secondary/5 border-secondary/20" :
                  "text-primary bg-primary/5 border-primary/20"
                )}>
                  {subject.price}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                {subject.title}
              </h3>

              <div className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                <div className="flex items-center gap-2 text-[11px] md:text-xs font-semibold text-petrol/60">
                  <GraduationCap className="w-3.5 md:w-4 h-3.5 md:h-4" />
                  <span>{subject.university}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] md:text-xs font-semibold text-petrol/60">
                  <Calendar className="w-3.5 md:w-4 h-3.5 md:h-4" />
                  <span>Année {subject.year}</span>
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border-subtle flex gap-2 md:gap-3">
                <IslandButton className="flex-1 text-[10px] md:text-xs h-10 md:h-12" icon={Download}>
                  {subject.price === 'Gratuit' ? 'Télécharger' : 'Débloquer'}
                </IslandButton>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-surface-canvas flex items-center justify-center text-petrol hover:bg-primary hover:text-white transition-colors">
                  <BookOpen className="w-4 md:w-5 h-4 md:h-5" />
                </button>
              </div>
            </DoubleBezelContainer>
          ))}
        </section>

        <DoubleBezelContainer className="bg-signature-gradient p-8 md:p-12 text-white text-center space-y-4 md:space-y-6">
          <h2 className="text-xl md:text-2xl font-bold italic">« Un étudiant. Un mentor IA. »</h2>
          <p className="text-sm md:text-lg text-white/80 max-w-xl mx-auto font-medium leading-relaxed">
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
