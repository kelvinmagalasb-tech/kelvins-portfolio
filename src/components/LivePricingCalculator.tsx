import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Calculator, Clock, CheckCircle, DollarSign, Calendar, Zap, Download, Share2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const LivePricingCalculator = () => {
  const [projectType, setProjectType] = useState('website');
  const [complexity, setComplexity] = useState([2]);
  const [timeline, setTimeline] = useState([7]);
  const [additionalServices, setAdditionalServices] = useState({
    branding: false,
    socialMedia: false,
    webDevelopment: false,
    seo: false,
    maintenance: false,
    contentCreation: false,
    analytics: false,
    hosting: false
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState('');
  const [activeTab, setActiveTab] = useState('design');

  const projectCategories = {
    design: {
      logo: { base: 150, name: 'Logo Design' },
      branding: { base: 500, name: 'Complete Branding' },
      uiux: { base: 800, name: 'UI/UX Design' },
      print: { base: 300, name: 'Print Design' },
      illustration: { base: 400, name: 'Illustration' }
    },
    web: {
      website: { base: 800, name: 'Website Development' },
      ecommerce: { base: 1500, name: 'E-commerce Site' },
      webapp: { base: 2000, name: 'Web Application' },
      landing: { base: 500, name: 'Landing Page' },
      blog: { base: 600, name: 'Blog/CMS' }
    },
    mobile: {
      app: { base: 2000, name: 'Mobile App Design' },
      ios: { base: 2500, name: 'iOS App' },
      android: { base: 2500, name: 'Android App' },
      hybrid: { base: 3000, name: 'Hybrid App' },
      prototype: { base: 1000, name: 'App Prototype' }
    }
  };

  const additionalOptions = {
    branding: { price: 300, name: 'Brand Guidelines', icon: <Share2 className="w-4 h-4" /> },
    socialMedia: { price: 200, name: 'Social Media Kit', icon: <Share2 className="w-4 h-4" /> },
    webDevelopment: { price: 600, name: 'Web Development', icon: <Zap className="w-4 h-4" /> },
    seo: { price: 250, name: 'SEO Optimization', icon: <Zap className="w-4 h-4" /> },
    maintenance: { price: 100, name: 'Monthly Maintenance', icon: <Zap className="w-4 h-4" /> },
    contentCreation: { price: 350, name: 'Content Creation', icon: <Download className="w-4 h-4" /> },
    analytics: { price: 150, name: 'Analytics Setup', icon: <Download className="w-4 h-4" /> },
    hosting: { price: 120, name: 'Hosting (1 year)', icon: <Download className="w-4 h-4" /> }
  };

  // Timeline estimates in days based on project type
  const timelineEstimates = {
    logo: { min: 2, max: 7 },
    branding: { min: 7, max: 21 },
    uiux: { min: 7, max: 21 },
    print: { min: 3, max: 10 },
    illustration: { min: 3, max: 14 },
    website: { min: 7, max: 21 },
    ecommerce: { min: 14, max: 45 },
    webapp: { min: 21, max: 60 },
    landing: { min: 3, max: 10 },
    blog: { min: 7, max: 21 },
    app: { min: 21, max: 60 },
    ios: { min: 21, max: 60 },
    android: { min: 21, max: 60 },
    hybrid: { min: 30, max: 90 },
    prototype: { min: 7, max: 21 }
  };

  useEffect(() => {
    // Get all project types from all categories
    const allProjectTypes = {
      ...projectCategories.design,
      ...projectCategories.web,
      ...projectCategories.mobile
    };
    
    const basePrice = allProjectTypes[projectType]?.base || 500;
    const complexityMultiplier = complexity[0] * 0.3 + 0.7; // 0.7x to 1.9x
    const timelineDiscount = timeline[0] > 14 ? 0.9 : 1; // 10% discount for longer timelines
    
    let additionalCost = 0;
    Object.entries(additionalServices).forEach(([key, enabled]) => {
      if (enabled && additionalOptions[key]) {
        additionalCost += additionalOptions[key].price;
      }
    });

    const calculatedPrice = (basePrice * complexityMultiplier * timelineDiscount) + additionalCost;
    setTotalPrice(Math.round(calculatedPrice));
    
    // Calculate estimated time
    const timeEstimate = timelineEstimates[projectType];
    if (timeEstimate) {
      const minDays = Math.round(timeEstimate.min * (timeline[0] <= 7 ? 0.8 : 1));
      const maxDays = Math.round(timeEstimate.max * (timeline[0] <= 7 ? 0.8 : 1));
      setEstimatedTime(`${minDays}-${maxDays} days`);
    } else {
      setEstimatedTime('7-14 days');
    }
  }, [projectType, complexity, timeline, additionalServices, activeTab]);

  const handleAdditionalServiceChange = (service: string, checked: boolean) => {
    setAdditionalServices(prev => ({
      ...prev,
      [service]: checked
    }));
  };

  const getComplexityLabel = (value: number) => {
    if (value <= 1) return 'Simple';
    if (value <= 2) return 'Standard';
    if (value <= 3) return 'Complex';
    return 'Premium';
  };

  const getTimelineLabel = (days: number) => {
    if (days <= 7) return 'Rush (1 week)';
    if (days <= 14) return 'Standard (2 weeks)';
    if (days <= 21) return 'Flexible (3 weeks)';
    return 'Extended (1 month+)';
  };
  return (
    <AnimatedSection>
      <Card className="w-full shadow-lg border-2 border-primary/10 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                Live Pricing Calculator
              </CardTitle>
              <CardDescription>Get instant quotes for your project</CardDescription>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-1 border-2">
              <DollarSign className="h-4 w-4 mr-1" />
              {totalPrice}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <Tabs defaultValue="design" value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="design" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {Object.entries(projectCategories.design).map(([key, value]) => (
                  <Button
                    key={key}
                    variant={projectType === key ? "default" : "outline"}
                    className="h-auto py-2 px-3 flex flex-col items-center justify-center text-center"
                    onClick={() => setProjectType(key)}
                  >
                    <span className="text-sm">{value.name}</span>
                    <span className="text-xs opacity-70 mt-1">${value.base}</span>
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {Object.entries(projectCategories.web).map(([key, value]) => (
                  <Button
                    key={key}
                    variant={projectType === key ? "default" : "outline"}
                    className="h-auto py-2 px-3 flex flex-col items-center justify-center text-center"
                    onClick={() => setProjectType(key)}
                  >
                    <span className="text-sm">{value.name}</span>
                    <span className="text-xs opacity-70 mt-1">${value.base}</span>
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mobile" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {Object.entries(projectCategories.mobile).map(([key, value]) => (
                  <Button
                    key={key}
                    variant={projectType === key ? "default" : "outline"}
                    className="h-auto py-2 px-3 flex flex-col items-center justify-center text-center"
                    onClick={() => setProjectType(key)}
                  >
                    <span className="text-sm">{value.name}</span>
                    <span className="text-xs opacity-70 mt-1">${value.base}</span>
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Project Complexity: <span className="text-primary font-medium">{getComplexityLabel(complexity[0])}</span></Label>
                <Badge variant="outline">{complexity[0]}/4</Badge>
              </div>
              <Slider
                defaultValue={complexity}
                max={4}
                min={1}
                step={1}
                onValueChange={setComplexity}
                className="py-4"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Timeline Priority: <span className="text-primary font-medium">{getTimelineLabel(timeline[0])}</span></Label>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{estimatedTime}</span>
                </div>
              </div>
              <Slider
                defaultValue={timeline}
                max={28}
                min={3}
                step={1}
                onValueChange={setTimeline}
                className="py-4"
              />
            </div>
            
            <Separator className="my-4" />
            
            <div>
              <h3 className="font-medium mb-3">Additional Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(additionalOptions).map(([key, option]) => (
                  <div key={key} className="flex items-center justify-between space-x-2 p-2 rounded-md border">
                    <div className="flex items-center gap-2">
                      {option.icon}
                      <Label htmlFor={key} className="cursor-pointer">
                        {option.name} <span className="text-xs text-muted-foreground">(+${option.price})</span>
                      </Label>
                    </div>
                    <Switch
                      id={key}
                      checked={additionalServices[key as keyof typeof additionalServices]}
                      onCheckedChange={(checked) => handleAdditionalServiceChange(key, checked)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 bg-muted/20 border-t">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-sm">Estimated delivery: <strong>{estimatedTime}</strong></span>
          </div>
          <Button className="w-full sm:w-auto">
            <CheckCircle className="mr-2 h-4 w-4" /> Request Quote
          </Button>
        </CardFooter>
      </Card>
    </AnimatedSection>
  );

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto container-padding">
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <h2 className="text-responsive-xl font-bold mb-4 text-gradient">Live Pricing Calculator</h2>
          <p className="text-responsive-md text-muted-foreground max-w-3xl mx-auto">
            Get instant pricing estimates for your design project with our interactive calculator
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Calculator Controls */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Type Selection */}
            <AnimatedSection animation="slide-up" delay={0.1}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-5 h-5 mr-2 text-primary" />
                    Project Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Object.entries(projectTypes).map(([key, type]) => (
                      <Button
                        key={key}
                        variant={projectType === key ? "default" : "outline"}
                        onClick={() => setProjectType(key)}
                        className="h-auto p-4 flex flex-col items-center gap-2 hover-scale"
                      >
                        <span className="font-semibold">{type.name}</span>
                        <span className="text-sm opacity-70">From ${type.base}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Complexity & Timeline */}
            <AnimatedSection animation="slide-up" delay={0.2}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Complexity Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <Label>Project Complexity</Label>
                      <Badge variant="secondary">
                        {getComplexityLabel(complexity[0])}
                      </Badge>
                    </div>
                    <Slider
                      value={complexity}
                      onValueChange={setComplexity}
                      max={4}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>Simple</span>
                      <span>Standard</span>
                      <span>Complex</span>
                      <span>Premium</span>
                    </div>
                  </div>

                  {/* Timeline Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <Label>Timeline</Label>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {getTimelineLabel(timeline[0])}
                      </Badge>
                    </div>
                    <Slider
                      value={timeline}
                      onValueChange={setTimeline}
                      max={30}
                      min={3}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>3 days</span>
                      <span>1 week</span>
                      <span>2 weeks</span>
                      <span>1 month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Additional Services */}
            <AnimatedSection animation="slide-up" delay={0.3}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Additional Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(additionalOptions).map(([key, option]) => (
                      <div key={key} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-accent/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Switch
                            checked={additionalServices[key]}
                            onCheckedChange={(checked) => handleAdditionalServiceChange(key, checked)}
                          />
                          <div>
                            <Label className="font-medium">{option.name}</Label>
                          </div>
                        </div>
                        <Badge variant="outline">+${option.price}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Price Summary */}
          <AnimatedSection animation="scale-in" delay={0.4}>
            <Card className="glass-card border-0 shadow-xl sticky top-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Project Estimate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Total Price Display */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    ${totalPrice}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estimated project cost
                  </p>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="flex justify-between text-sm">
                    <span>Base Price ({projectTypes[projectType].name})</span>
                    <span>${projectTypes[projectType].base}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Complexity ({getComplexityLabel(complexity[0])})</span>
                    <span>{complexity[0] >= 3 ? '+' : ''}${Math.round(projectTypes[projectType].base * (complexity[0] * 0.3 - 0.3))}</span>
                  </div>
                  {timeline[0] > 14 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Timeline Discount</span>
                      <span>-10%</span>
                    </div>
                  )}
                  {Object.entries(additionalServices).map(([key, enabled]) => (
                    enabled && (
                      <div key={key} className="flex justify-between text-sm">
                        <span>{additionalOptions[key].name}</span>
                        <span>+${additionalOptions[key].price}</span>
                      </div>
                    )
                  ))}
                </div>

                {/* Features Included */}
                <div className="space-y-2 pt-4 border-t border-border/50">
                  <h4 className="font-semibold text-sm flex items-center">
                    <Star className="w-4 h-4 mr-2 text-primary" />
                    Included Features
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                      Unlimited revisions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                      Source files included
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                      Commercial license
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                      30-day support
                    </li>
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <Button size="lg" className="w-full hover-scale">
                    Get Started - Order Now
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Request Custom Quote
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  * Final pricing may vary based on project requirements
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};