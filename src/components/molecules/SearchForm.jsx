import React, { useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';
import { categories, locations } from '../../data/heritageData';
import '../../styles/colors.css';

/**
 * Search Form Molecule Component
 * 
 * Usage Context:
 * Used on the homepage and heritage listing pages to filter heritage sites
 * by name, location, or category.
 * 
 * Responsive Logic:
 * - Mobile: Stacked layout, full width elements
 * - Tablet: Inline layout for filters, full width search
 * - Desktop: All elements inline
 */
const SearchForm = ({ onSearch, className = '', initialValues = {} }) => {
  const [query, setQuery] = useState(initialValues.query || '');
  const [location, setLocation] = useState(initialValues.location || '');
  const [category, setCategory] = useState(initialValues.category || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, location, category });
  };

  const handleReset = () => {
    setQuery('');
    setLocation('');
    setCategory('');
    onSearch({ query: '', location: '', category: '' });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`bg-white p-4 md:p-6 rounded-xl shadow-md border border-gray-100 ${className}`}
      role="search"
      aria-label="Search heritage sites"
    >
      <Typography variant="h4" className="mb-4">
        <Icon name="search" size="md" className="mr-2 text-blue-600" />
        Find Heritage Sites
      </Typography>
      
      <div className="space-y-3 md:space-y-0 md:flex md:gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="search" size="sm" className="text-gray-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name..."
            className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 hover:bg-white"
            aria-label="Search heritage sites by name"
          />
        </div>
        
        {/* Location Filter */}
        <div className="flex-1">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 hover:bg-white appearance-none"
            aria-label="Filter by location"
          >
            {locations.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* Category Filter */}
        <div className="flex-1">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 hover:bg-white appearance-none"
            aria-label="Filter by category"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-2 mt-3">
        <Button type="submit" variant="primary" fullWidth>
          <Icon name="search" size="sm" className="mr-2" />
          Search
        </Button>
        {(query || location || category) && (
          <Button type="button" variant="ghost" onClick={handleReset}>
            Clear
          </Button>
        )}
      </div>
    </form>
  );
};

export default SearchForm;