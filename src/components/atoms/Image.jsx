import React, { useState } from 'react';
import '../../styles/colors.css';

/**
 * Image Atom Component
 * 
 * Usage Context:
 * Used throughout the application to showcase heritage sites, provide visual context,
 * and enhance user engagement.
 * 
 * Responsive Logic:
 * - Mobile: 4:3 aspect ratio, 100% width
 * - Tablet: 16:9 aspect ratio, 100% width
 * - Desktop: 16:9 aspect ratio, max 1200px width
 * - Lazy loading for performance
 */
const Image = ({ 
  src, 
  alt, 
  width = 800, 
  height = 600,
  aspectRatio = '16/9',
  className = '',
  objectFit = 'cover',
  lazy = true,
  placeholder = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Aspect ratios
  const aspectRatios = {
    '1/1': 'aspect-square',
    '4/3': 'aspect-4/3',
    '16/9': 'aspect-16/9',
    '21/9': 'aspect-21/9'
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // If image fails to load, show placeholder
  if (hasError) {
    return (
      <div 
        className={`
          ${aspectRatios[aspectRatio] || 'aspect-16/9'}
          bg-gray-200 rounded-lg flex items-center justify-center
          ${className}
        `}
        role="img"
        aria-label={alt}
      >
        <span className="text-gray-400 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div 
      className={`
        relative overflow-hidden rounded-lg bg-gray-100
        ${aspectRatios[aspectRatio] || 'aspect-16/9'}
        ${className}
      `}
    >
      {placeholder && !isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}
      
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        className={`
          w-full h-full transition-opacity duration-300
          ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        {...props}
      />
    </div>
  );
};

export default Image;