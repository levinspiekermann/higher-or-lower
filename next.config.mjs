/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-cdn.hypb.st'
      },
      {
        protocol: 'https',
        hostname: 'static.hiphopdx.com'
      },
      {
        protocol: 'https',
        hostname: 'babylonberlin.eu'
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co'
      }
    ]
  }
};

export default nextConfig;
