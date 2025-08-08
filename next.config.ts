import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Enable gzip compression
  compress: true,
  
  // Configure allowed development origins for cross-origin requests
  allowedDevOrigins: [
    '*.ngrok-free.app',
    '*.ngrok.io',
    'localhost',
    '127.0.0.1'
  ],
  
  // Disable experimental CSS optimization to avoid critters issue
  experimental: {
    // Remove optimizeCss to prevent critters dependency issue
    esmExternals: true,
  },
  
  // Alternative CSS optimization without critters
  swcMinify: true,
  optimizeFonts: true,
  
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
    // Add image optimization for better performance and SEO
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        // Allow PDF files to be embedded in iframes
        source: '/assets/certificate/(.*\\.pdf)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Add any redirects for old URLs here
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
