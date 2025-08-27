'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, Users, Eye, Clock, Radio } from 'lucide-react';

interface LiveStream {
  id: number;
  title: string;
  streamer: string;
  category: string;
  viewers: number;
  duration: string;
  description: string;
  isLive: boolean;
  thumbnail: string;
  tags: string[];
}

const mockLiveStreams: LiveStream[] = [
  {
    id: 1,
    title: "Marvel Movie Marathon - Phase 4 Complete Series",
    streamer: "MovieNight_Official",
    category: "Movies",
    viewers: 15432,
    duration: "4h 23m",
    description: "Join us for an epic Marvel Phase 4 marathon! Chat with fellow fans and enjoy the best superhero movies together.",
    isLive: true,
    thumbnail: "/api/placeholder/400/225",
    tags: ["Marvel", "Superhero", "Action"]
  },
  {
    id: 2,
    title: "Breaking Bad Series Finale Watch Party",
    streamer: "TVShowCentral",
    category: "TV Shows",
    viewers: 8734,
    duration: "1h 47m",
    description: "Experience the iconic Breaking Bad finale with thousands of viewers. Live reactions and discussions!",
    isLive: true,
    thumbnail: "/api/placeholder/400/225",
    tags: ["Drama", "Crime", "Finale"]
  },
  {
    id: 3,
    title: "Classic Horror Movie Night - 80s Special",
    streamer: "HorrorFanatic",
    category: "Horror",
    viewers: 3245,
    duration: "2h 15m",
    description: "Dive into the best horror films from the 1980s. Perfect for late-night scares with fellow horror fans!",
    isLive: true,
    thumbnail: "/api/placeholder/400/225",
    tags: ["Horror", "80s", "Classic"]
  },
  {
    id: 4,
    title: "Anime Movie Discussion & Reviews",
    streamer: "AnimeReviews_Pro",
    category: "Anime",
    viewers: 12567,
    duration: "3h 8m",
    description: "Live reviews and discussions of the latest anime movies. Join the community and share your thoughts!",
    isLive: true,
    thumbnail: "/api/placeholder/400/225",
    tags: ["Anime", "Review", "Discussion"]
  },
  {
    id: 5,
    title: "Sci-Fi Saturday: Blade Runner 2049 Analysis",
    streamer: "SciFi_Cinema",
    category: "Sci-Fi",
    viewers: 5678,
    duration: "2h 42m",
    description: "Deep dive analysis of Blade Runner 2049. Exploring themes, cinematography, and the future of sci-fi cinema.",
    isLive: true,
    thumbnail: "/api/placeholder/400/225",
    tags: ["Sci-Fi", "Analysis", "Cinema"]
  },
  {
    id: 6,
    title: "Comedy Special: Stand-Up Movie Reviews",
    streamer: "LaughTrackReviews",
    category: "Comedy",
    viewers: 2134,
    duration: "1h 33m",
    description: "Hilarious movie reviews with stand-up comedy mixed in. Laugh while discovering great films!",
    isLive: true,
    thumbnail: "/api/placeholder/400/225",
    tags: ["Comedy", "Review", "Stand-up"]
  },
  {
    id: 7,
    title: "Documentary Deep Dive: Nature Series",
    streamer: "NatureLovers",
    category: "Documentary",
    viewers: 4321,
    duration: "2h 56m",
    description: "Exploring the most breathtaking nature documentaries ever made. Learn about wildlife and conservation.",
    isLive: true,
    thumbnail: "/api/placeholder/400/225",
    tags: ["Documentary", "Nature", "Wildlife"]
  },
  {
    id: 8,
    title: "Action Movie Showdown: Best Stunts Ever",
    streamer: "ActionCinema",
    category: "Action",
    viewers: 9876,
    duration: "3h 21m",
    description: "Countdown of the most incredible action movie stunts and sequences. Adrenaline-packed entertainment!",
    isLive: true,
    thumbnail: "/api/placeholder/400/225",
    tags: ["Action", "Stunts", "Countdown"]
  }
];

export default function LivePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('viewers');
  const [liveStreams, setLiveStreams] = useState(mockLiveStreams);

  const categories = ['All', 'Movies', 'TV Shows', 'Horror', 'Anime', 'Sci-Fi', 'Comedy', 'Documentary', 'Action'];

  // Simulate live viewer count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStreams(prev => prev.map(stream => ({
        ...stream,
        viewers: stream.viewers + Math.floor(Math.random() * 20) - 10
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredStreams = liveStreams.filter(stream => {
    const matchesSearch = stream.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stream.streamer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || stream.category === selectedCategory;
    return matchesSearch && matchesCategory && stream.isLive;
  }).sort((a, b) => {
    if (sortBy === 'viewers') return b.viewers - a.viewers;
    if (sortBy === 'duration') return b.duration.localeCompare(a.duration);
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    return 0;
  });

  const formatViewers = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const totalViewers = liveStreams.reduce((sum, stream) => sum + stream.viewers, 0);

  return (
    <div className="min-h-screen bg-primary py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h1 className="text-4xl font-bold text-secondary">Live Streams</h1>
            </div>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            Watch live content with community - {formatViewers(totalViewers)} viewers online
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-red-500" />
              <span>{filteredStreams.length} Live Now</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{formatViewers(totalViewers)} Total Viewers</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search live streams or streamers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 bg-gray-800 border border-gray-600 rounded-lg text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent appearance-none cursor-pointer"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent appearance-none cursor-pointer"
          >
            <option value="viewers">Sort by Viewers</option>
            <option value="duration">Sort by Duration</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>

        {/* Live Streams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStreams.map((stream) => (
            <div
              key={stream.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              {/* Stream Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-600">
                <div className="absolute inset-0 flex items-center justify-center text-secondary text-lg font-bold text-center p-4">
                  {stream.title}
                </div>
                
                {/* Live Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-red-500 px-2 py-1 rounded text-white text-xs font-bold">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  LIVE
                </div>
                
                {/* Viewer Count */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 px-2 py-1 rounded text-white text-xs">
                  <Users className="w-3 h-3" />
                  {formatViewers(stream.viewers)}
                </div>
                
                {/* Duration */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 px-2 py-1 rounded text-white text-xs">
                  <Clock className="w-3 h-3" />
                  {stream.duration}
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-accent p-3 rounded-full">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Stream Info */}
              <div className="p-4">
                <h3 className="text-secondary font-semibold text-lg mb-2 line-clamp-2">
                  {stream.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-accent font-medium text-sm">{stream.streamer}</div>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <div className="text-gray-400 text-sm">{stream.category}</div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {stream.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm line-clamp-2">
                  {stream.description}
                </p>

                <div className="mt-3 pt-3 border-t border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400">Live Now</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {formatViewers(stream.viewers)} watching
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredStreams.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📹</div>
            <h3 className="text-2xl font-bold text-secondary mb-2">No live streams found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria, or check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
}