import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: "Ester Michael",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image: "/lovable-uploads/887aa213-039e-48af-902e-64d0fccaa854.jpg",
    rating: 5,
    text: "The design quality exceeded our expectations. Professional, creative, and delivered on time. Our brand image has significantly improved."
  },
  {
    id: 2,
    name: "Kelvin Natalis",
    role: "CEO",
    company: "Digital Solutions",
    image: "/lovable-uploads/5659ebec-1220-4e8a-8001-5242f0105af7.jpg",
    rating: 5,
    text: "Outstanding web development service! The team understood our vision perfectly and created a stunning, responsive website."
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Event Coordinator",
    company: "Celebrations Ltd",
    image: "/lovable-uploads/06d71b18-6f20-48e1-a46c-65b2c18f89b3.jpg",
    rating: 5,
    text: "The invitation designs were absolutely beautiful. Every detail was perfect, and our clients loved them. Highly recommended!"
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Restaurant Owner",
    company: "Bella Vista",
    image: "/lovable-uploads/cd259e4a-9c1d-475a-a60d-f0ed4401fac5.jpg",
    rating: 5,
    text: "Professional poster designs that really caught our customers' attention. Great communication and fast delivery."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.id}
              animation="scale-in"
              delay={index * 0.1}
            >
              <Card className="h-full hover:shadow-lg transition-shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;