'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Star } from 'lucide-react';

interface ContentCard {
  id: string;
  title: string;
  poster: string;
  rating: number;
  year: string;
  type: 'movie' | 'tv';
}

const FeaturedContent: React.FC = () => {
  const featuredMovies: ContentCard[] = [
    {
      id: '1',
      title: 'The Dark Knight',
      poster: 'https://via.placeholder.com/300x450/1e1e1e/ffffff?text=The+Dark+Knight',
      rating: 9.0,
      year: '2008',
      type: 'movie'
    },
    {
      id: '2',
      title: 'Breaking Bad',
      poster: 'https://via.placeholder.com/300x450/1e1e1e/ffffff?text=Breaking+Bad',
      rating: 9.5,
      year: '2008',
      type: 'tv'
    },
    {
      id: '3',
      title: 'Inception',
      poster: 'https://via.placeholder.com/300x450/1e1e1e/ffffff?text=Inception',
      rating: 8.8,
      year: '2010',
      type: 'movie'
    },
    {
      id: '4',
      title: 'The Mandalorian',
      poster: 'https://via.placeholder.com/300x450/1e1e1e/ffffff?text=The+Mandalorian',
      rating: 8.7,
      year: '2019',
      type: 'tv'
    },
    {
      id: '5',
      title: 'Dune',
      poster: 'https://via.placeholder.com/300x450/1e1e1e/ffffff?text=Dune',
      rating: 8.0,
      year: '2021',
      type: 'movie'
    },
    {
      id: '6',
      title: 'Stranger Things',
      poster: 'https://via.placeholder.com/300x450/1e1e1e/ffffff?text=Stranger+Things',
      rating: 8.7,
      year: '2016',
      type: 'tv'
    }
  ];

  const ContentCard: React.FC<{ content: ContentCard }> = ({ content }) => (
    <div className="group relative bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105 hover:z-10">
      <Link href={`/${content.type}/${content.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={content.poster}
            alt={content.title}
            fill
            className="object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-accent/90 p-3 rounded-full backdrop-blur-sm">
              <Play className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
            <Star className="w-4 h-4 text-accent fill-current" />
            <span className="text-secondary text-sm font-medium">{content.rating}</span>
          </div>
        </div>

        {/* Content Info */}
        <div className="p-4">
          <h3 className="text-secondary font-semibold text-lg mb-2 line-clamp-1">
            {content.title}
          </h3>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <span className="capitalize">{content.type}</span>
            <span>{content.year}</span>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-secondary">Featured Movies & TV Shows</h2>
        <Link 
          href="/browse" 
          className="text-accent hover:text-accent/80 font-medium transition-colors"
        >
          View All
        </Link>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {featuredMovies.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedContent;