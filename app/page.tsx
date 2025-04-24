'use client'

import Image from "next/image";
import speakers from "./data/speakers";
import SpeakerCard from "./components/speaker-card";
import Section from "./components/ui/Section";
import Navbar from "./components/Navbar";
import staff from "./data/staff";
import sponsors from "./data/sponsors";
import Gallery from "./components/ui/Gallery";
import SubstackCarousel from "./components/ui/substack-carousel";

const MANIFEST_ATTEND_SLUG =
  "which-users-will-attend-manifest-20-2ud9IuN5U6"

const testimonials = [
  {
    text: "The Manifest conference has been a successful experiment: put enough introverts with common interests into a confined space and they'll spontaneously turn into extroverts.",
    author: "Byrne Hobart",
    link: "https://x.com/ByrneHobart/status/1799963459658154203"
  },
  {
    text: "For much of my life, I have poured my attention into tough-to-explain solitary pursuits, finding myself often sitting in quiet corners on the fringes of gatherings wondering if they're worth the effort. Not so last weekend.",
    author: "TracingWoodgrains",
    link: "https://x.com/tracewoodgrains/status/1800790146633138395"
  },
  {
    text: "It's hard to describe the vibe at Manifest unless you were there. But it was part Burning Man, part prediction market science fair, part middle school talent show. It was utterly delightful.",
    author: "Devansh Mehta",
    link: "https://twitter.com/TheDevanshMehta/status/1800289126085951563"
  }
];

export default function Page() {
  return (
    <main className="relative bg-canvas-0 text-ink-900 dark:bg-ink-1000 dark:text-ink-100 font-serif min-h-screen transition-colors duration-300">
      <Navbar />

      <section className="text-center space-y-4 mb-16 mt-12 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Manifest 2025</h1>
        <p className="italic text-lg">
          A festival for forecasting, markets, AI, and novel ideas hosted by{' '}
          <a href="https://manifold.markets" className="underline hover:text-primary-600">Manifold</a> and{' '}
          <a href="https://manifund.org" className="underline hover:text-primary-600">Manifund</a>.
        </p>
        <p className="text-md">June 6–8 · Lighthaven, Berkeley, California</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.havenbookings.space/festival-season"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary-600 text-white rounded border border-primary-600 hover:bg-primary-700 transition"
          >
            Buy Tickets
          </a>
          <a
            href="https://manifold.markets/topic/manifest"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-primary-600 text-primary-600 rounded hover:bg-primary-700 hover:text-white transition"
          >
            Start Predicting
          </a>
        </div>
      </section>

      <Section id="speakers" title="Notable Guests" className="mb-20">
        <p className="text-center text-ink-600 mb-6">
          All have express intent to attend, most will be speaking, for fun we've included the{' '}
          <a 
            href="https://manifold.markets/RickiHeicklen/which-users-will-attend-manifest-20-2ud9IuN5U6"
            className="underline italic hover:text-primary-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manifold market odds
          </a>
          {' '}of them actually showing up.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakers.map((s) => (
            <SpeakerCard
              key={s.answerId}
              name={s.name}
              bio={s.bio}
              image={s.image}
              marketSlug={MANIFEST_ATTEND_SLUG}
              answerId={s.answerId}
            />
          ))}
        </div>
      </Section>

      <Section id="sponsors" title="Sponsors">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 place-items-center max-w-3xl mx-auto">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="h-9 flex items-center">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={200}
                  height={36}
                  className="object-contain h-full w-auto"
                />
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section id="testimonials" title="Rave Reviews" className="mb-20">
        <SubstackCarousel />
        <div className="max-w-prose mx-auto px-6 font-serif text-[15px] leading-relaxed text-ink-900 dark:text-ink-100 space-y-10 mt-12">
          {testimonials.map((quote, i) => (
            <p key={i} className="italic">
              "{quote.text}" — {quote.link ? (
                <a 
                  href={quote.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 text-primary-700 hover:underline"
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
        <p className="text-center text-sm text-ink-600 dark:text-ink-400">
          Futuristic career fair, immersive experiences, secret projects, and weird delights.{' '}
          <a className="underline" href="https://airtable.com/shrxX8lz0P2D0hVbD" target="_blank">
            Apply for a booth →
          </a>
        </p>
      </Section>

      <Section id="festivalseason" title="Festival Season">
        <p className="text-center text-sm text-ink-600 dark:text-ink-400">
          Manifest is part of a week of connected events in the Bay.{' '}
          <a className="underline" href="https://www.havenbookings.space/festival-season" target="_blank">
            View the calendar →
          </a>
        </p>
      </Section>

      <Section id="faq" title="FAQ">
        <p className="text-center text-sm text-ink-600 dark:text-ink-400">
          Coming soon. For now, you can email us with questions.
        </p>
      </Section>

      <Section id="contact" title="Contact the Team" className="mb-10">
        <div className="grid grid-flow-col justify-center gap-6 mb-6">
          {staff.map((s) => (
            <SpeakerCard
              key={s.name}
              name={s.name}
              bio={s.bio}
              image={s.image}
              email={s.email}
            />
          ))}
        </div>
        <p className="text-center mt-6">
          Want to sponsor Manifest 2025?{' '}
          <a 
            href="https://docs.google.com/document/d/10edfRza-_i5927dLcQHRKG-n-Y8qidadTYvxFNuGvAg/edit?usp=sharing" 
            className="text-primary-700 hover:underline hover:text-primary-600"
          >
            Take a look at our sponsor prospectus.
          </a>
        </p>
        <p className=" text-ink-600 dark:text-ink-400 text-center">
          Join the <a className="hover:underline hover:text-primary-600 text-primary-700" href="https://discord.gg/manifest">Discord</a>!
        </p>
      </Section>
    </main>
  )
}
