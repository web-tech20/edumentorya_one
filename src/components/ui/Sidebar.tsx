"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import {
  LayoutDashboard,
  Brain,
  ClipboardCheck,
  Library,
  Sigma,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile sidebar on navigation
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const toggleSidebar = () => {
    const nextState = !isCollapsed;
    setIsCollapsed(nextState);
    document.documentElement.style.setProperty('--sidebar-width', nextState ? '80px' : '280px');
  };

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  useEffect(() => {
    document.documentElement.style.setProperty('--sidebar-width', '280px');
  }, []);

  return (
    <>
      {/* Mobile Toggle Button (Visible only on mobile) */}
      <button
        onClick={toggleMobile}
        className="fixed top-4 left-4 z-[100] md:hidden p-2.5 rounded-xl bg-surface-base border border-border-subtle shadow-level-2 text-petrol"
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-petrol/40 backdrop-blur-sm z-[80] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen bg-surface-base border-r border-border-subtle z-[90] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          // Desktop Widths
          isCollapsed ? "md:w-20" : "md:w-[280px]",
          // Mobile Widths & Visibility
          isMobileOpen ? "w-[280px] translate-x-0 shadow-2xl" : "w-[280px] -translate-x-full md:translate-x-0"
        )}
      >
        {/* Header / Logo Area */}
        <div className={cn(
          "p-6 h-24 flex items-center border-b border-border-subtle/50 transition-all",
          isCollapsed ? "justify-center" : "justify-between"
        )}>
          <div className="overflow-hidden">
            <Logo size="sm" showText={!isCollapsed} />
          </div>

          {/* Desktop Collapse Toggle */}
          {!isCollapsed && (
            <button
              onClick={toggleSidebar}
              className="hidden md:flex p-1.5 rounded-lg hover:bg-surface-canvas text-petrol/30 hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto scrollbar-hide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: isCollapsed ? 0 : 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative",
                    isActive
                      ? "bg-primary text-white shadow-level-1"
                      : "text-petrol/60 hover:bg-surface-canvas hover:text-primary",
                    isCollapsed && "justify-center px-0"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 shrink-0 transition-transform", isActive && "scale-110")} />

                  {(!isCollapsed || isMobileOpen) && (
                    <span className="font-bold text-[11px] uppercase tracking-[0.15em] whitespace-nowrap">
                      {item.label}
                    </span>
                  )}

                  {/* Tooltip for collapsed mode */}
                  {isCollapsed && !isMobileOpen && (
                    <div className="absolute left-full ml-4 px-3 py-2 bg-petrol text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap z-[60] shadow-level-3">
                      {item.label}
                    </div>
                  )}

                  {/* Active Indicator Dot */}
                  {isActive && !isCollapsed && (
                    <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white/40" />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Footer Area / Logout */}
        <div className="p-4 border-t border-border-subtle/50">
          <button className={cn(
            "flex items-center gap-4 w-full py-3.5 rounded-2xl text-red-500 hover:bg-red-50 transition-all duration-300",
            isCollapsed ? "justify-center px-0" : "px-4"
          )}>
            <LogOut className="w-5 h-5 shrink-0" />
            {(!isCollapsed || isMobileOpen) && (
              <span className="font-bold text-[11px] uppercase tracking-[0.15em]">Déconnexion</span>
            )}
          </button>

          {/* Re-expand button for desktop */}
          {isCollapsed && (
            <button
              onClick={toggleSidebar}
              className="hidden md:flex w-full mt-2 items-center justify-center p-2 text-petrol/20 hover:text-primary transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </aside>
    </>
  );
};
