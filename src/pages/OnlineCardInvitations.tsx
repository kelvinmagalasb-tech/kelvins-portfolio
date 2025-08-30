import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Heart, Gift, Briefcase, Baby, GraduationCap, PartyPopper, Eye } from 'lucide-react';
import { OrderDesignDialog } from '@/components/OrderDesignDialog';

const OnlineCardInvitations = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: <PartyPopper className="w-4 h-4" />, color: 'bg-primary' },
    { name: 'Wedding', icon: <Heart className="w-4 h-4" />, color: 'bg-rose-500' },
    { name: 'Birthday', icon: <Gift className="w-4 h-4" />, color: 'bg-orange-500' },
    { name: 'Corporate', icon: <Briefcase className="w-4 h-4" />, color: 'bg-blue-500' },
    { name: 'Baby Shower', icon: <Baby className="w-4 h-4" />, color: 'bg-pink-500' },
    { name: 'Graduation', icon: <GraduationCap className="w-4 h-4" />, color: 'bg-green-500' }
  ];

  const invitations = [
    {
      id: 1,
      title: "Elegant Rose Wedding Invitation",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80",
      description: "Romantic rose-themed wedding invitation with gold accents"
    },
    {
      id: 2,
      title: "Rustic Wedding Card",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      description: "Vintage rustic style wedding invitation with natural elements"
    },
    {
      id: 3,
      title: "Modern Minimalist Wedding",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      description: "Clean and minimal wedding invitation design"
    },
    {
      id: 4,
      title: "Fun Birthday Celebration",
      category: "Birthday",
      image: "https://images.unsplash.com/photo-1464146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      description: "Colorful and vibrant birthday party invitation"
    },
    {
      id: 5,
      title: "Kids Birthday Party",
      category: "Birthday",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      description: "Playful children's birthday invitation with cartoon elements"
    },
    {
      id: 6,
      title: "Adult Birthday Celebration",
      category: "Birthday",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800&q=80",
      description: "Sophisticated adult birthday party invitation"
    },
    {
      id: 7,
      title: "Corporate Annual Meeting",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
      description: "Professional corporate event invitation"
    },
    {
      id: 8,
      title: "Business Conference",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      description: "Modern business conference invitation design"
    },
    {
      id: 9,
      title: "Product Launch Event",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
      description: "Sleek product launch invitation with tech elements"
    },
    {
      id: 10,
      title: "Sweet Baby Shower",
      category: "Baby Shower",
      image: "https://images.unsplash.com/photo-1500673922987-e212871f1c81?auto=format&fit=crop&w=800&q=80",
      description: "Adorable baby shower invitation with soft colors"
    },
    {
      id: 11,
      title: "Baby Girl Celebration",
      category: "Baby Shower",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
      description: "Pink-themed baby girl shower invitation"
    },
    {
      id: 12,
      title: "Graduation Achievement",
      category: "Graduation",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      description: "Celebration graduation invitation with academic theme"
    }
  ];

  const filteredInvitations = selectedCategory === 'All' 
    ? invitations 
    : invitations.filter(inv => inv.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Online Card Invitations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beautiful, custom digital invitation cards for every special occasion. 
            Browse our collection and find the perfect design for your event.
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

        {/* Invitations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredInvitations.map((invitation, index) => (
            <AnimatedSection key={invitation.id} animation="scale-in" delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={invitation.image} 
                    alt={invitation.title}
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
                          <div className="aspect-[3/4]">
                            <img 
                              src={invitation.image} 
                              alt={invitation.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <Badge className="w-fit mb-2">{invitation.category}</Badge>
                            <h3 className="text-2xl font-bold mb-4">{invitation.title}</h3>
                            <p className="text-muted-foreground mb-6">{invitation.description}</p>
                            <div className="space-y-2">
                              <h4 className="font-semibold">Features:</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Fully customizable design</li>
                                <li>• High-resolution digital format</li>
                                <li>• Multiple size options</li>
                                <li>• Quick turnaround time</li>
                              </ul>
                            </div>
                            <OrderDesignDialog 
                              designName={invitation.title}
                              designCategory={invitation.category}
                            >
                              <Button className="mt-6">Order This Design</Button>
                            </OrderDesignDialog>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">{invitation.category}</Badge>
                  <h3 className="font-semibold mb-1">{invitation.title}</h3>
                  <p className="text-sm text-muted-foreground">{invitation.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fade-in" className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Custom Invitation?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get a personalized invitation card designed specifically for your event. 
              Fast delivery, unlimited revisions, and professional quality guaranteed.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
              Start Your Design
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default OnlineCardInvitations;