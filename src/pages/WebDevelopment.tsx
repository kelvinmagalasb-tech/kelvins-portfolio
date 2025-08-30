import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { OrderDesignDialog } from '@/components/OrderDesignDialog';
import { Code, Globe, Database, Settings, ExternalLink, CheckCircle, Clock, DollarSign, Zap } from 'lucide-react';

const WebDevelopment = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      description: "Modern, responsive websites using latest technologies like React, Vue.js, and Node.js",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "System Development",
      description: "Custom business systems and applications using Java programming language",
      features: ["Java Applications", "Spring Boot", "Enterprise Systems", "API Development"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Interactive user interfaces using React, TypeScript, and modern CSS frameworks",
      features: ["React/Vue.js", "TypeScript", "Tailwind CSS", "Component Libraries"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side applications and APIs with Java, Node.js, and database integration",
      features: ["REST APIs", "Database Design", "Authentication", "Cloud Deployment"]
    }
  ];

  const portfolio = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Java Spring Boot backend",
      technologies: ["React", "Java Spring Boot", "PostgreSQL", "Stripe Payment"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80",
      demoUrl: "#",
      category: "Full Stack"
    },
    {
      title: "Business Management System",
      description: "Custom Java application for inventory and customer management",
      technologies: ["Java", "MySQL", "JavaFX", "Apache POI"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      demoUrl: "#",
      category: "Java System"
    },
    {
      title: "Corporate Website",
      description: "Modern responsive website with content management system",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&q=80",
      demoUrl: "#",
      category: "Website"
    },
    {
      title: "Mobile-First Web App",
      description: "Progressive web application with offline capabilities",
      technologies: ["Vue.js", "PWA", "Firebase", "Vuetify"],
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=500&q=80",
      demoUrl: "#",
      category: "Web App"
    },
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with online ordering system and menu management",
      technologies: ["React", "Node.js", "MongoDB", "Payment Integration"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=80",
      demoUrl: "#",
      category: "Restaurant"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing website with advanced search and filtering capabilities",
      technologies: ["React", "Express.js", "PostgreSQL", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",
      demoUrl: "#",
      category: "Real Estate"
    },
    {
      title: "Healthcare Management",
      description: "Patient management system with appointment scheduling and records",
      technologies: ["Java Spring Boot", "MySQL", "React", "JWT Authentication"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=500&q=80",
      demoUrl: "#",
      category: "Healthcare"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management and student tracking",
      technologies: ["React", "Node.js", "MongoDB", "Video Streaming"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
      demoUrl: "#",
      category: "Education"
    }
  ];

  const technologies = {
    "Frontend": ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    "Backend": ["Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs", "GraphQL"],
    "Database": ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"],
    "Tools": ["Git", "Docker", "AWS", "Netlify", "Vercel", "IntelliJ IDEA", "VS Code"]
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-stack web development and custom system solutions using modern technologies 
            including Java, React, and cloud platforms.
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

        {/* Portfolio Section */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Website Demos & Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolio.map((project, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 0.2}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(project.demoUrl === "#" ? "/contact" : project.demoUrl, project.demoUrl === "#" ? "_self" : "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.demoUrl === "#" ? "Request Demo" : "View Demo"}
                      </Button>
                      <Button 
                        variant="secondary" 
                        className="flex-1"
                        onClick={() => window.open(`/preview?project=${encodeURIComponent(project.title)}`, "_blank")}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Pricing Section */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Web Development Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional web development services with transparent pricing. From simple websites to complex applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Website",
                price: "$200",
                description: "Perfect for small businesses",
                features: [
                  "Up to 5 pages",
                  "Responsive design",
                  "Contact form",
                  "SEO basics",
                  "3 months support"
                ],
                duration: "1-2 weeks",
                icon: <Globe className="w-6 h-6" />
              },
              {
                name: "Professional Website",
                price: "$599",
                description: "Advanced business websites",
                features: [
                  "Up to 15 pages",
                  "Custom design",
                  "CMS integration",
                  "E-commerce ready",
                  "Advanced SEO",
                  "6 months support"
                ],
                duration: "2-4 weeks",
                popular: true,
                icon: <Code className="w-6 h-6" />
              },
              {
                name: "Enterprise Solution",
                price: "$1,499+",
                description: "Complex web applications",
                features: [
                  "Custom web application",
                  "Database integration",
                  "User authentication",
                  "API development",
                  "Cloud deployment",
                  "12 months support"
                ],
                duration: "4-12 weeks",
                icon: <Zap className="w-6 h-6" />
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
                      designCategory="Web Development"
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
                        Get Started
                      </Button>
                    </OrderDesignDialog>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Technologies Section */}
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <AnimatedSection key={category} animation="slide-up" delay={index * 0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default WebDevelopment;