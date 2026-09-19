"use client";

import React from 'react';
import { Logo } from './Logo';
import { Bell, UserCircle, Search } from 'lucide-react';
import { DoubleBezelContainer } from './DoubleBezelContainer';

export const TopNav = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-end">
        {/* Logo visible only on mobile top nav if sidebar is hidden */}
        <div className="md:hidden opacity-0">
          <Logo size="sm" />
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-petrol/30 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Rechercher une ressource..."
              className="h-10 pl-11 pr-6 rounded-full bg-surface-base/50 backdrop-blur-md border border-border-subtle focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all text-xs font-medium w-64 shadow-sm"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-petrol hover:text-primary transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            <DoubleBezelContainer
              outerClassName="rounded-full p-0.5"
              className="rounded-full px-4 py-1.5 flex items-center gap-3 cursor-pointer hover:bg-surface-canvas transition-colors shadow-sm"
            >
              <div className="text-right hidden xs:block">
                <p className="text-[10px] font-bold text-petrol leading-none">Étudiant</p>
                <p className="text-[8px] font-bold text-secondary uppercase tracking-widest mt-1 leading-none">Premium</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <UserCircle className="w-5 h-5" />
              </div>
            </DoubleBezelContainer>
          </div>
        </div>
      </div>
    </header>
  );
};
