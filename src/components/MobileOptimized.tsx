import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface MobileCardProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileCard: React.FC<MobileCardProps> = ({ children, className = '' }) => {
  return (
    <Card className={`premium-card touch-manipulation ${className}`}>
      <CardContent className="p-4 md:p-6">
        {children}
      </CardContent>
    </Card>
  );
};

interface TouchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export const TouchButton: React.FC<TouchButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'default',
  size = 'md',
  className = '',
  disabled = false
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]'
  };

  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]} 
        touch-manipulation 
        active:scale-95 
        transition-all 
        duration-200 
        rounded-xl
        ${className}
      `}
    >
      {children}
    </Button>
  );
};

// Mobile-optimized spacing utilities
export const MobileSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container mx-auto container-padding">
        {children}
      </div>
    </section>
  );
};

// Touch-friendly grid
export const ResponsiveGrid: React.FC<{ 
  children: React.ReactNode; 
  cols?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ 
  children, 
  cols = 3,
  gap = 'md',
  className = ''
}) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-10 lg:gap-12'
  };

  return (
    <div className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};