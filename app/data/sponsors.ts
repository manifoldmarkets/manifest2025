interface Sponsor {
  name: string
  image: string
  url?: string
  tier: 'headline' | 'platinum' | 'gold' | 'silver'
}

export const SPONSOR_SIZES = {
  headline: 'h-20 md:h-28',
  platinum: 'h-16 md:h-20',
  gold: 'h-12 md:h-16',
  silver: 'h-10 md:h-12',
}

const sponsors: Sponsor[] = [
  {
    name: 'Polymarket',
    image: '/images/sponsors/polymarket-logo.svg',
    url: 'https://polymarket.com',
    tier: 'headline',
  },
  {
    name: 'Substack',
    image: '/images/sponsors/substack-logo.png',
    url: 'https://substack.com',
    tier: 'platinum',
  },
  {
    name: 'Kalshi',
    image: '/images/sponsors/kalshi-logo.svg',
    url: 'https://kalshi.com',
    tier: 'platinum',
  },
  {
    name: 'Sovereign',
    image: '/images/sponsors/sovereign-logo.svg',
    tier: 'gold',
  },
  {
    name: 'Elicit',
    image: '/images/sponsors/elicit-logo-green.png',
    url: 'https://elicit.com/careers',
    tier: 'silver',
  },
]

export default sponsors
