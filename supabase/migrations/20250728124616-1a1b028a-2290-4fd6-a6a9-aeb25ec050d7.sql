-- Create orders table for design orders
CREATE TABLE public.design_orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  design_name TEXT NOT NULL,
  design_category TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  special_requests TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.design_orders ENABLE ROW LEVEL SECURITY;

-- Create policies for design orders
CREATE POLICY "Anyone can create design orders" 
ON public.design_orders 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admin can view all orders" 
ON public.design_orders 
FOR SELECT 
USING (true);

CREATE POLICY "Admin can update orders" 
ON public.design_orders 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_design_orders_updated_at
BEFORE UPDATE ON public.design_orders
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();