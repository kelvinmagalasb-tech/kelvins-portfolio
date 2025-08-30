import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Zap, Target, Palette, FileText } from 'lucide-react';

const Branding = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Logo Design",
      description: "Unique and memorable logo designs that represent your brand's identity and values",
      features: ["Logo Concepts", "Vector Files", "Style Variations", "Brand Mark"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Visual Identity",
      description: "Complete visual identity system including color palettes, typography, and design elements",
      features: ["Color Palette", "Typography", "Visual Elements", "Icon System"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Brand Guidelines",
      description: "Comprehensive brand guidelines to ensure consistent brand application across all platforms",
      features: ["Usage Guidelines", "Do's & Don'ts", "Application Examples", "Brand Standards"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Marketing Materials",
      description: "Professional marketing collateral designed to reinforce your brand identity",
      features: ["Business Cards", "Letterheads", "Brochures", "Presentation Templates"]
    }
  ];

  const brandingProcess = [
    {
      title: "Discovery",
      description: "Understanding your business, target audience, and brand aspirations",
      icon: "🔍"
    },
    {
      title: "Research",
      description: "Market analysis and competitor research to position your brand uniquely",
      icon: "📊"
    },
    {
      title: "Concept",
      description: "Creating initial brand concepts and visual direction",
      icon: "💡"
    },
    {
      title: "Design",
      description: "Developing the complete visual identity system",
      icon: "🎨"
    },
    {
      title: "Refine",
      description: "Perfecting the design based on feedback and testing",
      icon: "✨"
    },
    {
      title: "Deliver",
      description: "Final brand package with guidelines and assets",
      icon: "🚀"
    }
  ];

  const portfolioItems = [
    {
      title: "Tech Startup Brand",
      category: "Complete Identity",
      description: "Modern tech company branding with logo, colors, and guidelines",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Restaurant Branding",
      category: "Food & Beverage",
      description: "Warm and inviting brand identity for local restaurant",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Fashion Brand",
      category: "Retail",
      description: "Elegant and sophisticated branding for fashion boutique",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Fitness Brand",
      category: "Health & Wellness",
      description: "Energetic and motivational brand for fitness center",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const deliverables = [
    "Logo Design (Multiple Formats)",
    "Brand Color Palette",
    "Typography System",
    "Brand Guidelines Document",
    "Business Card Design",
    "Letterhead Template",
    "Social Media Templates",
    "Marketing Material Templates"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Branding Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete brand identity solutions that help your business stand out, 
            connect with customers, and build lasting brand recognition.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Branding Process */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Branding Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingProcess.map((step, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 0.1}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Portfolio Section */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Brand Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 0.2}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Deliverables Section */}
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Receive</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Branding;