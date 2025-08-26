'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Plus } from 'lucide-react';

interface NewRelease {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  year: string;
  type: 'movie' | 'tv';
  isNew: boolean;
}

const NewReleases: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const newReleases: NewRelease[] = [
    {
      id: '1',
      title: 'Spider-Man: Across the Spider-Verse',
      poster: 'https://via.placeholder.com/300x450/1e1e1e/ffffff?text=Spider-Verse',
      backdrop: 'https://via.placeholder.com/500x281/1e1e1e/ffffff?text=Spider-Verse',
      rating: 8.7,
      year: '2023',
      type: 'movie',
      isNew: true
    },
    {
      id: '2',
      title: 'The Last of Us',
      poster: 'https://via.placeholder.com/300x450/1e1e1e/ffffff?text=The+Last+of+Us',
      backdrop: 'https://via.placeholder.com/500x281/1e1e1e/ffffff?text=The+Last+of+Us',
      rating: 9.1,
      year: '2023',
      type: 'tv',
      isNew: true
    },
    {
      id: '3',
      title: 'John Wick: Chapter 4',
      poster: 'https://via.placeholder.com/300x450/1e1e1e/ffffff?text=John+Wick+4',
      backdrop: 'https://via.placeholder.com/500x281/1e1e1e/ffffff?text=John+Wick+4',
      rating: 7.8,
      year: '2023',
      type: 'movie',
      isNew: true
    },
    {
      id: '4',
      title: 'Wednesday',
      poster: 'https://via.placeholder.com/300x450/1e1e1e/ffffff?text=Wednesday',
      backdrop: 'https://via.placeholder.com/500x281/1e1e1e/ffffff?text=Wednesday',
      rating: 8.1,
      year: '2023',
      type: 'tv',
      isNew: true
    },
    {
      id: '5',
      title: 'Avatar: The Way of Water',
      poster: 'https://via.placeholder.com/300x450/1e1e1e/ffffff?text=Avatar+2',
      backdrop: 'https://via.placeholder.com/500x281/1e1e1e/ffffff?text=Avatar+2',
      rating: 7.6,
      year: '2022',
      type: 'movie',
      isNew: true
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const ReleaseCard: React.FC<{ release: NewRelease }> = ({ release }) => (
    <div className="group relative min-w-[280px] bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
      <Link href={`/${release.type}/${release.id}`}>
        {/* Backdrop Image */}
        <div className="relative aspect-video">
          <Image
            src={release.backdrop}
            alt={release.title}
            fill
            className="object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-accent/90 p-3 rounded-full backdrop-blur-sm">
              <Play className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* New Badge */}
          {release.isNew && (
            <div className="absolute top-3 left-3 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold">
              NEW
            </div>
          )}

          {/* Rating */}
          <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm px-2 py-1 rounded-lg text-secondary text-sm font-medium">
            ★ {release.rating}
          </div>
        </div>

        {/* Content Info */}
        <div className="p-4">
          <h3 className="text-secondary font-semibold text-lg mb-2 line-clamp-2">
            {release.title}
          </h3>
          <div className="flex items-center justify-between text-gray-400 text-sm mb-3">
            <span className="capitalize bg-gray-700 px-2 py-1 rounded">
              {release.type}
            </span>
            <span>{release.year}</span>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="flex-1 bg-accent text-primary py-2 rounded font-medium hover:bg-accent/80 transition-colors text-sm">
              Watch Now
            </button>
            <button className="bg-gray-700 text-secondary p-2 rounded hover:bg-gray-600 transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-secondary">New Releases</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="bg-gray-800 hover:bg-gray-700 text-secondary p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-gray-800 hover:bg-gray-700 text-secondary p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {newReleases.map((release) => (
          <ReleaseCard key={release.id} release={release} />
        ))}
      </div>
    </div>
  );
};

export default NewReleases;