// app/page.tsx
'use client'

import Image from "next/image";
import speakers from "./data/speakers";
import Kindwords from "./data/kindwords";
import SpeakerCard from "./components/speaker-card";
import Quote from "./components/ui/Quote";

export default function Page() {
  return (
    <main className="relative bg-canvas-0 text-ink-900 dark:bg-ink-1000 dark:text-ink-100 font-serif min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className="flex justify-center gap-6 text-sm py-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#speakers" className="hover:underline">Speakers</a>
        <a href="#sponsors" className="hover:underline">Sponsors</a>
        <a href="#kindwords" className="hover:underline">Kind Words</a>
        <a href="#tickets" className="hover:underline">Tickets</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      {/* floating gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-80px] left-[10%] w-72 h-72 bg-primary-600 rounded-full opacity-20 blur-3xl animate-float-slow" />
        <div className="absolute top-[40%] right-[5%] w-48 h-48 bg-purple-300 rounded-full opacity-20 blur-2xl animate-float" />
        <div className="absolute bottom-[-60px] left-[40%] w-64 h-64 bg-fuchsia-400 rounded-full opacity-10 blur-3xl animate-float" />
      </div>

      {/* Hero */}
      <section className="text-center space-y-4 mb-16 mt-12 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Manifest 2025</h1>
        <p className="italic text-lg">
          A festival for forecasting, markets, AI, and novel ideas hosted by{' '}
          <a href="https://manifold.markets" className="underline hover:text-primary-600">Manifold</a> and{' '}
          <a href="https://manifund.org" className="underline hover:text-primary-600">Manifund</a>.
        </p>
        <p className="text-md">June 6–8 · Lighthaven, Berkeley</p>
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
            className="px-4 py-2 border border-primary-600 text-primary-600 rounded hover:bg-primary-600 hover:text-white transition"
          >
            Start Predicting
          </a>
        </div>
      </section>

{/* Predicted Attending Guests */}
<section id="speakers" className="mb-20 max-w-5xl mx-auto px-6">
  <h2 className="text-2xl font-bold mb-6 text-center">Predicted Attending Guests</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    {speakers.map((s, i) => (
      <SpeakerCard
        key={i}
        name={s.name}
        bio={s.bio}
        image={s.image}
        marketSlug={s.marketSlug}
      />
    ))}
  </div>
</section>



      {/* Kind Words */}
      <section id="kindwords" className="mb-20 max-w-3xl mx-auto px-6">
  <Quote />
</section>

      {/* Sponsors */}
      <section id="sponsors" className="mb-16 max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold mb-6 text-center">Sponsors</h2>
        <p className="text-center text-sm text-ink-600 dark:text-ink-400">Coming soon — interested? Email <a className="underline" href="mailto:manifest@manifold.markets">manifest@manifold.markets</a></p>
      </section>

      {/* Night Market */}
      <section id="nightmarket" className="mb-16 max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold mb-6 text-center">Night Market</h2>
        <p className="text-center text-sm text-ink-600 dark:text-ink-400">Immersive experiences, secret projects, and weird delights. <a className="underline" href="https://airtable.com/shrxX8lz0P2D0hVbD" target="_blank">Apply for a booth →</a></p>
      </section>

      {/* Festival Season */}
      <section id="festivalseason" className="mb-16 max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold mb-6 text-center">Festival Season</h2>
        <p className="text-center text-sm text-ink-600 dark:text-ink-400">Manifest is part of a week of connected events in the Bay. <a className="underline" href="https://www.havenbookings.space/festival-season" target="_blank">View the calendar →</a></p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16 max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold mb-6 text-center">FAQ</h2>
        <p className="text-center text-sm text-ink-600 dark:text-ink-400">Coming soon. For now, you can email us with questions.</p>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-16 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-xl font-bold mb-6">Contact</h2>
        <p className="text-sm text-ink-600 dark:text-ink-400">
          manifest@manifold.markets<br />
          Or join the <a className="underline" href="https://discord.gg/manifest">Discord</a>.
        </p>
      </section>
    </main>
  )
}



