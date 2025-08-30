
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useFileUpload } from '@/hooks/useFileUpload';
import { Upload, File, X } from 'lucide-react';
import { toast } from 'sonner';

interface FileUploadProps {
  onFileUploaded?: (url: string) => void;
  acceptedFileTypes?: Record<string, string[]>;
  maxFileSize?: number;
  multiple?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileUploaded,
  acceptedFileTypes = {
    'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
    'application/pdf': ['.pdf'],
    'application/msword': ['.doc'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
  },
  maxFileSize = 10 * 1024 * 1024, // 10MB
  multiple = false
}) => {
  const { uploadFile, uploading } = useFileUpload();
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    for (const file of acceptedFiles) {
      if (file.size > maxFileSize) {
        toast.error(`File ${file.name} is too large. Maximum size is ${maxFileSize / (1024 * 1024)}MB`);
        continue;
      }

      const url = await uploadFile(file);
      if (url) {
        setUploadedFiles(prev => [...prev, url]);
        onFileUploaded?.(url);
      }
    }
  }, [uploadFile, maxFileSize, onFileUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    multiple,
    disabled: uploading
  });

  const removeFile = (urlToRemove: string) => {
    setUploadedFiles(prev => prev.filter(url => url !== urlToRemove));
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive 
                ? 'border-primary bg-primary/5' 
                : 'border-gray-300 hover:border-primary hover:bg-gray-50'
            } ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            {isDragActive ? (
              <p className="text-lg font-medium">Drop the files here...</p>
            ) : (
              <div>
                <p className="text-lg font-medium mb-2">
                  Drag & drop files here, or click to select
                </p>
                <p className="text-sm text-gray-500">
                  Supported formats: Images, PDF, DOC, DOCX (max {maxFileSize / (1024 * 1024)}MB)
                </p>
              </div>
            )}
          </div>
          
          {uploading && (
            <div className="mt-4">
              <Progress value={75} className="w-full" />
              <p className="text-sm text-center mt-2">Uploading...</p>
            </div>
          )}
        </CardContent>
      </Card>

      {uploadedFiles.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">Uploaded Files</h3>
            <div className="space-y-2">
              {uploadedFiles.map((url, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4" />
                    <span className="text-sm truncate">{url.split('/').pop()}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(url)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
