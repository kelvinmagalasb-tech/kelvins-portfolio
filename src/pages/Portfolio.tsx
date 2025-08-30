
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Download, Eye } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = ['all', 'invitations', 'posters', 'banners', 'business-cards', 'social-media', 'certificates', 'brochures'];
  
  const categoryLabels = {
    'all': 'All Designs',
    'invitations': 'Online Invitation Cards',
    'posters': 'Posters & Flyers',
    'banners': 'Banners & Headers',
    'business-cards': 'Business Cards',
    'social-media': 'Social Media Posts',
    'certificates': 'Certificates',
    'brochures': 'Brochures & Menus'
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Elegant Wedding Invitation",
      category: "invitations",
      image: "/lovable-uploads/06d71b18-6f20-48e1-a46c-65b2c18f89b3.jpg",
      description: "Sophisticated digital wedding invitation with gold accents"
    },
    {
      id: 2,
      title: "Birthday Party Card",
      category: "invitations",
      image: "/lovable-uploads/5659ebec-1220-4e8a-8001-5242f0105af7.jpg",
      description: "Colorful and fun birthday invitation card design"
    },
    {
      id: 3,
      title: "Corporate Event Invitation",
      category: "invitations",
      image: "/lovable-uploads/cd259e4a-9c1d-475a-a60d-f0ed4401fac5.jpg",
      description: "Professional business event invitation template"
    },
    {
      id: 4,
      title: "Modern Event Poster",
      category: "posters",
      image: "/lovable-uploads/887aa213-039e-48af-902e-64d0fccaa854.jpg",
      description: "Contemporary poster design for tech conference"
    },
    {
      id: 5,
      title: "Product Banner Design",
      category: "banners",
      image: "/lovable-uploads/15750c7b-2beb-430d-8cbe-ddc12351e9b4.png",
      description: "Eye-catching banner for product launch campaign"
    },
    {
      id: 6,
      title: "Professional Business Card",
      category: "business-cards",
      image: "/lovable-uploads/221039dc-77ab-4635-81f5-e175c36abd96.png",
      description: "Clean and modern business card design"
    },
    {
      id: 7,
      title: "Social Media Post",
      category: "social-media",
      image: "/lovable-uploads/23104240-bd09-4e57-97c2-474c5461e861.png",
      description: "Engaging social media post template"
    },
    {
      id: 8,
      title: "Achievement Certificate",
      category: "certificates",
      image: "/lovable-uploads/39aacc28-e926-4c71-8938-8858551db4c9.png",
      description: "Professional certificate template design"
    },
    {
      id: 9,
      title: "Restaurant Menu Design",
      category: "brochures",
      image: "/lovable-uploads/3c823dd5-753f-42dc-9360-72f624163792.png",
      description: "Elegant restaurant menu layout"
    },
    {
      id: 10,
      title: "Baby Shower Invitation",
      category: "invitations",
      image: "/lovable-uploads/3da8a1d3-bb00-4eb5-ae4f-70d2a5a44b14.png",
      description: "Cute and playful baby shower invitation"
    },
    {
      id: 11,
      title: "Music Event Poster",
      category: "posters",
      image: "/lovable-uploads/40baad7d-77a2-4040-87df-f60692ec9de6.png",
      description: "Vibrant poster design for music festival"
    },
    {
      id: 12,
      title: "Graduation Invitation",
      category: "invitations",
      image: "/lovable-uploads/4458d6f9-5677-4d16-8e6f-59f14fb6fe67.png",
      description: "Academic achievement celebration invitation"
    }
  ];

  const filteredDesigns = portfolioItems.filter(item => 
    activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">My Design Portfolio</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Professional graphic design work specializing in online invitation cards, posters, and digital marketing materials. Click any image to view details.
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
              {portfolioItems.length}+ Completed Projects
            </Badge>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-background sticky top-16 z-40 border-b py-6 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeFilter === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="hover-scale transition-all duration-200"
              >
                {categoryLabels[category]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of professional designs including online invitation cards, 
              posters, and various marketing materials created with Adobe Creative Suite.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDesigns.map((item, index) => (
              <AnimatedSection key={item.id} animation="slide-up" delay={index * 0.1}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-background">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="absolute top-3 left-3 bg-background/90 text-foreground"
                    >
                      {categoryLabels[item.category]}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {filteredDesigns.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
                No designs found
              </h3>
              <p className="text-lg text-muted-foreground">
                Try selecting a different category to see more work.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Need a custom online invitation card, poster, or any graphic design work? 
              Let's create something amazing together.
            </p>
            <Button variant="secondary" size="lg" className="hover-scale">
              Get Started Today
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
