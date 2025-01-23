/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.gettyimages.com', 'i.pinimg.com', 'imgs.search.brave.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**', // Updated to match any image size path
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
