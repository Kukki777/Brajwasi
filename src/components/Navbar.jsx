import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b-2 border-orange-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
             
              <div className="relative bg-white p-2 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-orange-200">
                <img 
                  src="/assets/images/logo.jpg" 
                  alt="Brajwasi Brothers Logo" 
                  className="h-8 w-8 object-contain"
                />
              </div>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Brajwasi Brothers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/about"
              className={`relative px-5 py-2 rounded-full text-base font-semibold transition-all duration-300 group ${
                isActive('/about') 
                  ? 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              {!isActive('/about') && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              )}
              <span className="relative">About</span>
            </Link>
            <Link
              to="/contact"
              className={`relative px-5 py-2 rounded-full text-base font-semibold transition-all duration-300 group ${
                isActive('/contact') 
                  ? 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              {!isActive('/contact') && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              )}
              <span className="relative">Contact Us</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none p-2 rounded-lg hover:bg-orange-50 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="bg-white rounded-2xl mt-4 shadow-2xl border-2 border-orange-100 overflow-hidden">
              <Link
                to="/about"
                className={`block px-6 py-3 text-base font-semibold transition-all duration-300 ${
                  isActive('/about')
                    ? 'text-white bg-gradient-to-r from-orange-500 to-red-500'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block px-6 py-3 text-base font-semibold transition-all duration-300 border-t border-orange-100 ${
                  isActive('/contact')
                    ? 'text-white bg-gradient-to-r from-orange-500 to-red-500'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;