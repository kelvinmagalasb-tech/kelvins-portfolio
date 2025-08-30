
import React, { useEffect, useState } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  enableFloat?: boolean;
  backgroundElements?: boolean;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.5, 
  className = "",
  enableFloat = false,
  backgroundElements = false
}) => {
  const { offsetY, elementRef } = useParallax(speed);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      });
    };

    if (enableFloat) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [enableFloat]);

  return (
    <div 
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: `translateY(${offsetY}px) ${enableFloat ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` : ''}`,
      }}
    >
      {backgroundElements && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      )}
      {children}
    </div>
  );
};
