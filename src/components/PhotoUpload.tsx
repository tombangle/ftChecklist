import React, { useState, useRef } from 'react';

interface PhotoUploadProps {
  photos: string[];
  onPhotosChange: (photos: string[]) => void;
  maxPhotos?: number;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ 
  photos, 
  onPhotosChange, 
  maxPhotos = 3 
}) => {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || photos.length >= maxPhotos) return;

    setUploading(true);
    const newPhotos: string[] = [];

    for (let i = 0; i < Math.min(files.length, maxPhotos - photos.length); i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newPhotos.push(e.target.result as string);
            if (newPhotos.length === Math.min(files.length, maxPhotos - photos.length)) {
              onPhotosChange([...photos, ...newPhotos]);
              setUploading(false);
            }
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const removePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    onPhotosChange(updatedPhotos);
  };

  return (
    <div className="mt-2">
      {photos.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mb-2">
          {photos.map((photo, index) => (
            <div key={index} className="relative">
              <img 
                src={photo} 
                alt={`Photo ${index + 1}`}
                className="w-full h-20 object-cover rounded border"
              />
              <button
                onClick={() => removePhoto(index)}
                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      
      {photos.length < maxPhotos && (
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>{uploading ? 'Uploading...' : 'Add Photo'}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;