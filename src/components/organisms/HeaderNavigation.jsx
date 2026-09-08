import React, { useState, useEffect } from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import NavigationItem from '../molecules/NavigationItem';
import '../../styles/colors.css';

/**
 * Header Navigation Organism Component
 * 
 * Usage Context:
 * Provides the primary navigation for the entire application,
 * appearing on all pages.
 * 
 * Responsive Logic:
 * - Mobile: Logo + hamburger menu, navigation hidden behind toggle
 * - Tablet: Logo + limited navigation + menu toggle
 * - Desktop: Full navigation visible
 */
const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', icon: 'home' },
    { href: '/heritage', label: 'Heritage', icon: 'landmark' },
    { href: '/about', label: 'About', icon: 'info' },
    { href: '/contact', label: 'Contact', icon: 'email' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('header')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'}
        border-b border-gray-100
      `}
      role="banner"
      aria-label="Site header"
    >
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" aria-label="Home">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-xl transition-transform group-hover:scale-105">
              🏛️
            </div>
            <div className="hidden sm:block">
              <Typography variant="h3" className="text-blue-700 font-bold leading-tight text-sm md:text-base">
                Pangasinan
                <span className="block text-[10px] md:text-xs font-normal text-gray-500">Heritage Showcase</span>
              </Typography>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavigationItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                active={window.location.pathname === item.href}
              />
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Icon name="search" size="sm" className="mr-1" />
              Search
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <Icon name="close" size="md" />
              ) : (
                <Icon name="menu" size="md" />
              )}
              <span className="sr-only">Toggle navigation menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu" 
            className="lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 bg-white/95 backdrop-blur-md overflow-y-auto"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="container py-6" aria-label="Mobile navigation">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <NavigationItem
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                    className="w-full py-3 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  />
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Button variant="primary" size="lg" fullWidth>
                    <Icon name="search" size="sm" className="mr-2" />
                    Search Heritage
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderNavigation;