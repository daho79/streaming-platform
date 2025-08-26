'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Plus, Share2, Download, Star, Clock, Calendar, Users } from 'lucide-react';

interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

const MovieDetailPage: React.FC<MovieDetailPageProps> = ({ params }) => {
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);

  // Mock movie data - in a real app, this would be fetched based on params.id
  const movie = {
    id: params.id,
    title: "Guardians of the Galaxy Vol. 3",
    description: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    poster: "https://via.placeholder.com/400x600/1e1e1e/ffffff?text=GOTG+Vol+3+Poster",
    backdrop: "https://via.placeholder.com/1920x1080/1e1e1e/ffffff?text=GOTG+Vol+3+Backdrop",
    trailer: "https://via.placeholder.com/1920x1080/1e1e1e/ffffff?text=Trailer+Video",
    rating: 8.2,
    duration: 150, // minutes
    releaseDate: "2023-05-05",
    genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    director: "James Gunn",
    cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Karen Gillan", "Pom Klementieff"],
    language: "English",
    country: "USA",
    budget: "$250M",
    boxOffice: "$845M"
  };

  const recommendations = [
    {
      id: "1",
      title: "Thor: Love and Thunder",
      poster: "https://via.placeholder.com/200x300/1e1e1e/ffffff?text=Thor+4",
      rating: 6.8,
      year: "2022"
    },
    {
      id: "2", 
      title: "Doctor Strange 2",
      poster: "https://via.placeholder.com/200x300/1e1e1e/ffffff?text=Dr+Strange+2",
      rating: 7.0,
      year: "2022"
    },
    {
      id: "3",
      title: "Black Panther: Wakanda Forever",
      poster: "https://via.placeholder.com/200x300/1e1e1e/ffffff?text=Black+Panther+2",
      rating: 6.7,
      year: "2022"
    },
    {
      id: "4",
      title: "Spider-Man: No Way Home",
      poster: "https://via.placeholder.com/200x300/1e1e1e/ffffff?text=Spider-Man+NWH",
      rating: 8.4,
      year: "2021"
    }
  ];

  const reviews = [
    {
      id: "1",
      user: "MovieFan2023",
      rating: 9,
      comment: "An emotional and satisfying conclusion to the Guardians trilogy. James Gunn delivers once again!",
      date: "2023-05-10"
    },
    {
      id: "2",
      user: "CinemaLover",
      rating: 8,
      comment: "Great action sequences and character development. The visual effects are stunning.",
      date: "2023-05-08"
    },
    {
      id: "3",
      user: "MCUExpert",
      rating: 7,
      comment: "A good movie but not as strong as Vol. 2. Still worth watching for MCU fans.",
      date: "2023-05-06"
    }
  ];

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section with Video Player */}
      <div className="relative h-screen">
        {isTrailerPlaying ? (
          <div className="absolute inset-0 bg-black">
            {/* Video Player Placeholder */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-secondary">
                <Play className="w-24 h-24 mx-auto mb-4 opacity-50" />
                <p className="text-xl">Video Player Component</p>
                <p className="text-gray-400 mt-2">Trailer would play here</p>
                <button 
                  onClick={() => setIsTrailerPlaying(false)}
                  className="mt-4 bg-accent text-primary px-6 py-2 rounded-lg hover:bg-accent/80 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={movie.backdrop}
              alt={movie.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            
            {/* Movie Info Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                  <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
                    {/* Movie Poster */}
                    <div className="flex-shrink-0">
                      <Image
                        src={movie.poster}
                        alt={movie.title}
                        width={300}
                        height={450}
                        className="rounded-lg shadow-2xl"
                      />
                    </div>

                    {/* Movie Details */}
                    <div className="flex-1">
                      <h1 className="text-4xl lg:text-6xl font-bold text-secondary mb-4">
                        {movie.title}
                      </h1>

                      {/* Movie Meta */}
                      <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-300">
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 text-accent fill-current" />
                          <span className="font-semibold">{movie.rating}/10</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5" />
                          <span>{formatDuration(movie.duration)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5" />
                          <span>{formatDate(movie.releaseDate)}</span>
                        </div>
                      </div>

                      {/* Genres */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {movie.genres.map((genre, index) => (
                          <span
                            key={index}
                            className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                        {movie.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <button 
                          onClick={() => setIsTrailerPlaying(true)}
                          className="flex items-center space-x-3 bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                        >
                          <Play className="w-5 h-5" />
                          <span>Watch Now</span>
                        </button>
                        <button className="flex items-center space-x-3 bg-gray-800/80 text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-700/80 transition-colors backdrop-blur-sm">
                          <Plus className="w-5 h-5" />
                          <span>Add to List</span>
                        </button>
                        <button className="flex items-center space-x-3 bg-transparent border border-gray-600 text-secondary px-6 py-4 rounded-lg font-semibold hover:bg-gray-800/50 transition-colors">
                          <Share2 className="w-5 h-5" />
                        </button>
                        <button className="flex items-center space-x-3 bg-transparent border border-gray-600 text-secondary px-6 py-4 rounded-lg font-semibold hover:bg-gray-800/50 transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Movie Details Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Cast & Crew */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-6">Cast & Crew</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Director</h3>
                  <p className="text-gray-300">{movie.director}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Cast</h3>
                  <p className="text-gray-300">{movie.cast.join(", ")}</p>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-6">Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary">{review.user}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-accent fill-current' : 'text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300">{review.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Movie Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary mb-4">Movie Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Language:</span>
                  <span className="text-secondary">{movie.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Country:</span>
                  <span className="text-secondary">{movie.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Budget:</span>
                  <span className="text-secondary">{movie.budget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Box Office:</span>
                  <span className="text-secondary">{movie.boxOffice}</span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <h3 className="text-xl font-bold text-secondary mb-6">You Might Also Like</h3>
              <div className="space-y-4">
                {recommendations.map((rec) => (
                  <Link key={rec.id} href={`/movie/${rec.id}`}>
                    <div className="flex space-x-4 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                      <Image
                        src={rec.poster}
                        alt={rec.title}
                        width={60}
                        height={90}
                        className="rounded object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-secondary mb-1 line-clamp-2">
                          {rec.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-accent fill-current" />
                          <span>{rec.rating}</span>
                          <span>•</span>
                          <span>{rec.year}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;