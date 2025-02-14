/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external image domains here if needed
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Enable SWC minification
  swcMinify: true,
}

module.exports = nextConfig 