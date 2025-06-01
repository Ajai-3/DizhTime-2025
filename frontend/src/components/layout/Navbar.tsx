// ===============================================================================
// Navbar Component
// ===============================================================================
// Purpose: Main navigation bar with user menu and cart
// Author: DizhTime Team <dizhtime@gmail.com>
// Lead: Ajai
// ===============================================================================

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCartIcon, 
  UserIcon, 
  Bars3Icon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Mock user state - replace with actual auth state
  const isLoggedIn = false;
  const cartItemsCount = 0;

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logout');
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-red-600">DizhTime</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              to="/restaurants" 
              className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Restaurants
            </Link>
            
            {/* Cart Icon */}
            <Link to="/cart" className="relative p-2">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-red-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isLoggedIn ? (
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-red-600">
                  <UserIcon className="h-6 w-6" />
                  <span>Profile</span>
                </button>
                {/* Add dropdown menu here */}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogin}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </button>
                <Link
                  to="/register"
                  className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/restaurants"
              className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Restaurants
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart ({cartItemsCount})
            </Link>
            {!isLoggedIn && (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-red-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 mx-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
