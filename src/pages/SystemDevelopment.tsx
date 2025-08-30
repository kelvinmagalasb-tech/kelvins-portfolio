import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { OrderDesignDialog } from '@/components/OrderDesignDialog';
import { 
  Server, 
  Shield, 
  Database, 
  Code2, 
  Smartphone, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Users,
  Zap
} from 'lucide-react';

const SystemDevelopment = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Enterprise Systems",
      description: "Custom business management systems, ERP solutions, and workflow automation",
      features: ["ERP Development", "CRM Systems", "Inventory Management", "Financial Systems"],
      price: "Starting at $2,500",
      duration: "4-12 weeks"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "Robust database design, optimization, and management systems",
      features: ["Database Design", "Data Migration", "Performance Tuning", "Backup Solutions"],
      price: "Starting at $1,200",
      duration: "2-6 weeks"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Systems",
      description: "Authentication, authorization, and security monitoring solutions",
      features: ["User Authentication", "Access Control", "Security Audits", "Compliance"],
      price: "Starting at $1,800",
      duration: "3-8 weeks"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful APIs, microservices, and system integration solutions",
      features: ["REST APIs", "Microservices", "Third-party Integration", "API Documentation"],
      price: "Starting at $1,500",
      duration: "2-8 weeks"
    }
  ];

  const technologies = {
    "Backend": ["Java", "Spring Boot", "Node.js", "Python", "C#", ".NET"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle", "SQL Server"],
    "Cloud": ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Heroku"],
    "Tools": ["Git", "Jenkins", "SonarQube", "Postman", "IntelliJ IDEA", "VS Code"]
  };

  const portfolio = [
    {
      title: "Healthcare Management System",
      description: "Complete patient management system with appointment scheduling and medical records",
      technologies: ["Java Spring Boot", "PostgreSQL", "React", "Docker"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=500&q=80",
      category: "Healthcare",
      features: ["Patient Records", "Appointment System", "Billing Integration", "Reports"]
    },
    {
      title: "E-Commerce Platform",
      description: "Scalable e-commerce solution with inventory management and payment processing",
      technologies: ["Node.js", "MongoDB", "Stripe API", "AWS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80",
      category: "E-Commerce",
      features: ["Product Catalog", "Order Management", "Payment Gateway", "Analytics"]
    },
    {
      title: "Financial Management System",
      description: "Enterprise financial tracking with automated reporting and compliance",
      technologies: ["Java", "Spring Security", "Oracle DB", "Angular"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
      category: "Finance",
      features: ["Financial Tracking", "Automated Reports", "Compliance", "Audit Trail"]
    },
    {
      title: "Supply Chain System",
      description: "Comprehensive supply chain management with real-time tracking",
      technologies: ["Python", "Django", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80",
      category: "Logistics",
      features: ["Inventory Tracking", "Supplier Management", "Order Processing", "Analytics"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic System",
      price: "$1,500",
      description: "Perfect for small businesses",
      features: [
        "Simple business logic",
        "Basic database design",
        "User authentication",
        "Basic reporting",
        "3 months support"
      ],
      duration: "2-4 weeks",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      name: "Professional System",
      price: "$3,500",
      description: "Advanced business solutions",
      features: [
        "Complex business workflows",
        "Advanced database features",
        "Role-based access control",
        "Custom reporting dashboard",
        "API integrations",
        "6 months support"
      ],
      duration: "4-8 weeks",
      popular: true,
      icon: <Server className="w-6 h-6" />
    },
    {
      name: "Enterprise System",
      price: "$7,500+",
      description: "Large-scale enterprise solutions",
      features: [
        "Multi-module architecture",
        "High-performance optimization",
        "Advanced security features",
        "Custom integrations",
        "Scalable infrastructure",
        "12 months support"
      ],
      duration: "8-16 weeks",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">System Development Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Custom software solutions and enterprise systems built with modern technologies. 
            From small business tools to large-scale enterprise applications.
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
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-1">
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {service.duration}
                        </Badge>
                        <Badge variant="secondary" className="text-xs font-semibold">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                  <OrderDesignDialog 
                    designName={service.title} 
                    designCategory="System Development"
                  >
                    <Button className="w-full flex items-center justify-center gap-2">
                      Request Quote <ArrowRight className="w-4 h-4" />
                    </Button>
                  </OrderDesignDialog>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Portfolio Section */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio & Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
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
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <Globe className="w-4 h-4 mr-2" />
                      View Case Study
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Pricing Section */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">System Development Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for custom system development. All packages include source code, documentation, and ongoing support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
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
                      designCategory="System Development"
                    >
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-primary hover:bg-primary/90' 
                            : ''
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                      >
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
        <AnimatedSection animation="fade-in" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies & Expertise</h2>
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

        {/* Process Section */}
        <AnimatedSection animation="fade-in" className="text-center">
          <h2 className="text-3xl font-bold mb-12">Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Requirements Analysis",
                description: "Detailed discussion of your business needs and system requirements"
              },
              {
                step: "2", 
                title: "System Design",
                description: "Architecture planning, database design, and technical specifications"
              },
              {
                step: "3",
                title: "Development",
                description: "Agile development with regular updates and milestone reviews"
              },
              {
                step: "4",
                title: "Testing & Deployment",
                description: "Comprehensive testing, deployment, and user training"
              }
            ].map((process, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SystemDevelopment;