'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Users, Circle } from 'lucide-react';

interface LiveStream {
  id: string;
  title: string;
  streamer: string;
  thumbnail: string;
  viewers: number;
  category: string;
  isLive: boolean;
  duration: string;
}

const LiveStreams: React.FC = () => {
  const liveStreams: LiveStream[] = [
    {
      id: '1',
      title: 'Marvel Movie Marathon - MCU Phase 4 Complete Watchthrough',
      streamer: 'MovieNight_Official',
      thumbnail: 'https://via.placeholder.com/400x225/1e1e1e/ffffff?text=Marvel+Marathon',
      viewers: 15420,
      category: 'Movies',
      isLive: true,
      duration: '2:34:12'
    },
    {
      id: '2',
      title: 'Breaking Bad Series Finale Watch Party',
      streamer: 'TVShowCentral',
      thumbnail: 'https://via.placeholder.com/400x225/1e1e1e/ffffff?text=Breaking+Bad+Finale',
      viewers: 8765,
      category: 'TV Shows',
      isLive: true,
      duration: '1:45:30'
    },
    {
      id: '3',
      title: 'Classic Horror Movie Night - Halloween Special',
      streamer: 'HorrorFanatic',
      thumbnail: 'https://via.placeholder.com/400x225/1e1e1e/ffffff?text=Horror+Night',
      viewers: 3289,
      category: 'Horror',
      isLive: true,
      duration: '3:12:45'
    },
    {
      id: '4',
      title: 'Anime Movie Discussion & Review Stream',
      streamer: 'AnimeReviews_Pro',
      thumbnail: 'https://via.placeholder.com/400x225/1e1e1e/ffffff?text=Anime+Discussion',
      viewers: 12567,
      category: 'Anime',
      isLive: true,
      duration: '0:56:22'
    }
  ];

  const formatViewers = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const StreamCard: React.FC<{ stream: LiveStream }> = ({ stream }) => (
    <div className="group relative bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
      <Link href={`/live/${stream.id}`}>
        {/* Thumbnail */}
        <div className="relative aspect-video">
          <Image
            src={stream.thumbnail}
            alt={stream.title}
            fill
            className="object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-accent/90 p-4 rounded-full backdrop-blur-sm">
              <Play className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Live Indicator */}
          <div className="absolute top-3 left-3 flex items-center space-x-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            <Circle className="w-2 h-2 fill-current animate-pulse" />
            <span>LIVE</span>
          </div>

          {/* Duration */}
          <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm px-2 py-1 rounded text-secondary text-sm font-medium">
            {stream.duration}
          </div>

          {/* Viewers Count */}
          <div className="absolute bottom-3 right-3 flex items-center space-x-1 bg-primary/80 backdrop-blur-sm px-2 py-1 rounded text-secondary text-sm">
            <Users className="w-4 h-4" />
            <span>{formatViewers(stream.viewers)}</span>
          </div>
        </div>

        {/* Stream Info */}
        <div className="p-4">
          <h3 className="text-secondary font-semibold text-lg mb-2 line-clamp-2 leading-tight">
            {stream.title}
          </h3>
          
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-400 text-sm font-medium">
              {stream.streamer}
            </p>
            <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-medium">
              {stream.category}
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{formatViewers(stream.viewers)} viewers</span>
            </div>
            <div className="flex items-center space-x-1">
              <Circle className="w-2 h-2 fill-current text-red-500 animate-pulse" />
              <span>Live</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-secondary">Live Streams</h2>
        <Link 
          href="/live" 
          className="text-accent hover:text-accent/80 font-medium transition-colors"
        >
          View All Live
        </Link>
      </div>

      {/* Featured Live Stream */}
      <div className="mb-8 bg-gradient-to-r from-gray-800/50 to-transparent rounded-lg p-6 border border-gray-700">
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <Circle className="w-2 h-2 fill-current text-white animate-pulse" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Join Live Watch Parties
            </h3>
            <p className="text-gray-300 mb-4">
              Watch your favorite movies and TV shows together with thousands of other fans. 
              Interactive chat, synchronized playback, and community discussions.
            </p>
            <Link 
              href="/live"
              className="inline-flex items-center space-x-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              <Play className="w-5 h-5" />
              <span>Join Live Streams</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Live Streams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {liveStreams.map((stream) => (
          <StreamCard key={stream.id} stream={stream} />
        ))}
      </div>
    </div>
  );
};

export default LiveStreams;