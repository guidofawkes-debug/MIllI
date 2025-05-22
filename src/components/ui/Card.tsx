import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn(
      'bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[#00ff00]/20 rounded-xl p-6',
      className
    )}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn('space-y-4', className)}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={cn('mt-4 pt-4 border-t border-[#00ff00]/20', className)}>
      {children}
    </div>
  );
};