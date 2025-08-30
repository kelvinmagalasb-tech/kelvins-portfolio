import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';

const pricingPlans = [
  {
    name: "Basic",
    price: "$49",
    period: "per design",
    description: "Perfect for simple design needs",
    features: [
      "1 Design concept",
      "2 Revisions included",
      "High-resolution files",
      "48-hour delivery",
      "Email support"
    ],
    popular: false,
    buttonText: "Get Started",
    icon: Check
  },
  {
    name: "Professional",
    price: "$99",
    period: "per design",
    description: "Most popular for businesses",
    features: [
      "3 Design concepts",
      "5 Revisions included",
      "All file formats (PNG, JPG, PDF, AI)",
      "24-hour delivery",
      "Priority support",
      "Source files included",
      "Print-ready files"
    ],
    popular: true,
    buttonText: "Choose Professional",
    icon: Star
  },
  {
    name: "Premium",
    price: "$199",
    period: "per design",
    description: "For complex projects and branding",
    features: [
      "5 Design concepts",
      "Unlimited revisions",
      "All file formats + extras",
      "12-hour delivery",
      "Phone & email support",
      "Brand guidelines",
      "Commercial license",
      "3D mockups included"
    ],
    popular: false,
    buttonText: "Go Premium",
    icon: Zap
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your design needs. No hidden fees, no surprises.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              animation="scale-in"
              delay={index * 0.1}
            >
              <Card className={`relative h-full ${
                plan.popular 
                  ? 'border-primary shadow-xl scale-105' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    plan.popular ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-800'
                  }`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'variant-outline'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link to="/contact">
                      {plan.buttonText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in" delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Need a custom package? We offer flexible pricing for large projects.
            </p>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Us for Custom Quote</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;