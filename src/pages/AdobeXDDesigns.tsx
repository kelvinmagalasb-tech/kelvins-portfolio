import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Smartphone, Monitor, Tablet, Layers, Zap, Eye } from 'lucide-react';
import { OrderDesignDialog } from '@/components/OrderDesignDialog';

const AdobeXDDesigns = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: <Layers className="w-4 h-4" />, color: 'bg-primary' },
    { name: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" />, color: 'bg-blue-500' },
    { name: 'Web Interfaces', icon: <Monitor className="w-4 h-4" />, color: 'bg-green-500' },
    { name: 'Tablets', icon: <Tablet className="w-4 h-4" />, color: 'bg-purple-500' },
    { name: 'Prototypes', icon: <Zap className="w-4 h-4" />, color: 'bg-orange-500' }
  ];

  const designs = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      description: "Modern e-commerce mobile app with intuitive shopping experience"
    },
    {
      id: 2,
      title: "Banking App Interface",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      description: "Secure and user-friendly banking application design"
    },
    {
      id: 3,
      title: "Corporate Website Design",
      category: "Web Interfaces",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      description: "Professional corporate website with clean design"
    },
    {
      id: 4,
      title: "Food Delivery App",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80",
      description: "Appetizing food delivery app with seamless ordering flow"
    },
    {
      id: 5,
      title: "Dashboard Interface",
      category: "Web Interfaces",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "Data visualization dashboard with analytics interface"
    },
    {
      id: 6,
      title: "Fitness App Design",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      description: "Motivating fitness tracking app with workout features"
    },
    {
      id: 7,
      title: "Portfolio Website",
      category: "Web Interfaces",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Creative portfolio website with stunning visual layout"
    },
    {
      id: 8,
      title: "Educational Platform",
      category: "Tablets",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      description: "Interactive educational platform optimized for tablets"
    },
    {
      id: 9,
      title: "Interactive Prototype",
      category: "Prototypes",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=800&q=80",
      description: "Fully interactive prototype with micro-interactions"
    },
    {
      id: 10,
      title: "SaaS Platform Design",
      category: "Web Interfaces",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      description: "Complex SaaS platform with multiple user roles"
    },
    {
      id: 11,
      title: "Travel App Interface",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      description: "Inspiring travel app with booking and discovery features"
    },
    {
      id: 12,
      title: "Tablet Reading App",
      category: "Tablets",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      description: "Comfortable reading experience designed for tablets"
    }
  ];

  const filteredDesigns = selectedCategory === 'All' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Adobe XD UI/UX Designs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional UI/UX designs and interactive prototypes created with Adobe XD. 
            From mobile apps to web interfaces, see how we bring digital experiences to life.
          </p>
        </AnimatedSection>

        {/* Categories Filter */}
        <AnimatedSection animation="slide-up" className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className="flex items-center gap-2"
              >
                <div className={`p-1 rounded ${category.color} text-white`}>
                  {category.icon}
                </div>
                {category.name}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Designs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDesigns.map((design, index) => (
            <AnimatedSection key={design.id} animation="scale-in" delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Design
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="aspect-[4/5]">
                            <img 
                              src={design.image} 
                              alt={design.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <Badge className="w-fit mb-2">{design.category}</Badge>
                            <h3 className="text-2xl font-bold mb-4">{design.title}</h3>
                            <p className="text-muted-foreground mb-6">{design.description}</p>
                            <div className="space-y-2">
                              <h4 className="font-semibold">Deliverables:</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Adobe XD source files</li>
                                <li>• Interactive prototype</li>
                                <li>• Design system components</li>
                                <li>• Asset exports</li>
                                <li>• Style guide documentation</li>
                              </ul>
                            </div>
                            <OrderDesignDialog 
                              designName={design.title}
                              designCategory={design.category}
                            >
                              <Button className="mt-6">Request Similar Design</Button>
                            </OrderDesignDialog>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">{design.category}</Badge>
                  <h3 className="font-semibold mb-1">{design.title}</h3>
                  <p className="text-sm text-muted-foreground">{design.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Process Section */}
        <AnimatedSection animation="fade-in" className="mt-20 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">My Design Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <p className="text-muted-foreground">Understanding user needs and business goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Wireframing</h3>
              <p className="text-muted-foreground">Creating low-fidelity layouts and user flows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground">High-fidelity mockups with visual design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prototype</h3>
              <p className="text-muted-foreground">Interactive prototypes for testing and validation</p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fade-in" className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your UI/UX Project?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get a professional UI/UX design that converts visitors into customers. 
              From wireframes to interactive prototypes, I'll help bring your vision to life.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
              Start Your Project
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AdobeXDDesigns;