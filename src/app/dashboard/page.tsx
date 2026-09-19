"use client";

import React from 'react';
import { DoubleBezelContainer } from '@/components/ui/DoubleBezelContainer';
import { IslandButton } from '@/components/ui/IslandButton';
import { Logo } from '@/components/ui/Logo';
import {
  School,
  ScrollText,
  FolderCheck,
  Library,
  FileText,
  Download,
  ArrowRight,
  BadgeCheck,
  Sparkles,
  Search,
  BookOpen
} from 'lucide-react';

import { PageTransition } from '@/components/ui/PageTransition';

export default function DashboardPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 space-y-12 pb-20">
        {/* Simplified Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-petrol">Bonjour, Étudiant</h1>
            <p className="text-petrol/50 font-medium italic">« Un étudiant. Un mentor IA. Un chemin vers la maîtrise. »</p>
          </div>

          <DoubleBezelContainer className="px-6 py-4 flex items-center gap-6">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">Crédits IA</p>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-xl font-bold">12 / 15</span>
              </div>
            </div>
            <div className="w-px h-8 bg-border-subtle" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-secondary">Premium</span>
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            </div>
          </DoubleBezelContainer>
        </header>

        {/* Hero Section */}
        <DoubleBezelContainer
          outerClassName="w-full"
          className="bg-signature-gradient p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest">
              Nouveauté : Correction par photo active
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1]">
              Maîtrisez vos épreuves avec l'intelligence artificielle.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed font-medium">
              Envoyez vos exercices, consultez les annales de l'UAC, EPAC et bien d'autres, et laissez votre mentor vous guider pas à pas.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <IslandButton variant="outline" className="bg-white border-none text-primary" icon={ArrowRight}>
                Poser une question
              </IslandButton>
              <IslandButton variant="ghost" className="text-white hover:bg-white/10" icon={FolderCheck}>
                Corriger un devoir
              </IslandButton>
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2 pointer-events-none" />
        </DoubleBezelContainer>

        {/* Quick Access Actions */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Bibliothèque d'Annales", icon: Library, desc: "Accédez aux épreuves passées et aux corrigés types.", color: "primary" },
            { title: "Correction Express", icon: FolderCheck, desc: "Téléchargez votre copie pour une analyse instantanée.", color: "secondary" },
            { title: "Mentorat Continu", icon: School, desc: "Reprenez votre séance d'apprentissage avec l'IA.", color: "petrol" }
          ].map((item, i) => (
            <DoubleBezelContainer key={i} className="p-8 group cursor-pointer hover:bg-surface-canvas/50 transition-all border-none">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 shadow-level-1",
                item.color === 'primary' ? "bg-primary text-white" :
                item.color === 'secondary' ? "bg-secondary text-white" : "bg-petrol text-white"
              )}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-petrol/60 leading-relaxed font-medium mb-6">
                {item.desc}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                <span>Accéder</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </DoubleBezelContainer>
          ))}
        </section>

        {/* Recent Activity / Subjects */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-petrol/40">Dernières Épreuves consultées</h3>
            <IslandButton variant="ghost" className="h-8 px-4 text-[10px]" icon={ArrowRight}>Voir tout</IslandButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Algèbre - UAC / FAST - 2024", type: "Examen", date: "Il y a 2 jours" },
              { title: "Algorithmique - EPAC - 2023", type: "Partiel", date: "Hier" }
            ].map((item, i) => (
              <DoubleBezelContainer key={i} className="p-5 flex items-center justify-between group hover:shadow-level-2 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-canvas flex items-center justify-center text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-petrol">{item.title}</h4>
                    <p className="text-[10px] font-bold text-petrol/40 uppercase tracking-widest">{item.type} • {item.date}</p>
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

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
