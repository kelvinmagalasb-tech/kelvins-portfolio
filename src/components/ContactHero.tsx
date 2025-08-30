
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ParallaxBackground } from '@/components/ParallaxBackground';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Graphic Design - Creative Poster Design",
    category: "Graphic Design"
  },
  {
    src: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Web Development - Modern Website",
    category: "Web Development"
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Graphic Design - Brand Identity",
    category: "Graphic Design"
  },
  {
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Web Development - Responsive Design",
    category: "Web Development"
  },
  {
    src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Graphic Design - Digital Art",
    category: "Graphic Design"
  }
];

export const ContactHero = () => {
  return (
    <ParallaxBackground height="100vh">
      <div className="container mx-auto px-4 text-center text-white relative">
        {/* Animated Background Images Carousel */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <Carousel className="w-full h-full" opts={{ loop: true }}>
            <CarouselContent className="h-full">
              {portfolioImages.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover animate-scale-in hover:animate-float transition-all duration-700"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {image.category}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
            <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          </Carousel>
        </div>
        
        {/* Floating Design Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float backdrop-blur-sm"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full animate-float backdrop-blur-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-white/10 rounded-full animate-float backdrop-blur-sm" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-white/10 rounded-full animate-float backdrop-blur-sm" style={{animationDelay: '0.5s'}}></div>
        
        {/* Hero Content */}
        <div className="relative z-10 pt-32">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-fade-in">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Contact & Payment Info
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Ready to start your project? Get in touch with me through any of the channels below. 
            I'm here to help bring your creative vision to life.
          </p>
          
          {/* Animated Skills Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-white/30 hover-scale">
              Graphic Design
            </Badge>
            <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white border-white/30 hover-scale">
              Web Development
            </Badge>
            <Badge className="bg-gradient-to-r from-green-500/20 to-teal-500/20 text-white border-white/30 hover-scale">
              Digital Art
            </Badge>
          </div>
        </div>
      </div>
    </ParallaxBackground>
  );
};
