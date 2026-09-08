import React from 'react';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';
import '../../styles/colors.css';

/**
 * Navigation Item Molecule Component
 * 
 * Usage Context:
 * Used in the header and footer to provide site-wide navigation links.
 * 
 * Responsive Logic:
 * - Mobile: Stacked vertically with full width
 * - Tablet/Desktop: Horizontal layout with spacing
 */
const NavigationItem = ({ 
  href = '#', 
  icon, 
  label, 
  active = false,
  external = false,
  className = '',
  onClick,
  ...props 
}) => {
  const Tag = external ? 'a' : 'a';
  const linkProps = external 
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href };

  return (
    <Tag
      {...linkProps}
      onClick={onClick}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
        ${active 
          ? 'bg-blue-50 text-blue-700 font-semibold' 
          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
        }
        ${className}
      `}
      aria-current={active ? 'page' : undefined}
      {...props}
    >
      {icon && <Icon name={icon} size="sm" />}
      <Typography variant="body" className="font-medium">
        {label}
      </Typography>
    </Tag>
  );
};

export default NavigationItem;