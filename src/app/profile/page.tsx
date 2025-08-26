'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  User, 
  Settings, 
  Heart, 
  Clock, 
  Star, 
  Download,
  Bell,
  CreditCard,
  Crown,
  Edit3,
  History,
  Bookmark
} from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'history' | 'watchlist' | 'settings'>('history');

  // Mock user data
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://via.placeholder.com/150x150/f39c12/ffffff?text=JD',
    subscription: 'premium' as const,
    joinDate: '2023-01-15',
    totalWatched: 247,
    favoriteGenres: ['Action', 'Sci-Fi', 'Comedy']
  };

  const watchHistory = [
    {
      id: '1',
      title: 'Guardians of the Galaxy Vol. 3',
      type: 'movie' as const,
      poster: 'https://via.placeholder.com/100x150/1e1e1e/ffffff?text=GOTG3',
      watchedAt: '2023-12-20',
      progress: 100,
      duration: 150,
      rating: 8.2
    },
    {
      id: '2',
      title: 'The Last of Us',
      type: 'tv' as const,
      poster: 'https://via.placeholder.com/100x150/1e1e1e/ffffff?text=TLOU',
      watchedAt: '2023-12-19',
      progress: 75,
      duration: 60,
      rating: 9.1
    },
    {
      id: '3',
      title: 'Spider-Man: Across the Spider-Verse',
      type: 'movie' as const,
      poster: 'https://via.placeholder.com/100x150/1e1e1e/ffffff?text=Spider',
      watchedAt: '2023-12-18',
      progress: 100,
      duration: 140,
      rating: 8.7
    },
    {
      id: '4',
      title: 'Breaking Bad',
      type: 'tv' as const,
      poster: 'https://via.placeholder.com/100x150/1e1e1e/ffffff?text=BB',
      watchedAt: '2023-12-17',
      progress: 45,
      duration: 47,
      rating: 9.5
    }
  ];

  const watchlist = [
    {
      id: '1',
      title: 'Dune: Part Two',
      type: 'movie' as const,
      poster: 'https://via.placeholder.com/100x150/1e1e1e/ffffff?text=Dune2',
      addedAt: '2023-12-15',
      rating: 8.5,
      releaseDate: '2024-03-01'
    },
    {
      id: '2',
      title: 'House of the Dragon',
      type: 'tv' as const,
      poster: 'https://via.placeholder.com/100x150/1e1e1e/ffffff?text=HOTD',
      addedAt: '2023-12-10',
      rating: 8.4,
      releaseDate: '2022-08-21'
    },
    {
      id: '3',
      title: 'The Batman',
      type: 'movie' as const,
      poster: 'https://via.placeholder.com/100x150/1e1e1e/ffffff?text=Batman',
      addedAt: '2023-12-08',
      rating: 7.8,
      releaseDate: '2022-03-04'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatProgress = (progress: number) => {
    return `${progress}%`;
  };

  const ProfileHeader = () => (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Avatar */}
        <div className="relative">
          <Image
            src={user.avatar}
            alt={user.name}
            width={120}
            height={120}
            className="rounded-full border-4 border-accent"
          />
          <button className="absolute bottom-0 right-0 bg-accent text-primary p-2 rounded-full hover:bg-accent/80 transition-colors">
            <Edit3 className="w-4 h-4" />
          </button>
        </div>

        {/* User Info */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
            <h1 className="text-3xl font-bold text-secondary">{user.name}</h1>
            {user.subscription === 'premium' && (
              <div className="bg-accent text-primary px-3 py-1 rounded-full flex items-center space-x-1">
                <Crown className="w-4 h-4" />
                <span className="text-sm font-semibold">Premium</span>
              </div>
            )}
          </div>
          <p className="text-gray-400 mb-4">{user.email}</p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-accent">{user.totalWatched}</div>
              <div className="text-sm text-gray-400">Movies Watched</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">{watchlist.length}</div>
              <div className="text-sm text-gray-400">In Watchlist</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">15</div>
              <div className="text-sm text-gray-400">Reviews</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">3</div>
              <div className="text-sm text-gray-400">Favorite Genres</div>
            </div>
          </div>

          {/* Favorite Genres */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Favorite Genres</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {user.favoriteGenres.map((genre, index) => (
                <span
                  key={index}
                  className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          <button className="bg-accent text-primary px-6 py-2 rounded-lg font-medium hover:bg-accent/80 transition-colors">
            Edit Profile
          </button>
          <button className="bg-gray-600 text-secondary px-6 py-2 rounded-lg font-medium hover:bg-gray-500 transition-colors">
            Share Profile
          </button>
        </div>
      </div>
    </div>
  );

  const TabNavigation = () => (
    <div className="flex space-x-1 bg-gray-800 rounded-lg p-1 mb-8">
      <button
        onClick={() => setActiveTab('history')}
        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium transition-colors ${
          activeTab === 'history'
            ? 'bg-accent text-primary'
            : 'text-gray-400 hover:text-secondary'
        }`}
      >
        <History className="w-4 h-4" />
        <span>Watch History</span>
      </button>
      <button
        onClick={() => setActiveTab('watchlist')}
        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium transition-colors ${
          activeTab === 'watchlist'
            ? 'bg-accent text-primary'
            : 'text-gray-400 hover:text-secondary'
        }`}
      >
        <Bookmark className="w-4 h-4" />
        <span>My Watchlist</span>
      </button>
      <button
        onClick={() => setActiveTab('settings')}
        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium transition-colors ${
          activeTab === 'settings'
            ? 'bg-accent text-primary'
            : 'text-gray-400 hover:text-secondary'
        }`}
      >
        <Settings className="w-4 h-4" />
        <span>Settings</span>
      </button>
    </div>
  );

  const WatchHistoryTab = () => (
    <div className="space-y-4">
      {watchHistory.map((item) => (
        <div key={item.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
          <div className="flex space-x-4">
            <Link href={`/${item.type}/${item.id}`}>
              <Image
                src={item.poster}
                alt={item.title}
                width={80}
                height={120}
                className="rounded-lg object-cover"
              />
            </Link>
            
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <Link href={`/${item.type}/${item.id}`}>
                    <h3 className="text-lg font-semibold text-secondary hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="flex items-center space-x-3 text-sm text-gray-400 mt-1">
                    <span className="capitalize bg-gray-700 px-2 py-1 rounded">
                      {item.type}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <span>•</span>
                    <span>Watched {formatDate(item.watchedAt)}</span>
                  </div>
                </div>
                
                <button className="text-gray-400 hover:text-secondary transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{formatProgress(item.progress)} complete</span>
                  <span>{item.duration} min</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                {item.progress < 100 ? (
                  <button className="bg-accent text-primary px-4 py-2 rounded font-medium hover:bg-accent/80 transition-colors text-sm">
                    Continue Watching
                  </button>
                ) : (
                  <button className="bg-gray-600 text-secondary px-4 py-2 rounded font-medium hover:bg-gray-500 transition-colors text-sm">
                    Watch Again
                  </button>
                )}
                <button className="bg-gray-600 text-secondary px-4 py-2 rounded font-medium hover:bg-gray-500 transition-colors text-sm">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const WatchlistTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {watchlist.map((item) => (
        <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
          <Link href={`/${item.type}/${item.id}`}>
            <div className="relative aspect-[2/3]">
              <Image
                src={item.poster}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
                <Star className="w-4 h-4 text-accent fill-current" />
                <span className="text-secondary text-sm font-medium">{item.rating}</span>
              </div>
            </div>
          </Link>
          
          <div className="p-4">
            <Link href={`/${item.type}/${item.id}`}>
              <h3 className="font-semibold text-secondary mb-2 hover:text-accent transition-colors line-clamp-2">
                {item.title}
              </h3>
            </Link>
            <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
              <span className="capitalize">{item.type}</span>
              <span>{formatDate(item.releaseDate)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-3">Added {formatDate(item.addedAt)}</p>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-accent text-primary py-2 rounded font-medium hover:bg-accent/80 transition-colors text-sm">
                Watch Now
              </button>
              <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition-colors">
                <Heart className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const SettingsTab = () => (
    <div className="space-y-8">
      {/* Account Settings */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-secondary mb-6">Account Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-secondary font-medium">Personal Information</div>
                <div className="text-sm text-gray-400">Update your name, email, and profile picture</div>
              </div>
            </div>
            <button className="text-accent hover:text-accent/80 transition-colors">
              Edit
            </button>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-secondary font-medium">Notifications</div>
                <div className="text-sm text-gray-400">Manage your notification preferences</div>
              </div>
            </div>
            <button className="text-accent hover:text-accent/80 transition-colors">
              Configure
            </button>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <Download className="w-5 h-5 text-gray-400" />
              <div>
                <div className="text-secondary font-medium">Download Quality</div>
                <div className="text-sm text-gray-400">Set your preferred download quality</div>
              </div>
            </div>
            <button className="text-accent hover:text-accent/80 transition-colors">
              Adjust
            </button>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-secondary mb-6">Subscription</h3>
        <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg border border-accent/30">
          <div className="flex items-center space-x-3">
            <Crown className="w-6 h-6 text-accent" />
            <div>
              <div className="text-secondary font-medium">Premium Plan</div>
              <div className="text-sm text-gray-400">$12.99/month • Renews on Jan 15, 2024</div>
            </div>
          </div>
          <button className="flex items-center space-x-2 bg-accent text-primary px-4 py-2 rounded font-medium hover:bg-accent/80 transition-colors">
            <CreditCard className="w-4 h-4" />
            <span>Manage</span>
          </button>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-secondary mb-6">Privacy & Security</h3>
        <div className="space-y-4">
          <button className="w-full text-left flex items-center justify-between py-3 border-b border-gray-700">
            <span className="text-secondary">Change Password</span>
            <span className="text-accent">→</span>
          </button>
          <button className="w-full text-left flex items-center justify-between py-3 border-b border-gray-700">
            <span className="text-secondary">Privacy Settings</span>
            <span className="text-accent">→</span>
          </button>
          <button className="w-full text-left flex items-center justify-between py-3">
            <span className="text-red-400">Delete Account</span>
            <span className="text-red-400">→</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Tab Navigation */}
        <TabNavigation />

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'history' && <WatchHistoryTab />}
          {activeTab === 'watchlist' && <WatchlistTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;