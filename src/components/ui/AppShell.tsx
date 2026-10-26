"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/ui/Sidebar';
import { TopNav } from '@/components/ui/TopNav';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublicPage = pathname === '/landing' || pathname.startsWith('/auth/');

  if (isPublicPage) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-surface-canvas md:flex">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col transition-[padding] duration-300 md:pl-[var(--sidebar-width,280px)]">
        <TopNav />
        <main className="flex-1 px-4 pb-10 pt-20 md:px-8 md:pb-12 md:pt-24">
          {children}
        </main>
      </div>
    </div>
  );
}