import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface OrderData {
  design_name: string;
  design_category: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  special_requests?: string;
}

export const useOrderDesign = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const submitOrder = async (orderData: OrderData) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('design_orders')
        .insert([orderData])
        .select()
        .single();

      if (error) {
        throw error;
      }

      toast({
        title: "Order Submitted Successfully! 🎉",
        description: "We've received your order and will contact you within 24 hours to discuss details.",
      });

      return { data, error: null };
    } catch (error: any) {
      console.error('Error submitting order:', error);
      toast({
        title: "Order Failed",
        description: "There was an issue submitting your order. Please try again or contact us directly.",
        variant: "destructive",
      });
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  return {
    submitOrder,
    loading,
  };
};