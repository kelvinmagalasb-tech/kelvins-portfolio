
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useSecureDownload = () => {
  const [downloading, setDownloading] = useState(false);

  const generateSecureDownloadUrl = async (filePath: string, bucketName: string = 'user-uploads'): Promise<string | null> => {
    try {
      setDownloading(true);
      
      const { data, error } = await supabase.storage
        .from(bucketName)
        .createSignedUrl(filePath, 3600); // 1 hour expiry

      if (error) {
        console.error('Error generating signed URL:', error);
        toast.error('Failed to generate download link');
        return null;
      }

      return data.signedUrl;
    } catch (error) {
      console.error('Error in generateSecureDownloadUrl:', error);
      toast.error('Failed to generate download link');
      return null;
    } finally {
      setDownloading(false);
    }
  };

  const downloadFile = async (filePath: string, fileName: string, bucketName: string = 'user-uploads') => {
    try {
      setDownloading(true);
      
      const signedUrl = await generateSecureDownloadUrl(filePath, bucketName);
      if (!signedUrl) {
        return;
      }

      // Create a temporary link and trigger download
      const link = document.createElement('a');
      link.href = signedUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Download started');
    } catch (error) {
      console.error('Error downloading file:', error);
      toast.error('Failed to download file');
    } finally {
      setDownloading(false);
    }
  };

  return { generateSecureDownloadUrl, downloadFile, downloading };
};
