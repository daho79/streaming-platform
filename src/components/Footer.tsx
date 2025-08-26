import React from 'react';
import Link from 'next/link';
import { Play, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-accent p-2 rounded-lg">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-secondary">StreamFlix</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate streaming destination for movies, TV shows, and live content. 
              Unlimited entertainment at your fingertips.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Browse</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/movies" className="text-gray-400 hover:text-secondary transition-colors">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/tv-shows" className="text-gray-400 hover:text-secondary transition-colors">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="/live" className="text-gray-400 hover:text-secondary transition-colors">
                  Live Streams
                </Link>
              </li>
              <li>
                <Link href="/new-releases" className="text-gray-400 hover:text-secondary transition-colors">
                  New Releases
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-secondary transition-colors">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/watchlist" className="text-gray-400 hover:text-secondary transition-colors">
                  My Watchlist
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="text-gray-400 hover:text-secondary transition-colors">
                  Subscription
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-gray-400 hover:text-secondary transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-secondary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 StreamFlix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-secondary text-sm transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-secondary text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-secondary text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;