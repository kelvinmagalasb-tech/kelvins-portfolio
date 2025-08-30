import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, Megaphone, ShoppingBag, Music, Gamepad2, Eye } from 'lucide-react';
import { OrderDesignDialog } from '@/components/OrderDesignDialog';

const PosterDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: <Megaphone className="w-4 h-4" />, color: 'bg-primary' },
    { name: 'Events', icon: <Calendar className="w-4 h-4" />, color: 'bg-purple-500' },
    { name: 'Marketing', icon: <ShoppingBag className="w-4 h-4" />, color: 'bg-blue-500' },
    { name: 'Entertainment', icon: <Music className="w-4 h-4" />, color: 'bg-pink-500' },
    { name: 'Gaming', icon: <Gamepad2 className="w-4 h-4" />, color: 'bg-green-500' }
  ];

  const posters = [
    {
      id: 1,
      title: "Tech Conference 2024",
      category: "Events",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      description: "Modern technology conference poster with futuristic design elements"
    },
    {
      id: 2,
      title: "Music Festival Poster",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
      description: "Vibrant music festival poster with dynamic typography"
    },
    {
      id: 3,
      title: "Creative Workshop",
      category: "Events",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80",
      description: "Artistic workshop poster with creative design elements"
    },
    {
      id: 4,
      title: "Product Launch Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=800&q=80",
      description: "Professional product launch poster with sleek design"
    },
    {
      id: 5,
      title: "Gaming Tournament",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      description: "Dynamic gaming tournament poster with esports theme"
    },
    {
      id: 6,
      title: "Fashion Show Event",
      category: "Events",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
      description: "Elegant fashion show poster with stylish typography"
    },
    {
      id: 7,
      title: "Summer Sale Promotion",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
      description: "Eye-catching summer sale poster with promotional design"
    },
    {
      id: 8,
      title: "Concert Night Poster",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      description: "Dark and moody concert poster with dramatic lighting"
    },
    {
      id: 9,
      title: "Food Festival",
      category: "Events",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      description: "Appetizing food festival poster with culinary theme"
    },
    {
      id: 10,
      title: "Brand Awareness Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      description: "Corporate brand awareness poster with professional design"
    },
    {
      id: 11,
      title: "Gaming Championship",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=800&q=80",
      description: "High-energy gaming championship poster with neon effects"
    },
    {
      id: 12,
      title: "Dance Competition",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
      description: "Dynamic dance competition poster with movement theme"
    }
  ];

  const filteredPosters = selectedCategory === 'All' 
    ? posters 
    : posters.filter(poster => poster.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Poster Designs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Eye-catching poster designs for events, marketing campaigns, and promotional materials. 
            Browse our portfolio of creative and impactful designs.
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

        {/* Posters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosters.map((poster, index) => (
            <AnimatedSection key={poster.id} animation="scale-in" delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img 
                    src={poster.image} 
                    alt={poster.title}
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
                          <div className="aspect-[2/3]">
                            <img 
                              src={poster.image} 
                              alt={poster.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <Badge className="w-fit mb-2">{poster.category}</Badge>
                            <h3 className="text-2xl font-bold mb-4">{poster.title}</h3>
                            <p className="text-muted-foreground mb-6">{poster.description}</p>
                            <div className="space-y-2">
                              <h4 className="font-semibold">Specifications:</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Print-ready high resolution (300 DPI)</li>
                                <li>• Multiple format options (A1, A2, A3)</li>
                                <li>• Source files included</li>
                                <li>• Unlimited revisions</li>
                                <li>• Fast 24-48 hour delivery</li>
                              </ul>
                            </div>
                            <OrderDesignDialog 
                              designName={poster.title}
                              designCategory={poster.category}
                            >
                              <Button className="mt-6">Order Similar Design</Button>
                            </OrderDesignDialog>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">{poster.category}</Badge>
                  <h3 className="font-semibold mb-1">{poster.title}</h3>
                  <p className="text-sm text-muted-foreground">{poster.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Features Section */}
        <AnimatedSection animation="fade-in" className="mt-20 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Megaphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Impact</h3>
              <p className="text-muted-foreground">Designs that grab attention and communicate your message effectively</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Quick turnaround times to meet your event deadlines</p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Print Ready</h3>
              <p className="text-muted-foreground">High-resolution files ready for professional printing</p>
            </Card>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fade-in" className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Poster Design?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get a professional poster designed for your specific needs. 
              From concept to completion, we'll create something that stands out.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
              Get Custom Poster
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PosterDesign;