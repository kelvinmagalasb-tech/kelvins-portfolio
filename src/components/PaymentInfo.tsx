
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ParallaxSection } from '@/components/ParallaxSection';
import { AnimatedSection } from '@/components/AnimatedSection';

export const PaymentInfo = () => {
  return (
    <ParallaxSection speed={0.3} backgroundElements>
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Payment Information
              </h2>
              <p className="text-xl text-muted-foreground">
                Secure and convenient payment options
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="slide-left" delay={0.2}>
                <Card className="hover-lift shadow-xl border-0 bg-gradient-to-br from-white to-green-50 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl font-bold text-white">💳</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Mobile Money</h3>
                    <div className="space-y-2">
                      <div className="font-medium text-gray-600">M-Pesa & Tigo Pesa</div>
                      <div className="text-sm text-muted-foreground bg-green-50 p-3 rounded-lg">
                        Contact us for mobile money payment details
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={0.4}>
                <Card className="hover-lift shadow-xl border-0 bg-gradient-to-br from-white to-blue-50 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl font-bold text-white">💰</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Cash Payment</h3>
                    <div className="space-y-2">
                      <div className="font-medium text-gray-600">In-Person Payment</div>
                      <div className="text-sm text-muted-foreground bg-blue-50 p-3 rounded-lg">
                        Cash payments accepted for local clients in Dar es Salaam
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="scale-in" delay={0.6}>
              <div className="mt-12 p-8 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-2xl text-center border border-green-100 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Payment Terms</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="font-semibold text-green-600">50% Deposit</div>
                    <div className="text-gray-600">Required to start</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="font-semibold text-blue-600">Final Payment</div>
                    <div className="text-gray-600">Upon completion</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="font-semibold text-purple-600">Currency</div>
                    <div className="text-gray-600">Tanzanian Shillings</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="font-semibold text-orange-600">Revisions</div>
                    <div className="text-gray-600">Included in price</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
};
