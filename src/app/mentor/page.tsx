"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoubleBezelContainer } from '@/components/ui/DoubleBezelContainer';
import { IslandButton } from '@/components/ui/IslandButton';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';
import { Send, Sparkles, GraduationCap } from 'lucide-react';

const messages = [
  {
    id: 1,
    role: 'mentor',
    content: "Bonjour Koffi. J'ai analysé votre progression en Algèbre Linéaire. Votre maîtrise des espaces vectoriels est excellente. Souhaitez-vous aborder le procédé d'orthonormalisation de Gram-Schmidt, qui semble être un point à renforcer ?",
    suggestions: ["Approfondir Gram-Schmidt", "Exercice similaire", "Générer sujet d'examen"]
  },
  {
    id: 2,
    role: 'user',
    content: "Oui, je veux bien une démonstration étape par étape du procédé de Gram-Schmidt pour une base de R3."
  },
  {
    id: 3,
    role: 'mentor',
    content: "C'est parti. Voici la démonstration structurée pour transformer une base (v1, v2, v3) en une base orthonormée (u1, u2, u3) :",
    steps: [
      { t: "Étape 1 : Normalisation du premier vecteur", c: "On pose u1 = v1 / ||v1||. C'est notre première direction de référence." },
      { t: "Étape 2 : Orthogonalisation du second vecteur", c: "On retire à v2 sa projection sur u1 : w2 = v2 - (v2·u1)u1. Puis on normalise : u2 = w2 / ||w2||." },
      { t: "Étape 3 : Orthogonalisation du troisième vecteur", c: "On retire à v3 ses projections sur u1 et u2 : w3 = v3 - (v3·u1)u1 - (v3·u2)u2. Enfin u3 = w3 / ||w3||." }
    ],
    suggestions: ["Appliquer à un exemple chiffré", "Pourquoi normaliser ?", "Passer à l'exercice"]
  }
];

import { PageTransition } from '@/components/ui/PageTransition';

export default function MentorPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 flex flex-col h-[calc(100vh-160px)]">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Logo size="md" showText={false} className="shadow-ai-glow rounded-2xl overflow-hidden" />
          <div>
            <h1 className="text-xl font-bold">Tuteur Académique IA</h1>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest">Expert Mathématiques & Info</p>
          </div>
        </div>
        <div className="px-4 py-2 rounded-full bg-surface-base border border-border-subtle text-[10px] font-bold uppercase tracking-widest text-petrol/40">
          Session #42 • Algèbre
        </div>
      </header>

      {/* Chat Area */}
      <DoubleBezelContainer className="flex-1 flex flex-col p-0 overflow-hidden bg-surface-canvas/30">
        <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={cn(
                  "flex flex-col max-w-[85%]",
                  msg.role === 'user' ? "ml-auto items-end" : "items-start"
                )}
              >
                <div className={cn(
                  "p-5 text-sm leading-relaxed shadow-level-1",
                  msg.role === 'user'
                    ? "bg-primary text-white rounded-2xl rounded-tr-sm"
                    : "bg-surface-base text-petrol rounded-2xl rounded-tl-sm border border-border-subtle"
                )}>
                  {msg.content}

                  {msg.steps && (
                    <div className="mt-6 space-y-4 border-t border-border-subtle pt-4">
                      {msg.steps.map((s, idx) => (
                        <div key={idx} className="space-y-1">
                          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{s.t}</p>
                          <p className="text-xs font-medium text-petrol/70">{s.c}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {msg.suggestions && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {msg.suggestions.map((s, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(130, 68, 126, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-full bg-secondary/5 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-widest"
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="p-6 bg-surface-base border-t border-border-subtle">
          <div className="relative flex items-center gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Posez votre question académique ici..."
                className="w-full h-14 pl-6 pr-14 rounded-2xl bg-surface-canvas border-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
              />
              <button className="absolute right-2 top-2 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <button className="w-14 h-14 rounded-2xl bg-signature-gradient text-white flex items-center justify-center shadow-ai-glow hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </button>
          </div>
          <p className="text-[10px] text-center mt-4 text-petrol/40 font-bold uppercase tracking-widest">
            Appuyez sur <kbd className="bg-surface-canvas px-1 rounded">Entrée</kbd> pour envoyer • Mentorat Universitaire Homologué
          </p>
        </div>
      </DoubleBezelContainer>
    </div>
  </PageTransition>
  );
}
