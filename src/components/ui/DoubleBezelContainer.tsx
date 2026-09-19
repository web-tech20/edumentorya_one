import React from 'react';
import { cn } from '@/lib/utils';

interface DoubleBezelContainerProps {
  children: React.ReactNode;
  className?: string;
  outerClassName?: string;
}

export const DoubleBezelContainer: React.FC<DoubleBezelContainerProps> = ({
  children,
  className,
  outerClassName
}) => {
  return (
    <div className={cn(
      "p-1.5 rounded-[2rem] bg-petrol/5 ring-1 ring-petrol/5 dark:ring-white/10",
      outerClassName
    )}>
      <div className={cn(
        "bg-surface-base rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] shadow-level-1 overflow-hidden",
        className
      )}>
        {children}
      </div>
    </div>
  );
};
