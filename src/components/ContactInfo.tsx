
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { VisitorProfileForm } from '@/components/VisitorProfileForm';
import { ParallaxSection } from '@/components/ParallaxSection';
import { AnimatedSection } from '@/components/AnimatedSection';

const contactInfo = [
  {
    label: "Email",
    value: "magalasdesigner@gmail.com",
    link: "mailto:magalasdesigner@gmail.com"
  },
  {
    label: "Instagram",
    value: "@kelvinmagalas",
    link: "https://www.instagram.com/kelvinmagalas"
  },
  {
    label: "YouTube",
    value: "@KelvinMagalas",
    link: "https://www.youtube.com/@KelvinMagalas"
  },
  {
    label: "WhatsApp",
    value: "+255 698 109 585",
    link: "https://wa.me/255698109585"
  }
];

export const ContactInfo = () => {
  return (
    <ParallaxSection speed={0.2} backgroundElements>
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slide-left" className="relative z-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Send a Message
                </h2>
                <VisitorProfileForm />
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="slide-right" delay={0.2} className="relative z-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <AnimatedSection key={index} animation="stagger" delay={index * 0.1}>
                      <Card className="hover-lift border-0 shadow-md bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm group">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-muted-foreground text-sm">{info.label}</div>
                              <div className="text-lg font-medium">{info.value}</div>
                            </div>
                            {info.link && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => window.open(info.link, '_blank')}
                                className="hover-scale bg-primary/10 border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 group-hover:scale-105"
                              >
                                {info.label === 'Email' ? 'Send Email' : 
                                 info.label === 'Instagram' ? 'Follow' :
                                 info.label === 'YouTube' ? 'Subscribe' : 
                                 info.label === 'WhatsApp' ? 'Chat' : 'Visit'}
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection animation="fade-in" delay={0.8}>
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-xl border border-blue-100">
                    <h3 className="font-semibold mb-2 text-blue-900">Quick Response</h3>
                    <p className="text-sm text-blue-700">
                      I typically respond to messages within 24 hours. For urgent projects, 
                      feel free to reach out on WhatsApp for faster communication.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
};
