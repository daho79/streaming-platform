'use client';

import React, { useState } from 'react';
import { Search, Filter, Play, Star, Calendar, Tv, Users } from 'lucide-react';

interface TVShow {
  id: number;
  title: string;
  year: number;
  rating: number;
  seasons: number;
  episodes: number;
  genre: string[];
  description: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  image: string;
  featured?: boolean;
}

const mockTVShows: TVShow[] = [
  {
    id: 1,
    title: "Stranger Things",
    year: 2016,
    rating: 8.7,
    seasons: 4,
    episodes: 42,
    genre: ["Sci-Fi", "Horror", "Drama"],
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    status: "Completed",
    image: "/api/placeholder/300/450",
    featured: true
  },
  {
    id: 2,
    title: "The Mandalorian",
    year: 2019,
    rating: 8.8,
    seasons: 3,
    episodes: 24,
    genre: ["Sci-Fi", "Adventure"],
    description: "A lone bounty hunter makes his way through the outer reaches of the galaxy.",
    status: "Ongoing",
    image: "/api/placeholder/300/450"
  },
  {
    id: 3,
    title: "Wednesday",
    year: 2022,
    rating: 8.1,
    seasons: 1,
    episodes: 8,
    genre: ["Comedy", "Horror", "Mystery"],
    description: "Follows Wednesday Addams' years as a student at Nevermore Academy.",
    status: "Ongoing",
    image: "/api/placeholder/300/450"
  },
  {
    id: 4,
    title: "House of the Dragon",
    year: 2022,
    rating: 8.5,
    seasons: 2,
    episodes: 18,
    genre: ["Fantasy", "Drama", "Action"],
    description: "An internal succession war within House Targaryen at the height of its power.",
    status: "Ongoing",
    image: "/api/placeholder/300/450"
  },
  {
    id: 5,
    title: "Breaking Bad",
    year: 2008,
    rating: 9.5,
    seasons: 5,
    episodes: 62,
    genre: ["Crime", "Drama", "Thriller"],
    description: "A chemistry teacher diagnosed with cancer turns to manufacturing drugs.",
    status: "Completed",
    image: "/api/placeholder/300/450"
  },
  {
    id: 6,
    title: "The Last of Us",
    year: 2023,
    rating: 8.9,
    seasons: 1,
    episodes: 9,
    genre: ["Drama", "Horror", "Thriller"],
    description: "Joel and Ellie must survive ruthless killers and monsters in a post-apocalyptic America.",
    status: "Ongoing",
    image: "/api/placeholder/300/450"
  },
  {
    id: 7,
    title: "Squid Game",
    year: 2021,
    rating: 8.0,
    seasons: 1,
    episodes: 9,
    genre: ["Thriller", "Drama"],
    description: "Hundreds of cash-strapped players accept an invitation to compete in children's games.",
    status: "Ongoing",
    image: "/api/placeholder/300/450"
  },
  {
    id: 8,
    title: "The Crown",
    year: 2016,
    rating: 8.7,
    seasons: 6,
    episodes: 60,
    genre: ["Drama", "History"],
    description: "Follows the political rivalries and romance of Queen Elizabeth II's reign.",
    status: "Completed",
    image: "/api/placeholder/300/450"
  }
];

export default function TVShowsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const genres = ['All', 'Sci-Fi', 'Drama', 'Action', 'Comedy', 'Horror', 'Fantasy', 'Crime', 'Thriller', 'History', 'Mystery', 'Adventure'];
  const statuses = ['All', 'Ongoing', 'Completed', 'Upcoming'];

  const filteredShows = mockTVShows.filter(show => {
    const matchesSearch = show.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || show.genre.includes(selectedGenre);
    const matchesStatus = selectedStatus === 'All' || show.status === selectedStatus;
    return matchesSearch && matchesGenre && matchesStatus;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'year') return b.year - a.year;
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    if (sortBy === 'episodes') return b.episodes - a.episodes;
    return 0;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ongoing': return 'bg-green-500';
      case 'Completed': return 'bg-blue-500';
      case 'Upcoming': return 'bg-accent';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-primary py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-secondary mb-4">TV Shows</h1>
          <p className="text-gray-400 text-lg">Binge-watch the best TV series and shows</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search TV shows..."
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

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent appearance-none cursor-pointer"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>

          {/* Sort Filter */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent appearance-none cursor-pointer"
          >
            <option value="rating">Sort by Rating</option>
            <option value="year">Sort by Year</option>
            <option value="title">Sort by Title</option>
            <option value="episodes">Sort by Episodes</option>
          </select>
        </div>

        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredShows.length} of {mockTVShows.length} TV shows
          </p>
        </div>

        {/* TV Shows Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredShows.map((show) => (
            <div
              key={show.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              {/* TV Show Poster */}
              <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-700 to-gray-600">
                <div className="absolute inset-0 flex items-center justify-center text-secondary text-xl font-bold text-center p-4">
                  {show.title}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-accent p-4 rounded-full">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                </div>
                {show.featured && (
                  <div className="absolute top-2 left-2 bg-accent px-2 py-1 rounded text-primary text-xs font-bold">
                    FEATURED
                  </div>
                )}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded text-white text-xs font-bold ${getStatusColor(show.status)}`}>
                  {show.status.toUpperCase()}
                </div>
              </div>

              {/* TV Show Info */}
              <div className="p-4">
                <h3 className="text-secondary font-semibold text-lg mb-2 line-clamp-2">
                  {show.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">{show.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{show.year}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Tv className="w-4 h-4" />
                    <span className="text-sm">{show.seasons} Season{show.seasons > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{show.episodes} Episodes</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {show.genre.slice(0, 2).map((g, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {g}
                    </span>
                  ))}
                  {show.genre.length > 2 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      +{show.genre.length - 2}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm line-clamp-3">
                  {show.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredShows.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📺</div>
            <h3 className="text-2xl font-bold text-secondary mb-2">No TV shows found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}