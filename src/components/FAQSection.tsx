import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedSection } from './AnimatedSection';

const faqs = [
  {
    question: "How long does it take to complete a design project?",
    answer: "Our typical turnaround time is 2-5 business days depending on the complexity of the project. Simple designs like business cards can be completed in 24-48 hours, while complex branding projects may take up to a week. We also offer rush delivery options for urgent projects."
  },
  {
    question: "What file formats do you provide?",
    answer: "We provide high-resolution files in multiple formats including PNG, JPEG, PDF, and Adobe Illustrator (AI) source files. For print projects, we ensure all files are print-ready with proper bleed and color specifications. Digital projects come optimized for web use."
  },
  {
    question: "How many revisions are included?",
    answer: "Our Basic package includes 2 revisions, Professional includes 5 revisions, and Premium includes unlimited revisions. Additional revisions beyond the package limit can be requested for a small fee. We want to ensure you're completely satisfied with the final design."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 100% satisfaction guarantee. If you're not happy with the initial concepts, we'll provide a full refund within the first 3 days of project start. After approval of concepts and during the revision phase, refunds are considered on a case-by-case basis."
  },
  {
    question: "Can I use the designs for commercial purposes?",
    answer: "Yes! All our design packages include commercial usage rights. You own the final designs and can use them for any business or commercial purpose. Our Premium package also includes extended licensing for resale and distribution rights."
  },
  {
    question: "Do you provide the source files?",
    answer: "Professional and Premium packages include source files (AI, PSD, etc.). Basic package provides high-resolution final files. Source files allow you to make future edits and modifications to your designs using professional design software."
  },
  {
    question: "What if I need help with printing?",
    answer: "We provide print-ready files with proper specifications and can recommend trusted printing partners. Our Premium package includes consultation on paper types, finishes, and printing processes to ensure the best results for your project."
  },
  {
    question: "How do I get started with a project?",
    answer: "Simply browse our services, click 'Order Design' on any project that interests you, fill out the brief form, and we'll contact you within 24 hours to discuss details and start your project. Payment is required before work begins."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Got questions? We've got answers. Here are the most common questions our clients ask.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="scale-in" delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-in" delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@yourdesignstudio.com" 
                className="text-primary hover:underline font-medium"
              >
                info@yourdesignstudio.com
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a 
                href="tel:+1234567890" 
                className="text-primary hover:underline font-medium"
              >
                +1 (234) 567-8900
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;