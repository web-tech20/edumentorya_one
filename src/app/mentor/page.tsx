"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoubleBezelContainer } from '@/components/ui/DoubleBezelContainer';
import { IslandButton } from '@/components/ui/IslandButton';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';
import { Send, Sparkles, GraduationCap } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';

const messages = [
  {
    id: 1,
    role: 'mentor',
    content: "Bonjour ! J'ai analysé votre progression. Souhaitez-vous aborder le procédé d'orthonormalisation de Gram-Schmidt ?",
    suggestions: ["Approfondir", "Exercice", "Sujet d'examen"]
  },
  {
    id: 2,
    role: 'user',
    content: "Oui, je veux bien une démonstration étape par étape."
  },
  {
    id: 3,
    role: 'mentor',
    content: "C'est parti. Voici la structure pour transformer une base (v1, v2, v3) :",
    steps: [
      { t: "Étape 1", c: "Posez u1 = v1 / ||v1||." },
      { t: "Étape 2", c: "w2 = v2 - (v2·u1)u1. Puis u2 = w2 / ||w2||." }
    ],
    suggestions: ["Exemple chiffré", "Passer à l'exercice"]
  }
];

export default function MentorPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto flex flex-col h-[calc(100dvh-160px)] md:h-[calc(100vh-160px)]">
        {/* Header - More compact on mobile */}
        <header className="flex items-center justify-between mb-4 md:mb-8 px-2 md:px-0">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl shadow-ai-glow overflow-hidden">
               <Logo size="sm" showText={false} />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold leading-tight">Mentor IA</h1>
              <p className="text-[9px] md:text-[10px] font-bold text-secondary uppercase tracking-widest">Expert Académique</p>
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-surface-base border border-border-subtle text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-petrol/40">
            Session #42
          </div>
        </header>

        {/* Chat Area */}
        <DoubleBezelContainer className="flex-1 flex flex-col p-0 overflow-hidden bg-surface-canvas/30">
          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8 scrollbar-hide">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={cn(
                    "flex flex-col max-w-[90%] md:max-w-[85%]",
                    msg.role === 'user' ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div className={cn(
                    "p-4 md:p-5 text-sm md:text-base leading-relaxed shadow-sm",
                    msg.role === 'user'
                      ? "bg-primary text-white rounded-2xl rounded-tr-sm"
                      : "bg-surface-base text-petrol rounded-2xl rounded-tl-sm border border-border-subtle"
                  )}>
                    {msg.content}

                    {msg.steps && (
                      <div className="mt-4 space-y-3 border-t border-border-subtle pt-3">
                        {msg.steps.map((s, idx) => (
                          <div key={idx} className="space-y-0.5">
                            <p className="text-[9px] font-bold text-primary uppercase tracking-widest">{s.t}</p>
                            <p className="text-xs font-medium text-petrol/70">{s.c}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {msg.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {msg.suggestions.map((s, i) => (
                        <motion.button
                          key={i}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-1.5 rounded-full bg-secondary/5 border border-secondary/20 text-secondary text-[9px] font-bold uppercase tracking-widest"
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

          {/* Input Area - Compact and fixed height */}
          <div className="p-4 md:p-6 bg-surface-base border-t border-border-subtle">
            <div className="relative flex items-center gap-3 md:gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Question..."
                  className="w-full h-12 md:h-14 pl-4 md:pl-6 pr-12 rounded-xl md:rounded-2xl bg-surface-canvas border-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
                />
                <button className="absolute right-1.5 top-1.5 w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <button className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-signature-gradient text-white flex items-center justify-center shadow-ai-glow">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </DoubleBezelContainer>
      </div>
    </PageTransition>
  );
}
