
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ParallaxSection } from '@/components/ParallaxSection';
import { AnimatedSection } from '@/components/AnimatedSection';

const services = [{
  category: "Design Services",
  items: [{
    name: "Posters",
    price: "10,000 TZS"
  }, {
    name: "Banners",
    price: "15,000 TZS"
  }, {
    name: "Business Cards",
    price: "8,000 TZS"
  }, {
    name: "Social Media Design",
    price: "10,000 TZS"
  }, {
    name: "Invitations",
    price: "10,000 TZS"
  }, {
    name: "Certificates",
    price: "8,000 TZS"
  }, {
    name: "Brochures/Leaflets",
    price: "20,000 TZS"
  }, {
    name: "Menus",
    price: "15,000 TZS"
  }, {
    name: "Calendars",
    price: "10,000 TZS"
  }, {
    name: "ID Cards",
    price: "8,000 TZS"
  }, {
    name: "Flyers",
    price: "10,000 TZS"
  }]
}, {
  category: "Web Development",
  items: [{
    name: "Website Design",
    price: "Starting at 50,000 TZS"
  }]
}];

const showcaseImages = [{
  src: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  alt: "Graphic Design Work",
  category: "Design"
}, {
  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  alt: "Web Development",
  category: "Development"
}];

export const ServicePricing = () => {
  return (
    <ParallaxSection speed={0.1} backgroundElements>
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Service Pricing
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transparent pricing for all services
            </p>
          </AnimatedSection>

          {/* Animated Showcase Images */}
          <div className="flex justify-center gap-8 mb-16">
            {showcaseImages.map((image, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 0.3}>
                <div className="relative group hover-lift">
                  <div className="w-48 h-32 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-2 left-2 text-white font-semibold text-sm backdrop-blur-sm bg-black/20 px-2 py-1 rounded">
                    {image.category}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((serviceCategory, categoryIndex) => (
              <AnimatedSection 
                key={categoryIndex} 
                animation="slide-up" 
                delay={categoryIndex * 0.2}
              >
                <Card className="hover-lift shadow-xl border-0 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm group">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {serviceCategory.category}
                    </h3>
                    <div className="space-y-4">
                      {serviceCategory.items.map((item, itemIndex) => (
                        <AnimatedSection 
                          key={itemIndex} 
                          animation="stagger" 
                          delay={categoryIndex * 0.2 + itemIndex * 0.05}
                        >
                          <div className="flex justify-between items-center py-3 px-4 rounded-lg bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover-scale group">
                            <span className="font-medium text-gray-700">{item.name}</span>
                            <span className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                              {item.price}
                            </span>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                    <Button className="w-full mt-6 hover-scale bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      Request Quote
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
};
