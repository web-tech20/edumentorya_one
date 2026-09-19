"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';
import { IslandButton } from '@/components/ui/IslandButton';
import { DoubleBezelContainer } from '@/components/ui/DoubleBezelContainer';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface-canvas overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[70%] bg-secondary/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
        {/* Logo Reveal */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Logo size="lg" className="mb-12" />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-petrol leading-[1.1]">
            Votre réussite académique, <br />
            <span className="text-primary italic">propulsée par l'IA.</span>
          </h1>
          <p className="text-xl text-petrol/60 font-medium max-w-2xl mx-auto leading-relaxed">
            Cours, exercices, mentorat personnalisé et annales corrigées.
            Le tout dans un espace unique conçu pour l'étudiant béninois.
          </p>
        </motion.div>

        {/* CTA Section (ECRAN 1 buttons) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 w-full max-w-md"
        >
          <Link href="/auth/login" className="flex-1">
            <IslandButton variant="primary" className="w-full justify-center h-16 text-lg" icon={ArrowRight}>
              Se connecter
            </IslandButton>
          </Link>
          <Link href="/auth/signup" className="flex-1">
            <IslandButton variant="outline" className="w-full justify-center h-16 text-lg border-2">
              S'inscrire
            </IslandButton>
          </Link>
        </motion.div>

        {/* Value Pillars (ECRAN 1 presentation) */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {[
            { icon: Sparkles, title: "Tuteur IA", desc: "Démonstrations pas-à-pas et réponses instantanées 24/7." },
            { icon: ShieldCheck, title: "Correction OCR", desc: "Envoyez vos devoirs en photo, recevez une note et des conseils." },
            { icon: Zap, title: "Annales Locales", desc: "UAC, EPAC, ENEAM... toutes les épreuves en un clic." }
          ].map((item, i) => (
            <DoubleBezelContainer key={i} className="p-8 text-left hover:shadow-level-2 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-surface-canvas flex items-center justify-center text-primary mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-petrol/60 leading-relaxed font-medium">
                {item.desc}
              </p>
            </DoubleBezelContainer>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
