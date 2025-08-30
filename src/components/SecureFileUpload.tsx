
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X, Download, FileIcon } from 'lucide-react';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useSecureDownload } from '@/hooks/useSecureDownload';
import { validateFileUpload } from '@/utils/security';
import { toast } from 'sonner';

interface SecureFileUploadProps {
  onFileUploaded?: (url: string) => void;
  multiple?: boolean;
  maxFiles?: number;
}

export const SecureFileUpload = ({ 
  onFileUploaded, 
  multiple = false, 
  maxFiles = 5 
}: SecureFileUploadProps) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<Array<{
    name: string;
    url: string;
    path: string;
  }>>([]);
  
  const { uploadFile, uploading } = useFileUpload();
  const { downloadFile, downloading } = useSecureDownload();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    for (const file of acceptedFiles.slice(0, maxFiles)) {
      // Validate file before upload
      const validation = validateFileUpload(file);
      if (!validation.isValid) {
        toast.error(`${file.name}: ${validation.error}`);
        continue;
      }

      setUploadProgress(0);
      
      try {
        const url = await uploadFile(file);
        if (url) {
          const filePath = url.split('/').pop();
          const newFile = {
            name: file.name,
            url,
            path: filePath || ''
          };
          
          setUploadedFiles(prev => [...prev, newFile]);
          onFileUploaded?.(url);
          setUploadProgress(100);
        }
      } catch (error) {
        toast.error(`Failed to upload ${file.name}`);
      }
    }
  }, [uploadFile, onFileUploaded, maxFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    maxFiles,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
      'application/pdf': ['.pdf'],
      'application/zip': ['.zip'],
      'application/x-zip-compressed': ['.zip']
    }
  });

  const handleSecureDownload = async (file: { name: string; path: string }) => {
    await downloadFile(file.path, file.name);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive
                ? 'border-primary bg-primary/10'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-lg font-medium mb-2">
              {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
            </p>
            <p className="text-gray-500 mb-4">
              or click to select files
            </p>
            <p className="text-sm text-gray-400">
              Supports: Images, PDF, ZIP files (Max 10MB each)
            </p>
          </div>

          {uploading && (
            <div className="mt-4">
              <Progress value={uploadProgress} className="w-full" />
              <p className="text-sm text-gray-500 mt-2">
                Uploading... {uploadProgress}%
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {uploadedFiles.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Uploaded Files</h3>
            <div className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <FileIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm font-medium">{file.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSecureDownload(file)}
                      disabled={downloading}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
