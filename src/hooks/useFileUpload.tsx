
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

export const useFileUpload = () => {
  const [uploading, setUploading] = useState(false);
  const { user } = useAuth();

  const uploadFile = async (file: File): Promise<string | null> => {
    if (!user) {
      toast.error('You must be logged in to upload files');
      return null;
    }

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from('user-uploads')
        .upload(fileName, file);

      if (error) {
        throw error;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('user-uploads')
        .getPublicUrl(data.path);

      // Save file metadata to user_files table
      await supabase.from('user_files').insert({
        user_id: user.id,
        file_name: file.name,
        file_url: urlData.publicUrl,
        file_type: file.type,
        file_size: file.size
      });

      toast.success('File uploaded successfully!');
      return urlData.publicUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file');
      return null;
    } finally {
      setUploading(false);
    }
  };

  return { uploadFile, uploading };
};
