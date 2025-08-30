import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';

const featuredWorks = [
  {
    id: 1,
    title: "Modern Brand Identity",
    category: "Branding",
    image: "/lovable-uploads/c23cc2cd-ad2d-4ec0-9704-9b1db3e56a7f.png",
    description: "Complete brand identity design including logo, business cards, and brand guidelines.",
    tags: ["Logo Design", "Brand Guidelines", "Print Design"]
  },
  {
    id: 2,
    title: "Wedding Invitation Suite",
    category: "Invitations",
    image: "/lovable-uploads/4458d6f9-5677-4d16-8e6f-59f14fb6fe67.png",
    description: "Elegant wedding invitation design with matching RSVP cards and thank you notes.",
    tags: ["Wedding", "Print Design", "Elegant"]
  },
  {
    id: 3,
    title: "Restaurant Menu Design",
    category: "Print Design",
    image: "/lovable-uploads/99a5c7e6-6094-40c5-a015-3ad6c4d6edcb.png",
    description: "Modern restaurant menu design with food photography integration.",
    tags: ["Menu Design", "Food & Beverage", "Modern"]
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Digital Marketing",
    image: "/lovable-uploads/e42994b8-e753-4c7d-a9e0-3f056cefbf47.png",
    description: "Complete social media visual campaign with templates and guidelines.",
    tags: ["Social Media", "Campaign", "Digital"]
  }
];

const FeaturedPortfolio = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Take a look at some of our recent projects and see how we bring creative visions to life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredWorks.map((work, index) => (
            <AnimatedSection
              key={work.id}
              animation="scale-in"
              delay={index * 0.1}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button size="sm" variant="secondary" className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-primary text-white">
                    {work.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {work.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {work.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in" delay={0.6}>
          <div className="text-center">
            <Button asChild size="lg" className="hover-scale">
              <Link to="/my-designs">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Full Portfolio
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;