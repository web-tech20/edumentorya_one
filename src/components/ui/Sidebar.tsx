"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import {
  LayoutDashboard,
  Brain,
  ClipboardCheck,
  Library,
  Sigma,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Accueil', href: '/dashboard' },
  { icon: Brain, label: 'Mentorat IA', href: '/mentor' },
  { icon: ClipboardCheck, label: 'Corrections', href: '/corrections' },
  { icon: Library, label: 'Annales', href: '/archives' },
  { icon: Sigma, label: 'Formules', href: '/formules' },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-surface-base border-r border-border-subtle z-50 hidden md:flex flex-col w-[280px] transition-all duration-300",
      )}
    >
      <div className="p-6 h-24 flex items-center justify-between border-b border-border-subtle/50">
        <Logo size="sm" />
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={cn(
                  "flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 group relative",
                  isActive
                    ? "bg-primary text-white shadow-level-1"
                    : "text-petrol/60 hover:bg-surface-canvas hover:text-primary"
                )}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className="font-bold text-xs uppercase tracking-widest">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-border-subtle">
        <button className="flex items-center gap-4 w-full px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5 shrink-0" />
          <span className="font-bold text-xs uppercase tracking-widest">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
};
