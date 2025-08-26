/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['image.tmdb.org', 'via.placeholder.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/streaming-platform' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/streaming-platform/' : '',
}

module.exports = nextConfig