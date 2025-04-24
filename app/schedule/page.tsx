'use client'

import Navbar from '../components/Navbar'

export default function Schedule() {
  return (
    <main className="dark:bg-ink-1000 relative min-h-screen bg-canvas-0 font-serif text-ink-900 transition-colors duration-300 dark:text-ink-100">
      <Navbar />

      <div className="mx-auto mb-16 mt-12 max-w-3xl space-y-4 px-6 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Schedule
        </h1>
        <div>
          <p>June 6-8, the full schedule for 2025 is coming soon!</p>
          <p>Subject to change, it will be something like...</p>
          <br />
          <div className="text-left">
            <p>
              <b>Friday:</b> 2pm doors open, 3pm-6pm talks & events, 5pm-7pm
              dinner, 7pm - 11pm night market & futuristic career fair.{' '}
            </p>
            <br />
            <p>
              <b>Saturday:</b> 9am-11pm talks, events, lunch, & dinner. VIP
              dinner. Pitch competition.{' '}
            </p>
            <br />
            <p>
              <b>Sunday:</b> 9am-8pm talks, events, lunch, & dinner. Hangouts
              and events late into the night.{' '}
            </p>
            <br />
          </div>
          <p>
            <a
              href="/schedule-manifest-2024.pdf"
              className="text-primary-700 hover:text-primary-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>See last year's schedule for reference.</i>
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
