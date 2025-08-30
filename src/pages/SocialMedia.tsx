import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Users, TrendingUp, Calendar, BarChart } from 'lucide-react';

const SocialMedia = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Content Creation",
      description: "Engaging posts, stories, and multimedia content tailored for each social media platform",
      features: ["Post Design", "Video Content", "Story Templates", "Carousel Posts"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Content Planning",
      description: "Strategic content calendar and scheduling for consistent brand presence",
      features: ["Content Calendar", "Post Scheduling", "Campaign Planning", "Trend Analysis"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Strategy",
      description: "Data-driven strategies to increase followers, engagement, and brand awareness",
      features: ["Audience Analysis", "Hashtag Strategy", "Influencer Outreach", "Growth Hacking"]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and performance reports to track social media success",
      features: ["Performance Reports", "Engagement Metrics", "ROI Analysis", "Competitor Analysis"]
    }
  ];

  const platforms = [
    { name: "Facebook", icon: "📘", description: "Business pages and targeted advertising" },
    { name: "Instagram", icon: "📸", description: "Visual storytelling and brand aesthetics" },
    { name: "Twitter", icon: "🐦", description: "Real-time engagement and thought leadership" },
    { name: "LinkedIn", icon: "💼", description: "Professional networking and B2B marketing" },
    { name: "TikTok", icon: "🎵", description: "Creative video content and viral marketing" },
    { name: "YouTube", icon: "📺", description: "Long-form video content and tutorials" }
  ];

  const portfolioItems = [
    {
      title: "Brand Campaign",
      platform: "Instagram",
      metrics: "150% engagement increase",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Product Launch",
      platform: "Facebook",
      metrics: "50K+ reach in 7 days",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Viral Video",
      platform: "TikTok",
      metrics: "1M+ views",
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Media Management</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete social media strategy and management to grow your brand presence, 
            engage your audience, and drive business results across all platforms.
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

        {/* Platforms Section */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Platforms We Manage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 0.1}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                    <p className="text-muted-foreground">{platform.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Portfolio Section */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 0.2}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">{item.platform}</Badge>
                      <span className="text-sm text-primary font-medium">{item.metrics}</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Strategy", description: "Analyze your brand and create a tailored social media strategy" },
              { step: "02", title: "Create", description: "Develop engaging content that resonates with your audience" },
              { step: "03", title: "Schedule", description: "Plan and schedule posts for optimal engagement times" },
              { step: "04", title: "Analyze", description: "Monitor performance and adjust strategy based on insights" }
            ].map((item, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 0.1}>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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

export default SocialMedia;