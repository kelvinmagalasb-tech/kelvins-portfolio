
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { AnimatedSection } from '@/components/AnimatedSection';

export const HeroSlider = () => {
  const { user } = useAuth();
  
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80",
      title: "Hi, I'm Kelvin",
      subtitle: "Professional Graphic Designer"
    },
    {
      url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=1920&q=80",
      title: "Creative Design Solutions",
      subtitle: "Bringing Your Ideas to Life"
    },
    {
      url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1920&q=80",
      title: "Modern Web Development",
      subtitle: "Responsive & Interactive Websites"
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80",
      title: "Brand Identity Design",
      subtitle: "Creating Memorable Brands"
    },
    {
      url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1920&q=80",
      title: "Social Media Management",
      subtitle: "Engaging Content & Strategy"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Image Slider with Parallax */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-110' 
                : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-primary/20 to-black/80"></div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 p-3 md:p-4 rounded-full glass-effect text-white hover:bg-white/30 transition-all duration-500 group hover-glow hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform duration-300" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 p-3 md:p-4 rounded-full glass-effect text-white hover:bg-white/30 transition-all duration-500 group hover-glow hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform duration-300" />
      </button>

      {/* Enhanced Navigation Dots */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 md:space-x-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 hover:scale-150 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
      
      {/* Enhanced Content Area */}
      <div className="relative z-10 text-center text-white container-padding max-w-6xl mx-auto">
        <AnimatedSection animation="fade-in">
          <Badge className="mb-4 md:mb-8 bg-primary/20 text-white border-primary/30 glass-effect backdrop-blur-md text-sm md:text-base px-4 py-2">
            Welcome to Magalas B - Professional Design Agency
          </Badge>
        </AnimatedSection>
        
        <AnimatedSection animation="slide-up" delay={0.2}>
          <h1 className="text-responsive-xl font-bold mb-4 md:mb-8 text-gradient animate-glow">
            {heroImages[currentSlide].title}
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="slide-up" delay={0.4}>
          <p className="text-responsive-lg mb-6 md:mb-12 text-gray-200 font-medium">
            {heroImages[currentSlide].subtitle}
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="slide-up" delay={0.6}>
          <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional graphic design, web development, and creative solutions. 
            Transform your ideas into stunning visuals and grow your brand with cutting-edge design.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="scale-in" delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-10 py-4 md:py-6 hover-scale hover-glow rounded-2xl">
              <Link to="/my-designs">View Portfolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-10 py-4 md:py-6 glass-effect border-white/30 text-white hover:bg-white/20 hover-scale rounded-2xl">
              <Link to="/templates">Free Templates</Link>
            </Button>
          </div>
        </AnimatedSection>

        {/* Enhanced Auth CTA */}
        {!user && (
          <AnimatedSection animation="fade-in" delay={1.2}>
            <div className="mt-6 md:mt-12">
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-10 py-4 md:py-6 hover-scale bg-white/10 backdrop-blur-md rounded-2xl">
                <Link to="/auth">Get Started - Join Free</Link>
              </Button>
            </div>
          </AnimatedSection>
        )}
        
        {/* Floating Action Elements */}
        <div className="absolute bottom-20 md:bottom-32 left-0 right-0 flex justify-center">
          <div className="animate-bounce-soft">
            <div className="w-1 h-12 md:h-16 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
