import type { Metadata } from 'next'
import AttendeeGuide from './AttendeeGuide'

export const metadata: Metadata = {
  title: 'Manifest 2026 Attendee Guide',
  description:
    'Everything you need to know before arriving at Manifest 2026: venue, schedule, food, policies, and more.',
  openGraph: {
    title: 'Manifest 2026 Attendee Guide',
    description:
      'Everything you need to know before arriving at Manifest 2026: venue, schedule, food, policies, and more.',
    images: [
      {
        url: '/images/attendeeguide/cover.png',
        width: 1600,
        height: 900,
        alt: 'Manifest 2026 Attendee Guide',
      },
    ],
  },
}

export default function Page() {
  return <AttendeeGuide />
}
