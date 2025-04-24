interface Sponsor {
  name: string
  image: string
  url?: string
}

const sponsors: Sponsor[] = [
  {
    name: 'Polymarket',
    image: '/images/sponsors/polymarket-logo.svg',
    url: 'https://polymarket.com',
  },
  {
    name: 'Substack',
    image: '/images/sponsors/substack-logo.png',
    url: 'https://substack.com',
  },
  {
    name: 'Sovereign',
    image: '/images/sponsors/sovereign-logo.svg',
  },
  {
    name: 'Elicit',
    image: '/images/sponsors/elicit-logo-green.png',
    url: 'https://elicit.com/careers',
  },
]

export default sponsors
