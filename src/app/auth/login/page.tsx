"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';
import { IslandButton } from '@/components/ui/IslandButton';
import { DoubleBezelContainer } from '@/components/ui/DoubleBezelContainer';
import { Mail, Lock, Chrome, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface-canvas flex items-center justify-center p-6">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[40%] bg-primary/5 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[40%] bg-secondary/5 blur-[100px] rounded-full animate-pulse" />
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <DoubleBezelContainer className="p-10 space-y-8">
          <div className="text-center space-y-2">
            <Logo size="sm" showText={false} className="mx-auto" />
            <h1 className="text-2xl font-bold tracking-tight text-petrol mt-4">Bon retour parmi nous</h1>
            <p className="text-xs font-bold text-petrol/40 uppercase tracking-widest">Connectez-vous à votre mentor IA</p>
          </div>

          {/* Social Auth (Mocked) */}
          <div className="grid grid-cols-1 gap-3">
            <IslandButton variant="outline" className="w-full justify-center gap-4 py-3.5 border-border-subtle hover:bg-surface-canvas" icon={Chrome}>
              Continuer avec Google
            </IslandButton>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border-subtle" /></div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
              <span className="bg-surface-base px-3 text-petrol/30">Ou avec votre email</span>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-petrol/60 ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-petrol/30" />
                <input
                  type="email"
                  placeholder="nom@exemple.com"
                  className="w-full h-14 pl-12 pr-6 rounded-2xl bg-surface-canvas border-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-petrol/60">Mot de passe</label>
                <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">Oublié ?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-petrol/30" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-14 pl-12 pr-6 rounded-2xl bg-surface-canvas border-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
                />
              </div>
            </div>
          </div>

          <IslandButton variant="primary" className="w-full justify-center h-14 shadow-level-2" icon={ArrowRight}>
            Se connecter
          </IslandButton>

          <p className="text-center text-xs font-medium text-petrol/60">
            Nouveau sur EDUMENTORYA ?{' '}
            <Link href="/auth/signup" className="text-primary font-bold hover:underline">Créer un compte</Link>
          </p>
        </DoubleBezelContainer>
      </motion.div>
    </div>
  );
}
