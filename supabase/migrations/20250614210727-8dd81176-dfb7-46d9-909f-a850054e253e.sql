
-- Create a storage bucket for user uploads (if it doesn't exist)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('user-uploads', 'user-uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Create RLS policies for the user-uploads bucket (only if they don't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Users can upload files to user-uploads') THEN
        CREATE POLICY "Users can upload files to user-uploads" ON storage.objects
        FOR INSERT TO authenticated
        WITH CHECK (bucket_id = 'user-uploads');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Public can view user-uploads files') THEN
        CREATE POLICY "Public can view user-uploads files" ON storage.objects
        FOR SELECT TO public
        USING (bucket_id = 'user-uploads');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Users can update user-uploads files') THEN
        CREATE POLICY "Users can update user-uploads files" ON storage.objects
        FOR UPDATE TO authenticated
        USING (bucket_id = 'user-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Users can delete user-uploads files') THEN
        CREATE POLICY "Users can delete user-uploads files" ON storage.objects
        FOR DELETE TO authenticated
        USING (bucket_id = 'user-uploads' AND auth.uid()::text = (storage.foldername(name))[1]);
    END IF;
END $$;

-- Enhance the profiles table with more fields
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS username TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS full_name TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS avatar_url TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS bio TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS website TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Create a visitor_profiles table for non-authenticated users
CREATE TABLE IF NOT EXISTS public.visitor_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT,
  name TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Enable RLS on visitor_profiles
ALTER TABLE public.visitor_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for visitor_profiles (only if they don't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'visitor_profiles' AND policyname = 'Anyone can create visitor profiles') THEN
        CREATE POLICY "Anyone can create visitor profiles" 
          ON public.visitor_profiles 
          FOR INSERT 
          TO anon, authenticated 
          WITH CHECK (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'visitor_profiles' AND policyname = 'Authenticated users can view visitor profiles') THEN
        CREATE POLICY "Authenticated users can view visitor profiles" 
          ON public.visitor_profiles 
          FOR SELECT 
          TO authenticated 
          USING (true);
    END IF;
END $$;

-- Create a help_center table for support tickets
CREATE TABLE IF NOT EXISTS public.help_tickets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  visitor_email TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Enable RLS on help_tickets
ALTER TABLE public.help_tickets ENABLE ROW LEVEL SECURITY;

-- Create policies for help_tickets (only if they don't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'help_tickets' AND policyname = 'Users can create help tickets') THEN
        CREATE POLICY "Users can create help tickets" 
          ON public.help_tickets 
          FOR INSERT 
          TO anon, authenticated 
          WITH CHECK (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'help_tickets' AND policyname = 'Users can view their own tickets') THEN
        CREATE POLICY "Users can view their own tickets" 
          ON public.help_tickets 
          FOR SELECT 
          TO authenticated 
          USING (auth.uid() = user_id);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'help_tickets' AND policyname = 'Authenticated users can view all tickets') THEN
        CREATE POLICY "Authenticated users can view all tickets" 
          ON public.help_tickets 
          FOR SELECT 
          TO authenticated 
          USING (true);
    END IF;
END $$;

-- Update the handle_new_user function to include new profile fields
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, username, full_name)
  VALUES (
    new.id, 
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data ->> 'full_name', new.email)
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
