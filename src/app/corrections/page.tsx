"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DoubleBezelContainer } from '@/components/ui/DoubleBezelContainer';
import { IslandButton } from '@/components/ui/IslandButton';
import {
  UploadCloud,
  FileText,
  Camera,
  Sparkles,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Brain,
  Download
} from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';

export default function CorrectionsPage() {
  const [step, setStep] = useState('upload'); // upload | analyzing | result

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 pt-12 space-y-12 pb-20">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Correction par IA</h1>
          <p className="text-lg text-petrol/60 font-medium">
            Envoyez votre copie (Photo ou PDF) pour une analyse méthodologique instantanée.
          </p>
        </header>

        {step === 'upload' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <DoubleBezelContainer outerClassName="md:col-span-8" className="p-12 flex flex-col items-center justify-center text-center space-y-6 bg-surface-canvas/20 border-dashed border-2 border-primary/20">
              <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                <UploadCloud className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Déposez votre document</h3>
                <p className="text-sm text-petrol/50 font-medium">Fichiers supportés : JPEG, PNG, PDF (Max 10Mo)</p>
              </div>
              <div className="flex gap-4 pt-4">
                <IslandButton icon={Camera} onClick={() => setStep('analyzing')}>Prendre une photo</IslandButton>
                <IslandButton variant="outline" icon={FileText} onClick={() => setStep('analyzing')}>Choisir un fichier</IslandButton>
              </div>
            </DoubleBezelContainer>

            <div className="md:col-span-4 space-y-6">
              <DoubleBezelContainer className="p-8 space-y-4">
                <div className="flex items-center gap-3 text-secondary">
                  <Sparkles className="w-5 h-5" />
                  <h4 className="font-bold text-sm uppercase tracking-widest">Fonctionnement</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "Analyse OCR haute précision",
                    "Identification des erreurs",
                    "Suggestions de démonstration",
                    "Note estimée sur 20"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-bold text-petrol/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1" />
                      {text}
                    </li>
                  ))}
                </ul>
              </DoubleBezelContainer>

              <DoubleBezelContainer className="bg-primary/5 p-6 border-none">
                <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2 text-center">Important</p>
                <p className="text-xs text-petrol/70 text-center leading-relaxed font-medium">
                  Assurez-vous que l'écriture est lisible et que l'éclairage est suffisant pour une meilleure correction.
                </p>
              </DoubleBezelContainer>
            </div>
          </div>
        )}

        {step === 'analyzing' && (
          <DoubleBezelContainer className="p-20 flex flex-col items-center justify-center space-y-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary"
            />
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold animate-pulse">Analyse de la copie en cours...</h3>
              <p className="text-sm text-petrol/50 font-medium italic">Le mentor IA examine vos démonstrations étape par étape.</p>
            </div>
            <IslandButton variant="ghost" onClick={() => setStep('result')}>Simuler la fin (Démo)</IslandButton>
          </DoubleBezelContainer>
        )}

        {step === 'result' && (
          <div className="space-y-8">
            <DoubleBezelContainer className="p-10">
              <div className="flex flex-col md:flex-row justify-between gap-12">
                <div className="md:w-1/3 text-center md:text-left space-y-6">
                  <div className="inline-block p-8 rounded-3xl bg-primary/5 border border-primary/10">
                    <span className="text-[10px] font-bold text-petrol/40 uppercase tracking-[0.2em]">Note Formative</span>
                    <div className="text-6xl font-bold text-primary mt-2">16,5<span className="text-xl text-petrol/20">/20</span></div>
                    <p className="text-xs font-bold text-emerald-600 mt-4 uppercase tracking-widest">Mention Très Bien</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-petrol/40 uppercase tracking-widest text-left ml-1">Statistiques IA</h4>
                    {[
                      { l: "Rigueur", v: 90 },
                      { l: "Calcul", v: 75 },
                      { l: "Méthode", v: 85 }
                    ].map((s, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter"><span>{s.l}</span><span>{s.v}%</span></div>
                        <div className="h-1 bg-surface-canvas rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${s.v}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl font-bold">Feedback du Mentor</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-900 flex gap-4">
                      <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-600" />
                      <p className="text-sm font-medium leading-relaxed">
                        Excellente rédaction sur la partie Analyse. La structure de votre démonstration sur la convergence est parfaite.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 text-amber-900 flex gap-4">
                      <AlertCircle className="w-6 h-6 shrink-0 text-amber-600" />
                      <div className="space-y-2">
                        <p className="text-sm font-bold">Attention au signe (Exercice 2)</p>
                        <p className="text-sm font-medium leading-relaxed">
                          Vous avez oublié de changer le signe lors du passage du terme à gauche de l'inégalité. Cela fausse le résultat final bien que la méthode soit correcte.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-border-subtle">
                    <IslandButton icon={Sparkles}>Approfondir avec le Mentor</IslandButton>
                    <IslandButton variant="outline" icon={Download}>Télécharger le corrigé type</IslandButton>
                    <IslandButton variant="ghost" onClick={() => setStep('upload')}>Nouvelle correction</IslandButton>
                  </div>
                </div>
              </div>
            </DoubleBezelContainer>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
