import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { OrderDesignDialog } from '@/components/OrderDesignDialog';
import { Palette, FileImage, Layout, Printer, ArrowRight, CheckCircle, Clock, DollarSign, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const GraphicsDesign = () => {
  const services = [
    {
      icon: <FileImage className="w-8 h-8" />,
      title: "Online Card Invitations",
      description: "Custom digital invitation cards for weddings, birthdays, corporate events, and special occasions",
      features: ["Wedding Invitations", "Birthday Cards", "Corporate Events", "Baby Shower Cards"]
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Poster Design",
      description: "Eye-catching posters for marketing, events, products, and promotional campaigns",
      features: ["Event Posters", "Product Promotion", "Marketing Materials", "Social Media Posts"]
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Adobe Creative Suite",
      description: "Professional designs using Adobe Photoshop, InDesign, and XD for complete creative solutions",
      features: ["UI/UX Design", "Print Design", "Digital Graphics", "Interactive Prototypes"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Complete visual identity solutions including logos, business cards, and brand guidelines",
      features: ["Logo Design", "Business Cards", "Brand Guidelines", "Letterheads"]
    }
  ];

  const invitationSamples = [
    {
      title: "Elegant Wedding Invitation",
      category: "Wedding Card",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Birthday Celebration Card",
      category: "Birthday Invitation",
      image: "https://images.unsplash.com/photo-1464146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Corporate Event Invitation",
      category: "Business Event",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Baby Shower Card",
      category: "Baby Celebration",
      image: "https://images.unsplash.com/photo-1500673922987-e212871f1c81?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Graduation Invitation",
      category: "Academic Achievement",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const posterSamples = [
    {
      title: "Modern Event Poster",
      category: "Event Marketing",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Tech Conference Poster",
      category: "Technology Event",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Creative Workshop Poster",
      category: "Educational",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Music Festival Poster",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Product Launch Poster",
      category: "Product Marketing",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Graphics Design Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional graphic design solutions for all your visual communication needs. 
            From invitation cards to posters and Adobe XD designs.
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                  {index === 0 && (
                    <Link to="/services/graphics-design/invitations">
                      <Button className="w-full flex items-center justify-center gap-2">
                        View Gallery <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  )}
                  {index === 1 && (
                    <Link to="/services/graphics-design/posters">
                      <Button className="w-full flex items-center justify-center gap-2">
                        View Gallery <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  )}
                  {index === 2 && (
                    <Link to="/services/graphics-design/adobe-creative">
                      <Button className="w-full flex items-center justify-center gap-2">
                        View Gallery <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Online Card Invitations Section */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Online Card Invitations</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Custom digital invitation cards that make your special moments memorable
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            {invitationSamples.map((item, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 0.1}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                    <Badge variant="outline" className="text-xs">{item.category}</Badge>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Adobe Creative Suite Designs Section */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Adobe Creative Suite Portfolio</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional designs created with Adobe Photoshop, InDesign, and XD for maximum impact
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            {posterSamples.map((item, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 0.1}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                    <Badge variant="outline" className="text-xs">{item.category}</Badge>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Pricing Section */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Graphics Design Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for all graphic design services. High-quality designs delivered fast.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                name: "Basic Design",
                price: "$15",
                description: "Perfect for simple designs",
                features: [
                  "1 Design concept",
                  "2 Revisions included",
                  "High-resolution files",
                  "48-hour delivery",
                  "Email support"
                ],
                duration: "1-2 days",
                icon: <FileImage className="w-6 h-6" />
              },
              {
                name: "Professional Design",
                price: "$35",
                description: "Most popular for businesses",
                features: [
                  "3 Design concepts",
                  "5 Revisions included",
                  "All file formats",
                  "24-hour delivery",
                  "Priority support",
                  "Source files included"
                ],
                duration: "1-2 days",
                popular: true,
                icon: <Palette className="w-6 h-6" />
              },
              {
                name: "Premium Design",
                price: "$75",
                description: "For complex branding projects",
                features: [
                  "5 Design concepts",
                  "Unlimited revisions",
                  "Complete brand package",
                  "12-hour delivery",
                  "Phone & email support",
                  "Brand guidelines",
                  "Commercial license"
                ],
                duration: "1-3 days",
                icon: <Layout className="w-6 h-6" />
              },
              {
                name: "CSS Pro Package",
                price: "$199",
                description: "Advanced CSS & Frontend styling",
                features: [
                  "Custom CSS animations",
                  "Advanced styling",
                  "Responsive design",
                  "CSS optimization",
                  "Browser compatibility",
                  "Performance optimization",
                  "Code documentation"
                ],
                duration: "2-5 days",
                popular: true,
                icon: <Code className="w-6 h-6" />
              }
            ].map((plan, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 0.1}>
                <Card className={`relative h-full ${
                  plan.popular 
                    ? 'border-primary shadow-xl scale-105' 
                    : 'border-gray-200'
                }`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      plan.popular ? 'bg-primary text-white' : 'bg-gray-100'
                    }`}>
                      {plan.icon}
                    </div>
                    
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <p className="text-muted-foreground">{plan.description}</p>
                    
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">per design</span>
                    </div>
                    
                    <Badge variant="outline" className="mt-2">
                      <Clock className="w-3 h-3 mr-1" />
                      {plan.duration}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <OrderDesignDialog 
                      designName={plan.name} 
                      designCategory="Graphics Design"
                    >
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-primary hover:bg-primary/90' 
                            : ''
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        <DollarSign className="w-4 h-4 mr-2" />
                        Order Now
                      </Button>
                    </OrderDesignDialog>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Tools & Software */}
        <AnimatedSection animation="fade-in" className="text-center">
          <h2 className="text-3xl font-bold mb-8">Tools & Software I Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Adobe Photoshop", "Adobe InDesign", "Adobe XD", "Adobe Illustrator", "Figma", "Canva", "CorelDRAW"].map((tool, index) => (
              <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                {tool}
              </Badge>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default GraphicsDesign;