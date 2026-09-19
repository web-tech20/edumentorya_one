"use client";

import React from 'react';
import { DoubleBezelContainer } from '@/components/ui/DoubleBezelContainer';
import { IslandButton } from '@/components/ui/IslandButton';
import {
  School,
  FolderCheck,
  Library,
  FileText,
  Download,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageTransition } from '@/components/ui/PageTransition';

export default function DashboardPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 pb-10">
        {/* Simplified Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-petrol">Bonjour, Étudiant</h1>
            <p className="text-sm md:text-base text-petrol/50 font-medium italic">« Un étudiant. Un mentor IA. »</p>
          </div>

          <DoubleBezelContainer className="px-4 md:px-6 py-3 md:py-4 flex items-center gap-4 md:gap-6 self-start md:self-auto">
            <div className="space-y-0.5">
              <p className="text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-widest leading-none">Crédits IA</p>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-lg md:text-xl font-bold">12 / 15</span>
              </div>
            </div>
            <div className="w-px h-6 md:h-8 bg-border-subtle" />
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm font-bold text-secondary">Premium</span>
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-secondary animate-pulse" />
            </div>
          </DoubleBezelContainer>
        </header>

        {/* Hero Section */}
        <DoubleBezelContainer
          outerClassName="w-full"
          className="bg-signature-gradient p-6 md:p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
              Correction par photo active
            </div>
            <h2 className="text-2xl md:text-5xl font-bold leading-tight">
              Maîtrisez vos épreuves avec l'IA.
            </h2>
            <p className="text-sm md:text-lg text-white/80 leading-relaxed font-medium">
              Consultez les annales et laissez votre mentor vous guider pas à pas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <IslandButton variant="outline" className="bg-white border-none text-primary w-full sm:w-auto" icon={ArrowRight}>
                Poser une question
              </IslandButton>
              <IslandButton variant="ghost" className="text-white hover:bg-white/10 w-full sm:w-auto" icon={FolderCheck}>
                Corriger un devoir
              </IslandButton>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2 pointer-events-none hidden md:block" />
        </DoubleBezelContainer>

        {/* Quick Access Actions */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: "Bibliothèque", icon: Library, desc: "Épreuves et corrigés types.", color: "primary" },
            { title: "Correction", icon: FolderCheck, desc: "Analyse instantanée.", color: "secondary" },
            { title: "Mentorat", icon: School, desc: "Apprentissage continu.", color: "petrol" }
          ].map((item, i) => (
            <DoubleBezelContainer key={i} className="p-6 md:p-8 group cursor-pointer hover:bg-surface-canvas/50 transition-all border-none">
              <div className={cn(
                "w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-all group-hover:scale-110 shadow-level-1",
                item.color === 'primary' ? "bg-primary text-white" :
                item.color === 'secondary' ? "bg-secondary text-white" : "bg-petrol text-white"
              )}>
                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
              <p className="text-xs md:text-sm text-petrol/60 leading-relaxed font-medium mb-4 md:mb-6">
                {item.desc}
              </p>
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-primary opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all">
                <span>Accéder</span>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </DoubleBezelContainer>
          ))}
        </section>

        {/* Recent Activity */}
        <section className="space-y-4 md:space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-petrol/40">Épreuves récentes</h3>
            <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">Voir tout</button>
          </div>

          <div className="space-y-3">
            {[
              { title: "Algèbre - UAC / FAST - 2024", type: "Examen", date: "Il y a 2 j" },
              { title: "Algorithmique - EPAC - 2023", type: "Partiel", date: "Hier" }
            ].map((item, i) => (
              <DoubleBezelContainer key={i} className="p-4 flex items-center justify-between group hover:shadow-level-2 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-canvas flex items-center justify-center text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-petrol">{item.title}</h4>
                    <p className="text-[9px] md:text-[10px] font-bold text-petrol/40 uppercase tracking-widest">{item.type} • {item.date}</p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-surface-canvas flex items-center justify-center text-petrol/30 group-hover:text-primary transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </DoubleBezelContainer>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
