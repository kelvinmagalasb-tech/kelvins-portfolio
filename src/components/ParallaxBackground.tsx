
import React from 'react';
import { ParallaxSection } from './ParallaxSection';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  backgroundImage?: string;
  height?: string;
  overlay?: boolean;
  enableParticles?: boolean;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
  backgroundImage,
  height = "100vh",
  overlay = true,
  enableParticles = false
}) => {
  return (
    <div className="relative overflow-hidden" style={{ height }}>
      <ParallaxSection speed={-0.5} className="absolute inset-0" backgroundElements={enableParticles}>
        <div 
          className="w-full h-[120%] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        )}
      </ParallaxSection>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
