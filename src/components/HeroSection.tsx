'use client';

import React from 'react';
import Image from 'next/image';
import { Play, Plus, Info } from 'lucide-react';

const HeroSection: React.FC = () => {
  const featuredMovie = {
    title: "Guardians of the Galaxy Vol. 3",
    description: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    backdrop: "https://via.placeholder.com/1920x1080/1e1e1e/ffffff?text=Featured+Movie+Backdrop",
    rating: 8.2,
    year: "2023",
    genre: "Action, Adventure, Comedy"
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={featuredMovie.backdrop}
          alt={featuredMovie.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Movie Info */}
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-accent font-semibold">★ {featuredMovie.rating}</span>
                <span>•</span>
                <span>{featuredMovie.year}</span>
                <span>•</span>
                <span>{featuredMovie.genre}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
              {featuredMovie.title}
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {featuredMovie.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center space-x-3 bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Play Now</span>
            </button>
            
            <button className="flex items-center justify-center space-x-3 bg-gray-800/80 text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-700/80 transition-colors backdrop-blur-sm">
              <Plus className="w-5 h-5" />
              <span>My List</span>
            </button>
            
            <button className="flex items-center justify-center space-x-3 bg-transparent border border-gray-600 text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-800/50 transition-colors">
              <Info className="w-5 h-5" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;