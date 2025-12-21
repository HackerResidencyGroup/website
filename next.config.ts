import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    // GSAP's JS files have implicit any types that fail strict checking
    ignoreBuildErrors: true
  },
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
