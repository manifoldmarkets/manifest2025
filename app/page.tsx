import Image from 'next/image'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SpeakerCard from './components/speaker-card'
import ImageGallery from './components/ui/ImageGallery'
import Section from './components/ui/Section'
import SubstackCarousel from './components/ui/substack-carousel'
import speakers, { additionalSpeakers } from './data/speakers'
import sponsors, { SPONSOR_SIZES } from './data/sponsors'
import staff from './data/staff'
import { getAnswerProbabilities } from './lib/probabilities'

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

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Page() {
  const answerIds = speakers.map((s) => s.answerId).filter(Boolean) as string[]
  const probabilities = await getAnswerProbabilities(
    MANIFEST_ATTEND_SLUG,
    answerIds
  )

  return (
    <main className="dark:bg-ink-1000 relative min-h-screen bg-canvas-0 font-serif text-ink-900 transition-colors duration-300 dark:text-ink-100">
      <Navbar />
      <Hero />

      <Section id="speakers" title="Notable Guests" className="mb-20">
        <p className="text-ink-600 mb-6 text-center">
          They told us they're coming -{' '}
          <a
            href="https://manifold.markets/RickiHeicklen/which-users-will-attend-manifest-20-2ud9IuN5U6"
            className="text-primary-600 hover:text-primary-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            bet on
          </a>{' '}
          whether they will!
        </p>
        <div className="grid grid-cols-2 gap-3 px-2 sm:grid-cols-3 sm:gap-6 sm:px-0 lg:grid-cols-5">
          {speakers.map((s) => (
            <div key={s.answerId} className="mx-auto w-full max-w-[224px]">
              <SpeakerCard
                name={s.name}
                bio={s.bio}
                image={s.image}
                marketSlug={MANIFEST_ATTEND_SLUG}
                answerId={s.answerId}
                probability={
                  s.answerId ? (probabilities?.[s.answerId] ?? null) : null
                }
              />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-ink-600 mb-6 text-center">Plus good odds on:</p>
          <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3">
            {additionalSpeakers.map((name) => (
              <p key={name} className="text-center font-bold">
                {name}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section id="sponsors" title="Sponsors">
        <div className="mx-auto max-w-3xl space-y-12">
          {(['headline', 'platinum', 'gold', 'silver'] as const).map((tier) => {
            const tierSponsors = sponsors.filter((s) => s.tier === tier)
            if (tierSponsors.length === 0) return null
            return (
              <div key={tier} className="flex flex-col items-center gap-4">
                <p className="text-ink-600 font-medium capitalize">{tier}</p>
                <div className="flex flex-wrap justify-center gap-16">
                  {tierSponsors.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div
                        className={`flex ${SPONSOR_SIZES[tier]} items-center`}
                      >
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
              </div>
            )
          })}
        </div>
        <p className="mt-12 text-center">
          Want to sponsor Manifest 2025?
          <br />
          Take a look at our{' '}
          <a
            href="https://docs.google.com/document/d/10edfRza-_i5927dLcQHRKG-n-Y8qidadTYvxFNuGvAg/edit?usp=sharing"
            className="text-primary-700 hover:text-primary-600 hover:underline"
          >
            sponsor prospectus!
          </a>
        </p>
      </Section>

      <Section id="testimonials" title="Rave Reviews" dark>
        <SubstackCarousel />
        {/* <SubstackGallery /> */}

        <div className="mx-auto mt-12 max-w-prose space-y-10 px-6 font-serif text-[15px] leading-relaxed">
          {testimonials.map((quote, i) => (
            <p key={i}>
              <span className="text-xl">“{quote.text}”</span>
              <br />—{' '}
              {quote.link ? (
                <a
                  href={quote.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-blue-300 hover:underline"
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
        <ImageGallery />
      </Section>

      <Section id="nightmarket" title="Manifest Night Market" dark>
        <div className="mx-auto max-w-prose space-y-4">
          <p className="text-center">
            <strong>Friday, June 6 · 7–10 PM @ Lighthaven 🌙 </strong>
            <br />
            Free and open to the community
          </p>

          <p>
            The Night Market is back for the third year, an open-air evening
            celebration of all things markets. It's a chance to meet people,
            share ideas, see strange gadgets, and wander around in a
            transcendent twilight. A Very Bay Area World's Fair and, if you
            will, an attempt to manifest the futures.
          </p>

          <p>Previous markets included but not limited to:</p>

          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong>Job market:</strong> trade your skills for other skills,
              or find your next gig
            </li>
            <li>
              <strong>Stuff market:</strong> arts, crafts, foods
            </li>
            <li>
              <strong>Experience market:</strong> mini games, fortunes
            </li>
            <li>
              <strong>Book market:</strong> got a book? essay? poem?
            </li>
            <li>
              <strong>Information market:</strong> like a poster session,
              without the standards
            </li>
            <li>
              <strong>Black market:</strong> naming rights to a baby's middle
              name, "probiotics", etc. (all goods must still be legal!)
            </li>
          </ul>

          <div className="space-y-2 text-center">
            <a
              className="underline"
              href="https://airtable.com/apprhYrZf0T8NcmEp/pagE8CyXArEdGFnJm/form"
              target="_blank"
            >
              Interested in hosting a booth? → Apply here
            </a>
            <br />
            <a
              className="underline"
              href="https://airtable.com/apprhYrZf0T8NcmEp/pagUMQBnuJfuwxiEn/form"
              target="_blank"
            >
              Interested in the career fair portion? → Apply here
            </a>
          </div>
        </div>
      </Section>

      <Section id="festivalseason" title="Festival Season">
        <div className="mx-auto max-w-prose">
          <p className="text-ink-600 dark:text-ink-400 text-center">
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
        <p className="text-ink-600 dark:text-ink-400 mt-6 text-center">
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
