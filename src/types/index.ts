export interface User {
  id: string;
  email: string;
  name: string;
  subscription: 'free' | 'premium';
  avatar?: string;
  createdAt: Date;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  poster: string;
  backdrop: string;
  trailer: string;
  duration: number; // in minutes
  rating: number;
  releaseDate: string;
  genres: string[];
  cast: string[];
  director: string;
  isFeatured?: boolean;
  isNewRelease?: boolean;
}

export interface TVShow {
  id: string;
  title: string;
  description: string;
  poster: string;
  backdrop: string;
  seasons: number;
  episodes: number;
  rating: number;
  releaseDate: string;
  genres: string[];
  cast: string[];
  isFeatured?: boolean;
  isNewRelease?: boolean;
}

export interface LiveStream {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  streamer: string;
  viewers: number;
  category: string;
  isLive: boolean;
  startTime: Date;
}

export interface WatchHistory {
  id: string;
  userId: string;
  contentId: string;
  contentType: 'movie' | 'tv' | 'live';
  watchedAt: Date;
  progress: number; // percentage watched
}

export interface Recommendation {
  id: string;
  userId: string;
  contentId: string;
  contentType: 'movie' | 'tv' | 'live';
  score: number;
  reason: string;
}

export type ContentType = Movie | TVShow | LiveStream;