
import React, { useState, useEffect } from 'react';
import { HeroSlider } from '@/components/HeroSlider';
import { ServicesGrid } from '@/components/ServicesGrid';
import { AchievementsSection } from '@/components/AchievementsSection';
import { CTASection } from '@/components/CTASection';
import FeaturedPortfolio from '@/components/FeaturedPortfolio';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import StatsSection from '@/components/StatsSection';
import NewsletterSection from '@/components/NewsletterSection';
import { LoadingScreen } from '@/components/LoadingSpinner';
import { ParticleBackground } from '@/components/ParticleBackground';
import { InteractivePortfolio } from '@/components/InteractivePortfolio';
import { SkillsVisualization } from '@/components/SkillsVisualization';
import { DesignProcessTimeline } from '@/components/DesignProcessTimeline';
import { LivePricingCalculator } from '@/components/LivePricingCalculator';
import { ClientDashboardPreview } from '@/components/ClientDashboardPreview';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading with smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <ParticleBackground />
      <HeroSlider />
      <ServicesGrid />
      <InteractivePortfolio />
      <SkillsVisualization />
      <DesignProcessTimeline />
      <LivePricingCalculator />
      <ClientDashboardPreview />
      <FeaturedPortfolio />
      <StatsSection />
      <AchievementsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
