/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/2024',
        destination: '/2024/index.html',
      },
      {
        source: '/2023',
        destination: '/2023/index.html',
      },
      {
        source: '/2023/schedule',
        destination: '/2023/schedule.html',
      },
      {
        source: '/2023/speakers',
        destination: '/2023/speakers.html',
      },
      {
        source: '/2023/tickets',
        destination: '/2023/tickets.html',
      },
      {
        source: '/2023/contact',
        destination: '/2023/contact.html',
      },
      {
        source: '/2023/suggest-sessions',
        destination: '/2023/suggest-sessions.html',
      },
    ]
  },
}

module.exports = nextConfig
