import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';

// Sample portfolio data - in a real app, this would come from a database or API
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
    tags: ["Mobile", "UI/UX", "Figma"],
    description: "A modern mobile app UI design for a food delivery service, focusing on user experience and intuitive navigation.",
    liveUrl: "https://example.com/project3"
  },
  {
    id: 4,
    title: "Restaurant Menu Design",
    category: "print",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
    client: "Local Restaurant",
    year: "2024",
    tags: ["Print Design", "Menu", "Typography"],
    description: "An elegant menu design for a local restaurant, featuring custom typography and food photography.",
    liveUrl: "https://example.com/project4"
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "social",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    client: "Fashion Brand",
    year: "2024",
    tags: ["Instagram", "Facebook", "Campaign"],
    description: "A comprehensive social media campaign for a fashion brand, including content strategy and visual design.",
    liveUrl: "https://example.com/project5"
  },
  {
    id: 6,
    title: "Corporate Website",
    category: "web",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
    client: "Law Firm",
    year: "2023",
    tags: ["Corporate", "Professional", "CMS"],
    description: "A professional corporate website for a law firm, featuring service information, team profiles, and contact forms.",
    liveUrl: "https://example.com/project6"
  }
];

export const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '1');
  
  const project = portfolioItems.find(item => item.id === projectId) || portfolioItems[0];
  
  return (
    <section className="py-16 bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/portfolio" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Project Main Image */}
            <AnimatedSection animation="slide-right" delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
            
            {/* Project Details */}
            <AnimatedSection animation="slide-left" delay={0.3}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    <span className="font-medium">Client:</span>
                    <span className="text-muted-foreground">{project.client}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">Year:</span>
                    <span className="text-muted-foreground">{project.year}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Tag className="w-5 h-5 text-primary" />
                    <span className="font-medium">Category:</span>
                    <span className="text-muted-foreground capitalize">{project.category.replace('-', ' ')}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Technologies & Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {project.liveUrl && (
                  <Button 
                    variant="default" 
                    className="mt-4"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live Site
                  </Button>
                )}
              </div>
            </AnimatedSection>
          </div>
          
          {/* Project Gallery */}
          <AnimatedSection animation="fade-in" delay={0.5} className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-video bg-muted rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={`https://source.unsplash.com/random/600x400?design&sig=${project.id}${item}`}
                    alt={`${project.title} gallery ${item}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Related Projects */}
          <AnimatedSection animation="fade-in" delay={0.7} className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioItems
                .filter(item => item.id !== project.id && item.category === project.category)
                .slice(0, 3)
                .map(item => (
                  <div key={item.id} className="group">
                    <Link to={`/project/${item.id}`} className="block">
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="mt-3 font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.client}</p>
                    </Link>
                  </div>
                ))}
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
};