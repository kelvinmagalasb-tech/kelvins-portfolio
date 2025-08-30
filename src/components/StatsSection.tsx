import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { AnimatedSection } from './AnimatedSection';
import { Users, Award, Download, Star } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: 500,
    label: "Happy Clients",
    suffix: "+",
    color: "text-blue-600"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 1200,
    label: "Projects Completed",
    suffix: "+",
    color: "text-green-600"
  },
  {
    icon: <Download className="w-8 h-8" />,
    value: 5000,
    label: "Downloads",
    suffix: "+",
    color: "text-purple-600"
  },
  {
    icon: <Star className="w-8 h-8" />,
    value: 98,
    label: "Satisfaction Rate",
    suffix: "%",
    color: "text-yellow-600"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-600 to-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 border border-white rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 border border-white rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Businesses Worldwide</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our track record speaks for itself. Here's what we've achieved together with our amazing clients.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 0.1}
              className="text-center"
            >
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-white mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    duration={2000}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;