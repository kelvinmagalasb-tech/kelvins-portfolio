
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { HelpCircle, MessageSquare, AlertCircle } from 'lucide-react';

const helpTicketSchema = z.object({
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  visitor_email: z.string().email().optional()
});

type HelpTicketForm = z.infer<typeof helpTicketSchema>;

export const HelpCenter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
  
  const form = useForm<HelpTicketForm>({
    resolver: zodResolver(helpTicketSchema),
    defaultValues: {
      subject: '',
      message: '',
      priority: 'medium',
      visitor_email: ''
    }
  });

  const onSubmit = async (data: HelpTicketForm) => {
    setIsSubmitting(true);
    try {
      const ticketData = {
        subject: data.subject,
        message: data.message,
        priority: data.priority,
        user_id: user?.id || null,
        visitor_email: user ? null : data.visitor_email || null
      };

      const { error } = await supabase
        .from('help_tickets')
        .insert(ticketData);

      if (error) throw error;

      toast.success('Support ticket created successfully! We\'ll get back to you soon.');
      form.reset();
    } catch (error) {
      console.error('Error creating help ticket:', error);
      toast.error('Failed to create support ticket. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <HelpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
        <h2 className="text-2xl font-bold mb-2">Help Center</h2>
        <p className="text-muted-foreground">
          Need help with your design project? Submit a support ticket and we'll assist you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <MessageSquare className="mx-auto h-8 w-8 text-blue-500 mb-2" />
            <h3 className="font-semibold mb-1">General Inquiries</h3>
            <p className="text-sm text-muted-foreground">Questions about our services</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <AlertCircle className="mx-auto h-8 w-8 text-orange-500 mb-2" />
            <h3 className="font-semibold mb-1">Technical Support</h3>
            <p className="text-sm text-muted-foreground">Issues with orders or files</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <HelpCircle className="mx-auto h-8 w-8 text-green-500 mb-2" />
            <h3 className="font-semibold mb-1">Design Consultation</h3>
            <p className="text-sm text-muted-foreground">Get design advice</p>
          </CardContent>
        </Card>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Submit Support Ticket</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {!user && (
                <FormField
                  control={form.control}
                  name="visitor_email"
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
              )}
              
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="low">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">Low</Badge>
                            <span>General questions</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="medium">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">Medium</Badge>
                            <span>Standard support</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="high">
                          <div className="flex items-center gap-2">
                            <Badge variant="destructive">High</Badge>
                            <span>Urgent issues</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="urgent">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-red-600">Urgent</Badge>
                            <span>Critical problems</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Brief description of your issue" {...field} />
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
                        placeholder="Please provide detailed information about your issue or question..." 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
