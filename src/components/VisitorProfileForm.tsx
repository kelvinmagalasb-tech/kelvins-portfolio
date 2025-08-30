
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { sanitizeInput, rateLimiter } from '@/utils/security';

const visitorProfileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Please enter a valid email').max(255, 'Email too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message too long')
});

type VisitorProfileForm = z.infer<typeof visitorProfileSchema>;

export const VisitorProfileForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<VisitorProfileForm>({
    resolver: zodResolver(visitorProfileSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data: VisitorProfileForm) => {
    // Rate limiting check
    const userKey = `visitor_form_${data.email}`;
    if (!rateLimiter.isAllowed(userKey, 3, 300000)) { // 3 attempts per 5 minutes
      toast.error('Too many submissions. Please wait a few minutes before trying again.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        message: sanitizeInput(data.message)
      };

      // Log data before submission
      console.log('Submitting data to Supabase:', sanitizedData);

      const { data: responseData, error } = await supabase
        .from('visitor_profiles')
        .insert(sanitizedData)
        .select();

      if (error) {
        console.error('Supabase error details:', error);
        throw error;
      }

      console.log('Submission successful:', responseData);
      toast.success('Thank you for your message! We\'ll get back to you soon.');
      form.reset();
      rateLimiter.reset(userKey); // Reset on successful submission
    } catch (error) {
      console.error('Error submitting visitor profile:', error);
      toast.error('Failed to submit message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your design needs..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
