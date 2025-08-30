
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';

export const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to bring your creative vision to life. Get in touch today!
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 hover-scale">
            <Link to="/contact">Get Started</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};
