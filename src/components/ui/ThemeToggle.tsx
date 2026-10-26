"use client";

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  const isDark = resolvedTheme === 'dark';
  const label = mounted ? (isDark ? 'Activer le thème clair' : 'Activer le thème sombre') : 'Changer de thème';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={mounted && isDark}
      title={label}
      disabled={!mounted}
      className="glass-panel flex h-9 w-9 items-center justify-center rounded-full text-petrol transition-colors hover:text-primary md:h-10 md:w-10"
    >
      {mounted && isDark ? <Sun className="h-4 w-4 md:h-5 md:w-5" /> : <Moon className="h-4 w-4 md:h-5 md:w-5" />}
    </button>
  );
}