import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable standalone output for Docker
  output: 'standalone',
  
  typescript: {
    // Allow production builds to pass even if there are type errors
    // Remove this line after fixing all TypeScript issues
    ignoreBuildErrors: false,
  },
  eslint: {
    // Allow production builds to pass even if there are ESLint errors
    // This will treat warnings as warnings instead of errors during build
    ignoreDuringBuilds: false,
  },
  images: {
    // Configure domains for next/image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Add image optimization for better performance
    formats: ['image/webp', 'image/avif'],
  },
  // Disable experimental features that might cause issues
  // experimental: {
  //   optimizeCss: true,
  // },
};

export default nextConfig;
