/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org', 'via.placeholder.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/streaming-platform' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/streaming-platform/' : '',
  distDir: 'out',
}

module.exports = nextConfig