import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Eye, ExternalLink, Filter } from 'lucide-react';
import { ProjectPreview } from '@/components/ProjectPreview';

export const InteractivePortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Modern Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80",
      client: "Tech Startup",
      year: "2024",
      tags: ["Logo", "Brand Guide", "Business Cards"],
      description: "A comprehensive brand identity project for a tech startup, including logo design, brand guidelines, and business cards.",
      liveUrl: "https://example.com/project1"
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      client: "Fashion Store",
      year: "2024",
      tags: ["React", "E-commerce", "Responsive"],
      description: "A fully responsive e-commerce website built with React for a fashion store, featuring product catalog, shopping cart, and secure checkout.",
      liveUrl: "https://example.com/project2"
    },
    {
      id: 3,
      title: "Mobile App UI Design",
      category: "ui-ux",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      client: "Food Delivery App",
      year: "2023",
      tags: ["Mobile", "UI/UX", "Figma"]
    },
    {
      id: 4,
      title: "Restaurant Menu Design",
      category: "print",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
      client: "Local Restaurant",
      year: "2024",
      tags: ["Print Design", "Menu", "Typography"]
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "social",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
      client: "Fashion Brand",
      year: "2024",
      tags: ["Instagram", "Facebook", "Campaign"]
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
      client: "Law Firm",
      year: "2023",
      tags: ["Corporate", "Professional", "CMS"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'branding', name: 'Branding' },
    { id: 'web', name: 'Web Development' },
    { id: 'ui-ux', name: 'UI/UX Design' },
    { id: 'print', name: 'Print Design' },
    { id: 'social', name: 'Social Media' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="section-padding bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      <div className="container mx-auto container-padding">
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <h2 className="text-responsive-xl font-bold mb-4 text-gradient">Interactive Portfolio</h2>
          <p className="text-responsive-md text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work with interactive previews and detailed project information
          </p>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection animation="slide-up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="rounded-full px-6 py-2 text-sm hover-scale"
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <AnimatedSection key={item.id} animation="scale-in" delay={index * 0.1}>
              <Card 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2 justify-center">
                          <Button 
                            size="sm" 
                            variant="secondary" 
                            className="glass-effect"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(item.id);
                            }}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Preview
                          </Button>
                          {item.liveUrl && (
                            <Button 
                              size="sm" 
                              variant="secondary" 
                              className="glass-effect"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(item.liveUrl, '_blank');
                              }}
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Live Site
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {item.year}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      Client: {item.client}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in" delay={0.8} className="text-center mt-12">
          <Button size="lg" className="hover-scale">
            View Complete Portfolio
          </Button>
        </AnimatedSection>
      </div>
      
      {/* Project Preview Dialog */}
      {selectedProject && (
        <ProjectPreview
          open={selectedProject !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
          project={portfolioItems.find(item => item.id === selectedProject)!}
        />
      )}
    </section>
  );
};