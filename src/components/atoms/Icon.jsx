import React from 'react';
import { 
  FaSearch, FaMapMarkerAlt, FaLandmark, FaWater, FaMountain, 
  FaStar, FaHeart, FaHome, FaInfoCircle, FaCalendarAlt,
  FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram,
  FaArrowRight, FaArrowLeft, FaBars, FaTimes, FaCheck,
  FaExclamationCircle, FaSpinner, FaCamera, FaSun, FaMoon,
  FaTree, FaFish, FaUtensils, FaBed, FaWifi, FaParking,
  FaWheelchair, FaLanguage, FaGlobe
} from 'react-icons/fa';

/**
 * Icon Atom Component
 * 
 * Usage Context:
 * Icons enhance visual communication and provide visual cues for actions,
 * categories, and interactive elements across the application.
 * 
 * Responsive Logic:
 * - Icons scale with the size prop
 * - Consistent across all breakpoints
 */
const iconMap = {
  search: FaSearch,
  location: FaMapMarkerAlt,
  landmark: FaLandmark,
  water: FaWater,
  mountain: FaMountain,
  star: FaStar,
  heart: FaHeart,
  home: FaHome,
  info: FaInfoCircle,
  calendar: FaCalendarAlt,
  phone: FaPhone,
  email: FaEnvelope,
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  arrowRight: FaArrowRight,
  arrowLeft: FaArrowLeft,
  menu: FaBars,
  close: FaTimes,
  check: FaCheck,
  warning: FaExclamationCircle,
  spinner: FaSpinner,
  camera: FaCamera,
  sun: FaSun,
  moon: FaMoon,
  tree: FaTree,
  fish: FaFish,
  food: FaUtensils,
  bed: FaBed,
  wifi: FaWifi,
  parking: FaParking,
  wheelchair: FaWheelchair,
  language: FaLanguage,
  globe: FaGlobe
};

const Icon = ({ 
  name = 'home', 
  size = 'md', 
  className = '',
  color = 'currentColor',
  ...props 
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-10 h-10'
  };

  return (
    <IconComponent 
      className={`${sizes[size]} ${className}`}
      color={color}
      aria-hidden="true"
      {...props}
    />
  );
};

export default Icon;