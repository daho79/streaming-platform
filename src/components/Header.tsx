'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, User, Menu, X, Play } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-primary/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-accent p-2 rounded-lg">
              <Play className="w-6 h-6 text-primary" />
            </div>
            <span className="text-2xl font-bold text-secondary">StreamDZD</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-secondary hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/movies" className="text-secondary hover:text-accent transition-colors">
              Movies
            </Link>
            <Link href="/tv-shows" className="text-secondary hover:text-accent transition-colors">
              TV Shows
            </Link>
            <Link href="/live" className="text-secondary hover:text-accent transition-colors">
              Live
            </Link>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={toggleSearch}
                className="p-2 text-secondary hover:text-accent transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-12 w-80 bg-gray-800 rounded-lg shadow-lg p-4">
                  <input
                    type="text"
                    placeholder="Search movies, TV shows..."
                    className="w-full px-4 py-2 bg-gray-700 text-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* User Menu */}
            <Link 
              href="/profile" 
              className="p-2 text-secondary hover:text-accent transition-colors"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Login Button */}
            <Link
              href="/login"
              className="hidden sm:block bg-accent text-primary px-4 py-2 rounded-lg font-medium hover:bg-accent/80 transition-colors"
            >
              Sign In
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-secondary hover:text-accent transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-secondary hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/movies" 
                className="text-secondary hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Movies
              </Link>
              <Link 
                href="/tv-shows" 
                className="text-secondary hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                TV Shows
              </Link>
              <Link 
                href="/live" 
                className="text-secondary hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Live
              </Link>
              <Link
                href="/login"
                className="bg-accent text-primary px-4 py-2 rounded-lg font-medium hover:bg-accent/80 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;