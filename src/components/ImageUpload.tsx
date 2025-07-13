
import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageUploadProps {
  onImageUpload?: (file: File) => void;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload,
  className = ""
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
        if (onImageUpload) {
          onImageUpload(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedImage(null);
  };

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-300 ${className}`}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />
      
      {uploadedImage ? (
        <div className="relative w-full h-full">
          <img 
            src={uploadedImage} 
            alt="Uploaded" 
            className="w-full h-full object-cover rounded-xl"
          />
          <Button
            onClick={handleRemoveImage}
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 w-8 h-8"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        <div 
          className={`
            w-full h-full border-2 border-dashed rounded-xl
            flex flex-col items-center justify-center gap-4
            transition-colors duration-300
            ${isDragging 
              ? 'border-brown-700 bg-brown-100' 
              : 'border-brown-300 bg-brown-50 hover:border-brown-500 hover:bg-brown-100'
            }
          `}
        >
          <div className="p-4 bg-brown-200 rounded-full">
            <Upload className="w-8 h-8 text-brown-700" />
          </div>
          <div className="text-center">
            <p className="text-brown-800 font-medium mb-1">Clique para fazer upload</p>
            <p className="text-brown-600 text-sm">ou arraste e solte uma imagem</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
