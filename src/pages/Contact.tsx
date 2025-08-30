
import React from 'react';
import { ContactHero } from '@/components/ContactHero';
import { ContactInfo } from '@/components/ContactInfo';
import { ServicePricing } from '@/components/ServicePricing';
import { PaymentInfo } from '@/components/PaymentInfo';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <ContactHero />
      <ContactInfo />
      <ServicePricing />
      <PaymentInfo />
    </div>
  );
};

export default Contact;
