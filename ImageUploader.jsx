import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CameraIcon, XMarkIcon } from '@heroicons/react/24/outline';

function ImageUploader({ onUpload, maxImages = 5 }) {
  const [images, setImages] = React.useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    
    const updatedImages = [...images, ...newImages].slice(0, maxImages);
    setImages(updatedImages);
    onUpload(updatedImages.map(img => img.file));
  }, [images, maxImages, onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: maxImages,
  });

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onUpload(updatedImages.map(img => img.file));
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-primary bg-orange-50' : 'border-gray-300 hover:border-primary'}`}
      >
        <input {...getInputProps()} />
        <CameraIcon className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag & drop images here, or click to select files
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Up to {maxImages} images (JPEG, PNG)
        </p>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.preview}
                alt={`Preview ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
              >
                <XMarkIcon className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageUploader;