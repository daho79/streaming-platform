'use client';

import React, { useState } from 'react';
import { Search, Filter, Play, Star, Calendar, Clock } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  duration: string;
  genre: string[];
  description: string;
  image: string;
  featured?: boolean;
}

const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Avatar: The Way of Water",
    year: 2022,
    rating: 8.1,
    duration: "192 min",
    genre: ["Sci-Fi", "Adventure"],
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.",
    image: "/api/placeholder/300/450",
    featured: true
  },
  {
    id: 2,
    title: "Top Gun: Maverick",
    year: 2022,
    rating: 8.3,
    duration: "131 min",
    genre: ["Action", "Drama"],
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator.",
    image: "/api/placeholder/300/450"
  },
  {
    id: 3,
    title: "Black Panther: Wakanda Forever",
    year: 2022,
    rating: 7.3,
    duration: "161 min",
    genre: ["Action", "Adventure"],
    description: "The people of Wakanda fight to protect their home from intervening world powers.",
    image: "/api/placeholder/300/450"
  },
  {
    id: 4,
    title: "Dune",
    year: 2021,
    rating: 8.0,
    duration: "155 min",
    genre: ["Sci-Fi", "Drama"],
    description: "Paul Atreides leads nomadic tribes in a revolt against the galactic emperor.",
    image: "/api/placeholder/300/450"
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    year: 2021,
    rating: 8.4,
    duration: "148 min",
    genre: ["Action", "Adventure"],
    description: "Spider-Man seeks help from Doctor Strange when his identity is revealed.",
    image: "/api/placeholder/300/450"
  },
  {
    id: 6,
    title: "The Batman",
    year: 2022,
    rating: 7.8,
    duration: "176 min",
    genre: ["Action", "Crime"],
    description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves a trail of clues.",
    image: "/api/placeholder/300/450"
  }
];

export default function MoviesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const genres = ['All', 'Action', 'Adventure', 'Sci-Fi', 'Drama', 'Crime'];

  const filteredMovies = mockMovies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || movie.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'year') return b.year - a.year;
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="min-h-screen bg-primary py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-secondary mb-4">Movies</h1>
          <p className="text-gray-400 text-lg">Discover amazing movies from around the world</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>

          {/* Genre Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="pl-10 pr-8 py-3 bg-gray-800 border border-gray-600 rounded-lg text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent appearance-none cursor-pointer"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent appearance-none cursor-pointer"
          >
            <option value="rating">Sort by Rating</option>
            <option value="year">Sort by Year</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>

        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredMovies.length} of {mockMovies.length} movies
          </p>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              {/* Movie Poster */}
              <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-700 to-gray-600">
                <div className="absolute inset-0 flex items-center justify-center text-secondary text-xl font-bold">
                  {movie.title}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-accent p-4 rounded-full">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                </div>
                {movie.featured && (
                  <div className="absolute top-2 left-2 bg-accent px-2 py-1 rounded text-primary text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Movie Info */}
              <div className="p-4">
                <h3 className="text-secondary font-semibold text-lg mb-2 line-clamp-2">
                  {movie.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">{movie.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{movie.year}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-400 mb-3">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{movie.duration}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {movie.genre.map((g, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {g}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm line-clamp-3">
                  {movie.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold text-secondary mb-2">No movies found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}