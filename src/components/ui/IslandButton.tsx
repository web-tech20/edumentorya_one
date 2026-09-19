"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface IslandButtonProps extends Omit<HTMLMotionProps<"button">, "variant"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: LucideIcon;
  children: React.ReactNode;
}

export const IslandButton: React.FC<IslandButtonProps> = ({
  variant = 'primary',
  icon: Icon,
  children,
  className,
  ...props
}) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-signature-gradient text-white shadow-ai-glow",
    outline: "bg-transparent border-2 border-border-subtle text-petrol hover:bg-surface-canvas",
    ghost: "bg-transparent text-petrol hover:bg-petrol/5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative flex items-center justify-between gap-3 px-6 py-3 rounded-full font-bold transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="flex-1 text-left text-xs uppercase tracking-widest">{children}</span>
      {Icon && (
        <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-[1px]">
          <Icon className="w-4 h-4" />
        </div>
      )}
    </motion.button>
  );
};
