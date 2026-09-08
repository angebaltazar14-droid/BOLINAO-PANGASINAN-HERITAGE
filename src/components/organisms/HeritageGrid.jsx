import React, { useState } from 'react';
import HeritageCard from '../molecules/HeritageCard';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';
import '../../styles/colors.css';

/**
 * Heritage Grid Organism Component
 * 
 * Usage Context:
 * Displays a responsive collection of heritage site cards, typically used
 * on the homepage and listing pages.
 * 
 * Responsive Logic:
 * - Mobile: 1 column
 * - Tablet: 2 columns  
 * - Desktop: 3-4 columns
 * - Grid gap scales with screen size
 */
const HeritageGrid = ({ 
  heritageSites = [], 
  title = 'Explore Heritage Sites',
  subtitle,
  initialCount = 6,
  loadMoreCount = 3,
  showLoadMore = true,
  className = '',
  onSiteClick
}) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  
  const visibleSites = heritageSites.slice(0, visibleCount);
  const hasMore = visibleCount < heritageSites.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + loadMoreCount, heritageSites.length));
  };

  const handleSiteClick = (id) => {
    if (onSiteClick) onSiteClick(id);
  };

  if (heritageSites.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
        <Icon name="search" size="xl" className="text-gray-300 mx-auto mb-4" />
        <Typography variant="h3" className="text-gray-400">
          No heritage sites found
        </Typography>
        <Typography variant="body" className="text-gray-400 mt-2">
          Try adjusting your search filters
        </Typography>
      </div>
    );
  }

  return (
    <section className={`${className}`}>
      {/* Header */}
      <div className="mb-6 text-center">
        {title && (
          <Typography variant="h2" className="mb-2">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body" className="text-gray-500">
            {subtitle}
          </Typography>
        )}
        {heritageSites.length > 0 && (
          <Typography variant="small" className="text-gray-400 mt-2">
            Showing {visibleSites.length} of {heritageSites.length} sites
          </Typography>
        )}
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {visibleSites.map((site) => (
          <HeritageCard
            key={site.id}
            id={site.id}
            name={site.name}
            location={site.location}
            image={site.image}
            rating={site.rating}
            reviews={site.reviews}
            description={site.description}
            category={site.category}
            featured={site.featured}
            onClick={handleSiteClick}
          />
        ))}
      </div>
      
      {/* Load More */}
      {showLoadMore && hasMore && (
        <div className="text-center mt-8">
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleLoadMore}
          >
            <Icon name="plus" size="sm" className="mr-2" />
            Load More ({heritageSites.length - visibleCount} remaining)
          </Button>
        </div>
      )}
    </section>
  );
};

export default HeritageGrid;