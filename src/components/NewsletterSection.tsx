import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Gift, Zap, Users } from 'lucide-react';
import { toast } from 'sonner';
import { AnimatedSection } from './AnimatedSection';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    
    // Simulate newsletter signup
    setTimeout(() => {
      toast.success('Successfully subscribed! Check your email for a welcome message.');
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-600 to-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Stay Updated with Our Latest Designs</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Get exclusive templates, design tips, and special offers delivered straight to your inbox.
              </p>
            </div>
          </AnimatedSection>

          {/* Benefits */}
          <AnimatedSection animation="scale-in" delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Gift className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-semibold mb-2">Free Templates</h3>
                  <p className="text-sm text-white/80">Monthly free design templates exclusive to subscribers</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-semibold mb-2">Design Tips</h3>
                  <p className="text-sm text-white/80">Pro tips and tutorials to improve your design skills</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-semibold mb-2">Special Offers</h3>
                  <p className="text-sm text-white/80">Exclusive discounts and early access to new services</p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Signup Form */}
          <AnimatedSection animation="scale-in" delay={0.4}>
            <Card className="bg-white/10 border-white/20 max-w-md mx-auto">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                  >
                    {loading ? 'Subscribing...' : 'Subscribe Now'}
                  </Button>
                </form>
                <p className="text-xs text-white/70 mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;