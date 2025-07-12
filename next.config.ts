import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // TODO: handle remote profile pictures or upload them properly on backend
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'transitivebullsh.it'
      }
    ]
  }
}

export default nextConfig
