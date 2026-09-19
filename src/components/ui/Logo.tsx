import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  size = 'md',
  showText = true
}) => {
  const dimensions = {
    sm: 32,
    md: 48,
    lg: 64
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn(
        "relative overflow-hidden rounded-xl border border-border-subtle shadow-level-1",
        size === 'sm' ? "w-8 h-8" : size === 'md' ? "w-12 h-12" : "w-16 h-16"
      )}>
        <Image
          src="/assets/logo.jpg"
          alt="EDUMENTORYA Logo"
          fill
          className="object-cover"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-poppins font-bold text-primary tracking-tight leading-none uppercase" style={{ fontSize: size === 'sm' ? '14px' : size === 'md' ? '18px' : '24px' }}>
            EDUMENTORYA
          </span>
          <span className="font-mono font-bold text-secondary tracking-widest leading-none mt-1" style={{ fontSize: size === 'sm' ? '8px' : size === 'md' ? '10px' : '12px' }}>
            ONE
          </span>
        </div>
      )}
    </div>
  );
};
