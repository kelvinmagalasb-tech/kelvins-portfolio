
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in' | 'stagger';
  delay?: number;
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  duration = 0.8,
}) => {
  const { isVisible, elementRef } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const delayClass = delay > 0 ? `delay-${Math.min(delay * 100, 1000)}` : '';
    
    if (!isVisible) {
      switch (animation) {
        case 'slide-up':
          return `${baseClasses} ${delayClass} opacity-0 translate-y-20`;
        case 'slide-left':
          return `${baseClasses} ${delayClass} opacity-0 translate-x-20`;
        case 'slide-right':
          return `${baseClasses} ${delayClass} opacity-0 -translate-x-20`;
        case 'scale-in':
          return `${baseClasses} ${delayClass} opacity-0 scale-95`;
        case 'stagger':
          return `${baseClasses} ${delayClass} opacity-0 translate-y-10 scale-95`;
        default:
          return `${baseClasses} ${delayClass} opacity-0`;
      }
    }

    return `${baseClasses} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};
