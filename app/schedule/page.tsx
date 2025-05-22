'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/ui/Section'

export interface Event {
  start: string // ISO – 2025-06-06T10:00
  end: string // ISO – 2025-06-06T10:30
  title: string
  description?: string
  speaker?: string
  location: string
}

/**
 * Hard‑coded room order + capacity ↓
 *      ────────────────────────────
 * Make sure your event.location matches one of these names.
 */
const ROOMS = [
  { name: 'Rat Park', capacity: 300 },
  { name: "Cantor's Diagonal Hall", capacity: 100 },
  { name: 'E1', capacity: 60 },
  { name: 'Exobrain', capacity: 30 },
  { name: 'Bayes Attic', capacity: 35 },
] as const

const DAYS = [
  { date: '2025-06-06', label: 'Friday, June 6' },
  { date: '2025-06-07', label: 'Saturday, June 7' },
  { date: '2025-06-08', label: 'Sunday, June 8' },
] as const

/**
 * Demo data – replace with real import.
 */
const events: Event[] = [
  {
    start: '2025-06-06T09:00',
    end: '2025-06-06T10:00',
    title:
      'Scouting for Truth:\nRobust Bayesian Truth Serum, Peer Prediction and Hidden Talent',
    description: 'tbd',
    speaker: 'Sarah Rainsberger',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T09:00',
    end: '2025-06-06T10:00',
    title: 'Forecasting Tournament Workshop',
    description: 'tbd',
    speaker: 'Jacob Lagerros',
    location: "Cantor's Diagonal Hall",
  },
  {
    start: '2025-06-06T09:00',
    end: '2025-06-06T10:00',
    title: 'Introduction to Manifold Markets',
    description: 'tbd',
    speaker: 'Austin Chen',
    location: 'E1',
  },
  {
    start: '2025-06-06T09:00',
    end: '2025-06-06T10:00',
    title: 'Getting Started with Metaculus',
    description: 'tbd',
    speaker: 'Ben Goldhaber',
    location: 'Exobrain',
  },
  {
    start: '2025-06-06T09:00',
    end: '2025-06-06T10:00',
    title: 'Calibration Games',
    description: 'tbd',
    speaker: 'Eva Vivalt',
    location: 'Bayes Attic',
  },
  {
    start: '2025-06-06T10:00',
    end: '2025-06-06T11:00',
    title: 'AI Welfare and Safety',
    description: 'tbd',
    speaker: 'Joe Carlsmith',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T10:00',
    end: '2025-06-06T11:00',
    title: 'Market Making Deep Dive',
    description: 'tbd',
    speaker: 'Robin Hanson',
    location: "Cantor's Diagonal Hall",
  },
  {
    start: '2025-06-06T10:00',
    end: '2025-06-06T11:00',
    title: 'Prediction Markets 101',
    description: 'tbd',
    speaker: 'David Manheim',
    location: 'E1',
  },
  {
    start: '2025-06-06T10:00',
    end: '2025-06-06T11:00',
    title: 'Forecasting Geopolitics',
    description: 'tbd',
    speaker: 'Juan Cambeiro',
    location: 'Exobrain',
  },
  {
    start: '2025-06-06T10:00',
    end: '2025-06-06T11:00',
    title: 'Superforecasting Basics',
    description: 'tbd',
    speaker: 'Tetlock Group',
    location: 'Bayes Attic',
  },
  {
    start: '2025-06-06T11:00',
    end: '2025-06-06T12:00',
    title: 'Market Design for the Future',
    description: 'tbd',
    speaker: 'Glen Weyl',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T11:00',
    end: '2025-06-06T12:00',
    title: 'Advanced Calibration',
    description: 'tbd',
    speaker: 'Scott Alexander',
    location: "Cantor's Diagonal Hall",
  },
  {
    start: '2025-06-06T11:00',
    end: '2025-06-06T12:00',
    title: 'Futuur Platform Demo',
    description: 'tbd',
    speaker: 'Futuur Team',
    location: 'E1',
  },
  {
    start: '2025-06-06T11:00',
    end: '2025-06-06T12:00',
    title: 'Polymarket Trading Strategies',
    description: 'tbd',
    speaker: 'Polymarket Team',
    location: 'Exobrain',
  },
  {
    start: '2025-06-06T11:00',
    end: '2025-06-06T12:00',
    title: 'Kalshi Exchange Workshop',
    description: 'tbd',
    speaker: 'Kalshi Team',
    location: 'Bayes Attic',
  },
  {
    start: '2025-06-06T12:00',
    end: '2025-06-06T13:00',
    title: 'Lunch & Networking',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T13:00',
    end: '2025-06-06T14:00',
    title: 'The Future of Forecasting',
    description: 'tbd',
    speaker: 'Philip Tetlock',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T13:00',
    end: '2025-06-06T14:00',
    title: 'Metaculus Track Record',
    description: 'tbd',
    speaker: 'Metaculus Team',
    location: "Cantor's Diagonal Hall",
  },
  {
    start: '2025-06-06T13:00',
    end: '2025-06-06T14:00',
    title: 'Automated Market Making',
    description: 'tbd',
    speaker: 'Robin Hanson',
    location: 'E1',
  },
  {
    start: '2025-06-06T13:00',
    end: '2025-06-06T14:00',
    title: 'Forecasting Tournaments',
    description: 'tbd',
    speaker: 'Good Judgment',
    location: 'Exobrain',
  },
  {
    start: '2025-06-06T13:00',
    end: '2025-06-06T14:00',
    title: 'Prediction Market Design',
    description: 'tbd',
    speaker: 'Manifold Team',
    location: 'Bayes Attic',
  },
  {
    start: '2025-06-06T14:00',
    end: '2025-06-06T15:00',
    title: 'Building Better Markets',
    description: 'tbd',
    speaker: 'Shaun Maguire',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T14:00',
    end: '2025-06-06T15:00',
    title: 'Forecasting AI Progress',
    description: 'tbd',
    speaker: 'Tamay Besiroglu',
    location: "Cantor's Diagonal Hall",
  },
  {
    start: '2025-06-06T14:00',
    end: '2025-06-06T15:00',
    title: 'Prediction Market Economics',
    description: 'tbd',
    speaker: 'Alex Tabarrok',
    location: 'E1',
  },
  {
    start: '2025-06-06T14:00',
    end: '2025-06-06T15:00',
    title: 'Forecasting Climate Change',
    description: 'tbd',
    speaker: 'Climate Team',
    location: 'Exobrain',
  },
  {
    start: '2025-06-06T14:00',
    end: '2025-06-06T15:00',
    title: 'Advanced Trading Workshop',
    description: 'tbd',
    speaker: 'Trading Team',
    location: 'Bayes Attic',
  },
  {
    start: '2025-06-06T15:00',
    end: '2025-06-06T16:00',
    title: 'Keynote: Future of Markets',
    description: 'tbd',
    speaker: 'Vitalik Buterin',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T15:00',
    end: '2025-06-06T16:00',
    title: 'Forecasting Platforms Panel',
    description: 'tbd',
    speaker: 'Platform Leaders',
    location: "Cantor's Diagonal Hall",
  },
  {
    start: '2025-06-06T15:00',
    end: '2025-06-06T16:00',
    title: 'Market Manipulation',
    description: 'tbd',
    speaker: 'Security Team',
    location: 'E1',
  },
  {
    start: '2025-06-06T15:00',
    end: '2025-06-06T16:00',
    title: 'Crypto & Prediction Markets',
    description: 'tbd',
    speaker: 'Crypto Team',
    location: 'Exobrain',
  },
  {
    start: '2025-06-06T15:00',
    end: '2025-06-06T16:00',
    title: 'Advanced Forecasting',
    description: 'tbd',
    speaker: 'Expert Panel',
    location: 'Bayes Attic',
  },
  {
    start: '2025-06-06T16:00',
    end: '2025-06-06T17:00',
    title: 'Closing Remarks',
    description: 'tbd',
    speaker: 'Conference Team',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T17:00',
    end: '2025-06-06T21:00',
    title: 'Night Market Social',
    location: 'Rat Park',
  },

  // June 7 events
  {
    start: '2025-06-07T09:00',
    end: '2025-06-07T10:30',
    title: 'Keynote: The Future of Prediction Markets',
    description: 'tbd',
    speaker: 'Vitalik Buterin',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T09:00',
    end: '2025-06-07T10:00',
    title: 'Advanced Market Making Workshop',
    description: 'tbd',
    speaker: 'Robin Hanson',
    location: "Cantor's Diagonal Hall",
  },
  {
    start: '2025-06-07T10:30',
    end: '2025-06-07T12:00',
    title: 'AI Alignment Panel',
    description: 'tbd',
    speaker: 'Emmett Shear, Paul Christiano, Ajeya Cotra',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T10:00',
    end: '2025-06-07T11:00',
    title: 'Forecasting Workshop',
    description: 'tbd',
    speaker: 'Philip Tetlock',
    location: "Cantor's Diagonal Hall",
  },
  {
    start: '2025-06-07T12:00',
    end: '2025-06-07T13:30',
    title: 'Lunch Break & Networking',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T13:30',
    end: '2025-06-07T15:00',
    title: 'The Science of Forecasting',
    description: 'tbd',
    speaker: 'Nate Silver',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T15:00',
    end: '2025-06-07T16:30',
    title: 'Effective Altruism & Forecasting',
    description: 'tbd',
    speaker: 'William MacAskill',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T16:30',
    end: '2025-06-07T18:00',
    title: 'Pitch Competition',
    description: 'tbd',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T19:00',
    end: '2025-06-07T22:00',
    title: 'VIP Dinner',
    location: 'Rat Park',
  },

  // June 8 events
  {
    start: '2025-06-08T09:00',
    end: '2025-06-08T10:30',
    title: 'The Psychology of Prediction',
    description: 'tbd',
    speaker: 'Scott Alexander',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T10:30',
    end: '2025-06-08T12:00',
    title: 'Longtermism & Markets',
    description: 'tbd',
    speaker: 'Toby Ord',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T12:00',
    end: '2025-06-08T13:30',
    title: 'Lunch & Lightning Talks',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T13:30',
    end: '2025-06-08T15:00',
    title: 'Future of Crypto Prediction Markets',
    description: 'tbd',
    speaker: 'SBF',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T15:00',
    end: '2025-06-08T16:30',
    title: 'Closing Panel: Future of Forecasting',
    description: 'tbd',
    speaker: 'Multiple Speakers',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T16:30',
    end: '2025-06-08T17:30',
    title: 'Closing Ceremony',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T17:30',
    end: '2025-06-08T22:00',
    title: 'Farewell Party',
    location: 'Rat Park',
  },
]

const EARLIEST_TIME = '08:00'
const LATEST_TIME = '22:00'
const SLOT_MINUTES = 30
const ROW_H = 40
const COL_W = 300
const HEADER_H = 56
const COLOURS = [
  ['#C3F0D8', '#A8E5C4'], // Green shades
  ['#D0E2FF', '#B8D1FF'], // Blue shades
  ['#FFE4E1', '#FFCDC7'], // Pink shades
  ['#FFF1C4', '#FFE9A0'], // Yellow shades
  ['#E5D8FF', '#D4C2FF'], // Purple shades
] as const

const timeToMin = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}
const isoToMin = (iso: string) => timeToMin(iso.split('T')[1].slice(0, 5))

export default function Schedule() {
  const [selected, setSelected] = useState<Event | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<string>(ROOMS[0].name)
  const [selectedDay, setSelectedDay] = useState<string>(DAYS[0].date)
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileView(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const earliest = timeToMin(EARLIEST_TIME)
  const totalSlots = (timeToMin(LATEST_TIME) - earliest) / SLOT_MINUTES

  const yFromMin = (m: number) => (m / SLOT_MINUTES) * ROW_H + HEADER_H

  const filteredEvents = events.filter((ev) => ev.start.startsWith(selectedDay))

  return (
    <main className="dark:bg-ink-1000 relative min-h-screen bg-canvas-0 font-serif text-ink-900 transition-colors duration-300 dark:text-ink-100">
      <Navbar />

      <section className="py-10 px-6">
        <div className="mb-6 flex justify-center">
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="border-ink-200 dark:border-ink-700 dark:bg-ink-800 mr-4 w-48 rounded-lg border bg-white px-4 py-2 text-sm"
          >
            {DAYS.map((day) => (
              <option key={day.date} value={day.date}>
                {day.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6 flex justify-center md:hidden">
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="border-ink-200 dark:border-ink-700 dark:bg-ink-800 w-64 rounded-lg border bg-white px-4 py-2 text-sm"
          >
            {ROOMS.map((room) => (
              <option key={room.name} value={room.name}>
                {room.name} (max {room.capacity})
              </option>
            ))}
          </select>
        </div>

        {isMobileView ? (
          <div className="space-y-4">
            {filteredEvents
              .filter((ev) => ev.location === selectedRoom)
              .sort((a, b) => isoToMin(a.start) - isoToMin(b.start))
              .map((ev, idx) => (
                <div
                  key={idx}
                  className="dark:border-ink-700 dark:bg-ink-800 w-full rounded-lg border bg-white p-4 text-left shadow"
                >
                  <div className="text-ink-500 dark:text-ink-400 mb-2 text-sm">
                    {new Date(ev.start).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}{' '}
                    –{' '}
                    {new Date(ev.end).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                  <p className="text-lg font-semibold">{ev.title}</p>
                  {ev.speaker && (
                    <p className="text-ink-600 dark:text-ink-400 mt-1 text-sm font-semibold">
                      {ev.speaker}
                    </p>
                  )}
                  {ev.description && (
                    <p className="text-ink-600 dark:text-ink-400 mt-1 text-sm">
                      {ev.description}
                    </p>
                  )}
                </div>
              ))}
            {filteredEvents.filter((ev) => ev.location === selectedRoom)
              .length === 0 && (
              <p className="text-ink-500 dark:text-ink-400 text-center">
                No events scheduled for this room.
              </p>
            )}
          </div>
        ) : (
          <div className="flex justify-center">
            <div
              className="relative border-l border-t pl-16"
              style={{
                width: ROOMS.length * COL_W,
                height: totalSlots * ROW_H + HEADER_H,
              }}
            >
              <div className="hidden md:block">
                {ROOMS.map((room, i) => (
                  <div
                    key={room.name}
                    className="absolute top-0"
                    style={{ left: i * COL_W, width: COL_W }}
                  >
                    <div className="bg-ink-50 dark:bg-ink-800 flex h-14 flex-col items-center justify-center gap-0.5 border-b border-r px-2 text-center">
                      <span className="line-clamp-1 text-sm font-semibold leading-tight">
                        {room.name}
                      </span>
                      <span className="text-[11px] opacity-70">
                        max {room.capacity}
                      </span>
                    </div>
                    <div className="bg-ink-200 dark:bg-ink-700 absolute bottom-0 right-0 top-14 w-px" />
                  </div>
                ))}
              </div>

              {Array.from({ length: totalSlots + 1 }).map((_, i) => {
                const minutes = earliest + i * SLOT_MINUTES
                const h = `${Math.floor(minutes / 60)}`.padStart(2, '0')
                const m = `${minutes % 60}`.padStart(2, '0')
                return (
                  <React.Fragment key={i}>
                    <div
                      className="dark:border-ink-800 absolute left-0 right-0 border-b border-dashed border-ink-100"
                      style={{ top: HEADER_H + i * ROW_H }}
                    />
                    <div
                      className="text-ink-500 dark:text-ink-400 absolute -left-16 w-14 text-right text-xs"
                      style={{ top: HEADER_H + i * ROW_H - 7 }}
                    >
                      {h}:{m}
                    </div>
                  </React.Fragment>
                )
              })}

              {filteredEvents.map((ev, idx) => {
                const col = ROOMS.findIndex((r) => r.name === ev.location)
                if (col === -1) return null // skip unknown location

                const startMin = isoToMin(ev.start) - earliest
                const endMin = isoToMin(ev.end) - earliest
                const top = yFromMin(startMin)
                const height = ((endMin - startMin) / SLOT_MINUTES) * ROW_H
                const bg =
                  COLOURS[col % COLOURS.length][Math.floor(startMin / 60) % 2]

                return (
                  <button
                    key={idx}
                    onClick={() => setSelected(ev)}
                    className="absolute mx-1 cursor-pointer overflow-hidden rounded-lg p-2 text-left shadow transition-all duration-200 hover:z-10 hover:scale-[1.02] hover:shadow-lg hover:brightness-95"
                    style={{
                      left: col * COL_W,
                      top,
                      height,
                      width: COL_W - 2,
                      backgroundColor: bg,
                    }}
                  >
                    <div className="line-clamp-2 text-sm font-semibold leading-snug">
                      {ev.title}
                    </div>
                    {ev.speaker && (
                      <div className="mt-0.5 line-clamp-1 text-xs opacity-80">
                        {ev.speaker}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </section>

      {/* Modal - Only show in desktop view */}
      {!isMobileView && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg dark:bg-ink-900"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-1 font-serif text-lg font-bold">
              {selected.title}
            </h2>
            {selected.speaker && (
              <p className="text-ink-700 dark:text-ink-300 mb-3 font-medium">
                {selected.speaker}
              </p>
            )}
            <p className="text-ink-600 dark:text-ink-400 mb-3 text-sm">
              {new Date(selected.start).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}{' '}
              –{' '}
              {new Date(selected.end).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
            {selected.description && (
              <p className="text-sm">{selected.description}</p>
            )}
            <button
              onClick={() => setSelected(null)}
              className="mt-6 rounded-md bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
