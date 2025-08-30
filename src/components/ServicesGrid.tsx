
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesGrid = () => {
  const services = [
    {
      title: "Graphics Design",
      description: "Professional logo design, branding materials, digital illustrations, and print designs",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=600&q=80",
      link: "/services/graphics-design",
      features: ["Logo Design", "Brand Identity", "Print Materials", "Digital Graphics"]
    },
    {
      title: "Web Development",
      description: "Modern responsive websites, e-commerce platforms, and custom web applications",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      link: "/services/web-development",
      features: ["Responsive Websites", "E-commerce", "Web Apps", "CMS Integration"]
    },
    {
      title: "System Development",
      description: "Custom business systems, enterprise applications, and database solutions",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      link: "/services/system-development",
      features: ["Enterprise Systems", "Database Design", "API Development", "Cloud Solutions"]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-accent/10">
      <div className="container mx-auto container-padding">
        <AnimatedSection animation="fade-in" className="text-center mb-12 md:mb-20">
          <h2 className="text-responsive-xl font-bold mb-4 md:mb-8 text-gradient">Our Services</h2>
          <p className="text-responsive-md text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Professional services to help your business grow and succeed in the digital world with cutting-edge solutions.
          </p>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 0.2}>
              <Link to={service.link} className="block h-full">
                <Card className="premium-card border-0 shadow-xl group h-full cursor-pointer overflow-hidden transform transition-all duration-500 hover:rotate-1">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 md:mb-6 flex-1 leading-relaxed">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border-primary/20">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 rounded-xl py-3">
                        Learn More & Get Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Additional CTA Section */}
        <AnimatedSection animation="fade-in" delay={0.8} className="text-center mt-12 md:mt-20">
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-muted-foreground mb-6">
              We create tailored solutions for unique business needs. Let's discuss your project.
            </p>
            <Button asChild size="lg" className="hover-scale">
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
