"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Brain,
  ClipboardCheck,
  Library,
  Sigma
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Accueil', href: '/dashboard' },
  { icon: Brain, label: 'Mentorat', href: '/mentor' },
  { icon: ClipboardCheck, label: 'Correction', href: '/corrections' },
  { icon: Library, label: 'Annales', href: '/archives' },
  { icon: Sigma, label: 'Offres', href: '/formules' },
];

export const MobileTabBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden">
      <div className="bg-surface-base/80 backdrop-blur-xl border-t border-border-subtle flex items-center justify-around px-2 py-3 pb-6 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className="flex-1">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "flex flex-col items-center gap-1 transition-all duration-300",
                  isActive ? "text-primary" : "text-petrol/40"
                )}
              >
                <div className={cn(
                  "p-2 rounded-2xl transition-all duration-300",
                  isActive && "bg-primary/10"
                )}>
                  <item.icon className={cn("w-6 h-6", isActive && "fill-primary/10")} />
                </div>
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-widest",
                  isActive ? "opacity-100" : "opacity-0"
                )}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-1 w-1 h-1 rounded-full bg-primary"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
