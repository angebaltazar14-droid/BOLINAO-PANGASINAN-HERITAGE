import React from 'react';
import '../../styles/colors.css';

/**
 * Typography Atom Component
 * 
 * Usage Context:
 * Defines the visual hierarchy for all text content across the application,
 * ensuring consistent readability and accessibility.
 * 
 * Responsive Logic:
 * - Font sizes scale with screen size (mobile → tablet → desktop)
 * - Line heights adjust for optimal readability
 */
const Typography = ({ 
  variant = 'body', 
  children, 
  className = '',
  color = 'primary',
  align = 'left',
  weight = 'normal',
  as: Component,
  ...props 
}) => {
  // Variant styles with responsive sizes
  const variants = {
    h1: {
      tag: 'h1',
      className: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold'
    },
    h2: {
      tag: 'h2',
      className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'
    },
    h3: {
      tag: 'h3',
      className: 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'
    },
    h4: {
      tag: 'h4',
      className: 'text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'
    },
    body: {
      tag: 'p',
      className: 'text-sm md:text-base leading-relaxed'
    },
    bodyLarge: {
      tag: 'p',
      className: 'text-base md:text-lg leading-relaxed'
    },
    small: {
      tag: 'p',
      className: 'text-xs md:text-sm text-gray-500'
    },
    caption: {
      tag: 'span',
      className: 'text-xs text-gray-400'
    },
    label: {
      tag: 'label',
      className: 'text-sm font-medium text-gray-700'
    }
  };

  // Color options
  const colors = {
    primary: 'text-gray-900',
    secondary: 'text-gray-700',
    muted: 'text-gray-500',
    white: 'text-white',
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    gold: 'text-amber-600'
  };

  // Text alignment
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  // Font weights
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  };

  const variantConfig = variants[variant] || variants.body;
  const Tag = Component || variantConfig.tag;

  return (
    <Tag
      className={`
        ${variantConfig.className}
        ${colors[color] || colors.primary}
        ${alignments[align] || alignments.left}
        ${weights[weight] || weights.normal}
        ${className}
      `}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Typography;