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
  async redirects() {
    return [
      {
        source: '/volunteer-guide',
        destination:
          'https://www.notion.so/manifoldmarkets/2026-Volunteer-Guide-Manifest-c6e54492ea7a83baa9e881d6b7356ad0?source=copy_link',
        permanent: false,
      },
      {
        source: '/map',
        destination: 'https://waypoint.lighthaven.space/e/manifest-2026/map',
        permanent: false,
      },
      {
        source: '/schedule',
        destination:
          'https://waypoint.lighthaven.space/e/manifest-2026/schedule',
        permanent: false,
      },
      {
        source: '/ticket',
        destination:
          'https://waypoint.lighthaven.space/e/manifest-2026/admission-qr',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/2024',
        destination: '/2024/index.html',
      },
      {
        source: '/2024/speakers',
        destination: '/2024/speakers.html',
      },
      {
        source: '/2024/tickets',
        destination: '/2024/tickets.html',
      },
      {
        source: '/2024/contact',
        destination: '/2024/contact.html',
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
      {
        source: '/pastsessions',
        destination: '/pastsessions/index.html',
      },
    ]
  },
}

module.exports = nextConfig
