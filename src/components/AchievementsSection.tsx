
import React from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export const AchievementsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-purple-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <AnimatedCounter end={500} suffix="+" label="Projects Done" />
          <AnimatedCounter end={70} suffix="+" label="Happy Clients" />
          <AnimatedCounter end={150} suffix="+" label="Logos Created" />
          <AnimatedCounter end={80} suffix="+" label="Websites Built" />
        </div>
      </div>
    </section>
  );
};
