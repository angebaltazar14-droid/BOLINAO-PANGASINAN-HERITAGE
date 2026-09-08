import React from 'react';
import Image from '../atoms/Image';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';


/**
 * Heritage Card Molecule Component
 * 
 * Usage Context:
 * The Heritage Card is used exclusively for displaying tourist site previews
 * in responsive grids across all listing pages.
 * 
 * Responsive Logic:
 * - Mobile: Full width, image at top, content below
 * - Tablet: 2 columns, consistent height with flexbox
 * - Desktop: 3-4 columns, hover effects appear
 */
const HeritageCard = ({ 
  id, 
  name, 
  location, 
  image, 
  rating = 0, 
  reviews = 0,
  description,
  category,
  featured = false,
  className = '',
  onClick
}) => {
  const handleClick = () => {
    if (onClick) onClick(id);
  };

  return (
    <article 
      className={`
        bg-white rounded-xl shadow-md overflow-hidden 
        hover:shadow-xl transition-all duration-300 
        border border-gray-100
        cursor-pointer
        ${className}
      `}
      onClick={handleClick}
      role="article"
      aria-label={`${name} - ${location}`}
    >
      {/* Image Section */}
      <div className="relative">
        <Image 
          src={image || '/images/placeholder.jpg'} 
          alt={name} 
          width={400} 
          height={300}
          aspectRatio="4/3"
        />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            <Icon name="star" size="xs" className="mr-1 inline" />
            Featured
          </div>
        )}
        
        {/* Rating Badge */}
        {rating > 0 && (
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Icon name="star" size="xs" className="text-yellow-400" />
            <span>{rating.toFixed(1)}</span>
            <span className="opacity-70 text-[10px]">({reviews})</span>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between mb-1">
          <Typography variant="h3" className="text-lg font-bold line-clamp-1">
            {name}
          </Typography>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <Icon name="location" size="sm" className="mr-1 flex-shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        {category && (
          <div className="inline-block bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium mb-2">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
        )}
        
        <Typography variant="body" className="text-sm text-gray-600 mb-4 line-clamp-2">
          {description}
        </Typography>
        
        <Button variant="primary" size="sm" fullWidth>
          Learn More <Icon name="arrowRight" size="sm" className="ml-1" />
        </Button>
      </div>
    </article>
  );
};

export default HeritageCard;