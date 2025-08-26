import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedContent from '@/components/FeaturedContent';
import NewReleases from '@/components/NewReleases';
import LiveStreams from '@/components/LiveStreams';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <FeaturedContent />
        </div>
      </section>

      {/* New Releases */}
      <section className="py-12 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <NewReleases />
        </div>
      </section>

      {/* Live Streams */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <LiveStreams />
        </div>
      </section>
    </div>
  );
}