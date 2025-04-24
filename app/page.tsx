'use client'

import Image from 'next/image'
import Navbar from './components/Navbar'
import SpeakerCard from './components/speaker-card'
import Gallery from './components/ui/Gallery'
import Section from './components/ui/Section'
import SubstackCarousel from './components/ui/substack-carousel'
import speakers from './data/speakers'
import sponsors from './data/sponsors'
import staff from './data/staff'

const MANIFEST_ATTEND_SLUG = 'which-users-will-attend-manifest-20-2ud9IuN5U6'

const testimonials = [
  {
    text: "The Manifest conference has been a successful experiment: put enough introverts with common interests into a confined space and they'll spontaneously turn into extroverts.",
    author: 'Byrne Hobart',
    link: 'https://x.com/ByrneHobart/status/1799963459658154203',
  },
  {
    text: "For much of my life, I have poured my attention into tough-to-explain solitary pursuits, finding myself often sitting in quiet corners on the fringes of gatherings wondering if they're worth the effort. Not so last weekend.",
    author: 'TracingWoodgrains',
    link: 'https://x.com/tracewoodgrains/status/1800790146633138395',
  },
  {
    text: "It's hard to describe the vibe at Manifest unless you were there. But it was part Burning Man, part prediction market science fair, part middle school talent show. It was utterly delightful.",
    author: 'Devansh Mehta',
    link: 'https://twitter.com/TheDevanshMehta/status/1800289126085951563',
  },
]

export default function Page() {
  return (
    <main className="dark:bg-ink-1000 relative min-h-screen bg-canvas-0 font-serif text-ink-900 transition-colors duration-300 dark:text-ink-100">
      <Navbar />

      <section className="mx-auto mb-16 mt-12 max-w-3xl space-y-4 px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Manifest 2025
        </h1>
        <p className="text-xl font-extralight">
          A festival for forecasting, markets, AI, and novel ideas.
          <br />
          Hosted by{' '}
          <a
            href="https://manifold.markets"
            className="underline hover:text-primary-600"
          >
            Manifold
          </a>{' '}
          and{' '}
          <a
            href="https://manifund.org"
            className="underline hover:text-primary-600"
          >
            Manifund
          </a>
          .
        </p>
        <p className="text-md">June 6–8 · Lighthaven, Berkeley, California</p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://www.havenbookings.space/festival-season"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-primary-600 bg-primary-600 px-4 py-2 text-white transition hover:bg-primary-700"
          >
            Buy Tickets
          </a>
          <a
            href="https://manifold.markets/topic/manifest"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-primary-600 px-4 py-2 text-primary-600 transition hover:bg-primary-700 hover:text-white"
          >
            Start Predicting
          </a>
        </div>
      </section>

      <Section id="speakers" title="Notable Guests" className="mb-20">
        <p className="text-ink-600 mb-6 text-center">
          All have expressed intent to attend & most will be speaking. For fun,
          we've included the{' '}
          <a
            href="https://manifold.markets/RickiHeicklen/which-users-will-attend-manifest-20-2ud9IuN5U6"
            className="underline hover:text-primary-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manifold market odds
          </a>{' '}
          of them showing up.
        </p>
        <div className="grid grid-cols-2 gap-3 px-2 sm:grid-cols-3 sm:gap-6 sm:px-0 lg:grid-cols-4">
          {speakers.map((s) => (
            <div key={s.answerId} className="mx-auto w-full max-w-[224px]">
              <SpeakerCard
                name={s.name}
                bio={s.bio}
                image={s.image}
                marketSlug={MANIFEST_ATTEND_SLUG}
                answerId={s.answerId}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section id="sponsors" title="Sponsors">
        <div className="mx-auto grid max-w-3xl grid-cols-2 place-items-center gap-12 sm:grid-cols-3">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex h-9 items-center">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={200}
                  height={36}
                  className="h-full w-auto object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="testimonials" title="Rave Reviews" className="mb-20">
        <SubstackCarousel />
        <div className="mx-auto mt-12 max-w-prose space-y-10 px-6 font-serif text-[15px] leading-relaxed text-ink-900 dark:text-ink-100">
          {testimonials.map((quote, i) => (
            <p key={i} className="italic">
              "{quote.text}" —{' '}
              {quote.link ? (
                <a
                  href={quote.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 hover:text-primary-600 hover:underline"
                >
                  {quote.author}
                </a>
              ) : (
                quote.author
              )}
            </p>
          ))}
        </div>
      </Section>

      <Section id="gallery" title="Gallery">
        <Gallery />
      </Section>

      <Section id="nightmarket" title="Night Market">
        <div className="mx-auto max-w-prose">
          <p className="text-ink-600 dark:text-ink-400 text-center text-sm">
            Futuristic career fair, immersive experiences, secret projects, and
            weird delights. Lighthaven will open its doors for free entry during
            the Night Market.{' '}
            <a
              className="underline"
              href="https://airtable.com/shrxX8lz0P2D0hVbD"
              target="_blank"
            >
              Apply for a booth →
            </a>
          </p>
        </div>
      </Section>

      <Section id="festivalseason" title="Festival Season">
        <div className="mx-auto max-w-prose">
          <p className="text-ink-600 dark:text-ink-400 text-center text-sm">
            Manifest is part of a week of connected events in the Bay.{' '}
            <a
              className="underline"
              href="https://www.havenbookings.space/festival-season"
              target="_blank"
            >
              View the calendar →
            </a>
          </p>
        </div>
      </Section>

      {/* <Section id="faq" title="FAQ">
        <div className="max-w-prose mx-auto">
          <p className="text-center text-sm text-ink-600 dark:text-ink-400">
            Coming soon. For now, you can email us with questions.
          </p>
        </div>
      </Section> */}

      <Section id="contact" title="Contact the Team" className="mb-10">
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          {staff.map((s) => (
            <div key={s.name} className="w-[224px]">
              <SpeakerCard
                name={s.name}
                bio={s.bio}
                image={s.image}
                email={s.email}
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center">
          Want to sponsor Manifest 2025?{' '}
          <a
            href="https://docs.google.com/document/d/10edfRza-_i5927dLcQHRKG-n-Y8qidadTYvxFNuGvAg/edit?usp=sharing"
            className="text-primary-700 hover:text-primary-600 hover:underline"
          >
            Take a look at our sponsor prospectus.
          </a>
        </p>
        <p className="text-ink-600 dark:text-ink-400 text-center">
          Join the{' '}
          <a
            className="text-primary-700 hover:text-primary-600 hover:underline"
            href="https://discord.gg/manifest"
          >
            Discord
          </a>
          !
        </p>
      </Section>
    </main>
  )
}
