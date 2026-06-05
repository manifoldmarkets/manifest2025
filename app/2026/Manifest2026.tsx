'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const TICKETHOLDER_MARKET_URL =
  'https://manifold.markets/strutheo/which-users-will-attend-a-manifest-IARLlNI5L8'

type Person = { name: string; role: string; image: string }
type Ticketholder = Person & { answerId: string }

const confirmedSpeakers: Person[] = [
  { name: 'Patrick McKenzie', role: 'patio11', image: '/images/speakers/patrick.jpg' },
  { name: 'Scott Alexander', role: 'Astral Codex Ten', image: '/images/speakers/scott.jpg' },
  { name: 'Chris Best', role: 'CEO, Substack', image: '/images/speakers/chris.jpg' },
  { name: 'Emmett Shear', role: 'CEO, Softmax', image: '/images/2026/guests/emmett-shear.webp' },
  { name: 'Robin Hanson', role: 'George Mason University', image: '/images/speakers/robin.jpg' },
  // { name: 'Tracing Woodgrains', role: '@TracingWoodgrains, Writer', image: '/images/2026/guests/tracing-woodgrains.jpg' },
  { name: 'Jasmine Sun', role: 'Writer', image: '/images/2026/guests/jasmine-sun.jpg' },
  { name: 'Sam Hammond', role: 'FAI', image: '/images/2026/guests/sam-hammond.jpg' },
  { name: 'Anthony Giovanetti', role: 'Slay the Spire', image: '/images/2026/guests/anthony-giovanetti.png' },
  // { name: 'Bentham’s Bulldog', role: '@Bentham’sBulldog, blogger', image: '/images/2026/guests/benthams-bulldog.jpg' },
  // { name: 'Byrne Hobart', role: 'The Diff', image: '/images/speakers/byrne.jpg' },
  { name: 'Chad Jones', role: 'Economist, Stanford', image: '/images/2026/guests/chad-jones.jpg' },
  // { name: 'Richard Yetter Chappell', role: 'Good Thoughts', image: '/images/2026/guests/richard-yetter-chappell.jpg' },
  // { name: 'Aydin Mohseni', role: 'Philosopher of science and Bayesian epistemologist, CMU', image: '/images/2026/guests/aydin-mohseni.jpg' },
  { name: 'David Oks', role: 'Writer', image: '/images/2026/guests/david-oks.png' },
  { name: 'Scott Sumner', role: 'Economist', image: '/images/2026/guests/scott-sumner.jpg' },
  { name: 'Destiny', role: 'Streamer', image: '/images/2026/guests/destiny.jpg' },
  { name: 'Sreeram Kannan', role: 'Eigen Labs', image: '/images/2026/guests/sreeram-kannan.png' },
  { name: 'Noam Brown', role: 'OpenAI', image: '/images/2026/guests/noam-brown.jpg' },
  { name: 'David Shor', role: 'Blue Rose Research', image: '/images/speakers/davidshor.jpg' },
  { name: 'Allison Duettman', role: 'Foresight Institute', image: '/images/speakers/allison.jpg' },
  { name: 'Kelsey Piper', role: 'The Argument', image: '/images/2026/guests/kelsey-piper.jpeg' },
  { name: 'Andreas Stuhlmüller', role: 'CEO, Elicit', image: '/images/2026/guests/andreas-stuhlmueller.png' },
  { name: 'Aella', role: 'Researcher', image: '/images/speakers/aella.jpg' },
  { name: 'Danielle Fong', role: 'Lightcell', image: '/images/2026/guests/danielle-fong.jpg' },
]

const ticketholders: Ticketholder[] = [
  { answerId: 'g8OzZPcChU', name: 'Nate Silver', role: 'Silver Bulletin', image: '/images/speakers/nate.jpg' },
  { answerId: 'nnP6y9EQEI', name: 'Joe Carlsmith', role: 'Anthropic', image: '/images/speakers/joe.jpg' },
  { answerId: 'Qn2c2PN5lg', name: 'Eliezer Yudkowsky', role: 'MIRI', image: '/images/speakers/eliezer.jpg' },
  { answerId: 'shPIpsg5ld', name: 'Ajeya Cotra', role: 'METR', image: '/images/speakers/ajeya.jpg' },
  // { answerId: '0ysnsz0cQ9', name: 'Dwarkesh Patel', role: 'Dwarkesh Podcast', image: '/images/speakers/dwarkesh.jpg' },
  // { answerId: 'C2zggLLylq', name: 'Daniel Kokotajlo', role: 'AI Futures Project', image: '/images/2026/guests/daniel-kokotajlo.jpg' },
  // { answerId: 'ORO8Pp20IP', name: 'Nate Soares', role: 'MIRI', image: '/images/2026/guests/nate-soares.jpg' },
  // { answerId: 'tdz5lShpN8', name: 'Robert Miles', role: '@RobertMilesAI', image: '/images/2026/guests/rob-miles.jpg' },
]

const TICKETHOLDER_MARKET_API =
  'https://api.manifold.markets/v0/slug/which-users-will-attend-a-manifest-IARLlNI5L8'

const additionalTicketholders = ['Alex Gajewski', 'Gwern Branwen', 
  'Buck Shlegeris', 'Jacob Falkovich', 'Clara Collier',
  'Janus', 'Owain Evans', 'Jose Luis Ricon',
  'Razib Khan', 'Duncan Sabien', 'Katja Grace', 'Richard Ngo',
  'Dynomight', 'Lee Fang', 'Sarah Constantin', 'Eli Lifland',
  'Stephen Hsu', 'Chana Messinger', 'Rob Miles',
  'Tracing Woodgrains', 'Bentham’s Bulldog', 'Aydin Mohseni', 'Tim Hwang',
  'Richard Yetter Chappell', 'Stephen Grugett', 'Nate Soares', 'Jeff Alstott', 'Lydia Laurenson', 'Panda Smith',
  'Steve Kuhn'
].sort((a, b) => a.localeCompare(b))

type ThemeListItem = { title: string; by?: string }
type ThemeCell =
  | { kind: 'photo'; src: string; bgPosition?: string }
  | { kind: 'list'; title: string; items: ThemeListItem[]; stack?: boolean }

const themeCells: ThemeCell[] = [
  { kind: 'photo', src: '/images/themes/sessions-1.jpg' },
  {
    kind: 'list',
    title: 'Talks',
    items: [
      { title: 'Press X to Doubt: Journalism Edition', by: 'Patrick McKenzie' },
      { title: 'Reforming Academia via Reputation Futures', by: 'Robin Hanson' },
      { title: 'What Is Aristotle’s Metaphysics About?', by: 'Arnold Brooks' },
      { title: 'Humanist vs. Science/Tech Culture', by: 'Agnes Callard & Robin Hanson' },
      { title: 'Forecasting AI Risks: Anthropic’s Responsible Scaling Policy', by: 'Ben Mann' },
      { title: 'How Do We Solve the Alignment Problem?', by: 'Joe Carlsmith' },
      { title: 'Data Science & Politics', by: 'David Shor' },
      { title: 'Predicting Large-Scale Catastrophes', by: 'Nuño Sempere' },
    ],
  },
  {
    kind: 'list',
    title: 'Workshops',
    items: [
      { title: 'Fine-Tuning, the Multiverse, Anthropic Bias, and the Reference-Class Problem' },
      { title: 'Matt Buckley: How to Change Your Mind (with Replacement Therapies)' },
      { title: 'History Lecture with Live Betting' },
      { title: 'SuperMemo & Incremental Reading' },
      { title: 'Intro to Quantitative Portfolio Construction' },
      { title: 'Ricki Heicklen: Intro to Trading' },
    ],
  },
  { kind: 'photo', src: '/images/themes/talks-adjacent.jpg' },
  { kind: 'photo', src: '/images/gallery/2025-3.jpg', bgPosition: 'center 30%' },
  {
    kind: 'list',
    title: 'Fireside / Panel / Q&A',
    stack: true,
    items: [
      { title: 'Founder of Upstart, Paul Gu' },
      { title: 'Nate Silver & Scott Alexander' },
      { title: 'Manifold Founder, Stephen Grugett & Theo Jaffee' },
      { title: 'AI 2027 Q&A, Eli Lifland' },
      { title: 'Ajeya Cotra' },
      { title: 'Kalshi Co-Founder, Luana Lopes Lara' },
      { title: 'Substack CEO, Chris Best' },
      { title: 'David Shor & Jesse Richardson' },
    ],
  },
  {
    kind: 'list',
    title: '& Much more',
    items: [
      { title: 'Speedfriending' },
      { title: 'Dance Class with Aella' },
      { title: 'Experimental Meditation Experiments' },
      { title: 'Memory Systems / Anki / SRS Meetup' },
      { title: 'Similarities Between Selling to Nation States and on Facebook Marketplace' },
      { title: 'The Case for Interactionist Dualism' },
      { title: 'Futurist Theory of Traditionalism' },
      { title: 'Fun Etymology' },
    ],
  },
  { kind: 'photo', src: '/images/themes/much-more-guitar.png' },
]

const nightMarketImages = [
  'ish-8691.jpg', '7q4a-9011.jpg', '7q4a-0831.jpg', '7q4a-0927.jpg',
  'ish-3968.jpg', '7q4a-2266.jpg', 'ish-8040.jpg', '7q4a-2067.jpg',
  'ish-5334.jpg', 'ish-7882.jpg', 'ish-8482.jpg', '7q4a-1682.jpg',
  '7q4a-9506.jpg', '7q4a-2536.jpg', '7q4a-9765.jpg', '20230924-img-8312.jpg',
  '7q4a-3907.jpg',
]

const nightMarketCategories: [string, string][] = [
  ['Job Market', 'Trade your skills for other skills, or find your next gig'],
  ['Experience Market', 'Mini games, fortunes, and digital interactions'],
  ['Information Market', 'Like a poster session, but without the academic standards'],
  ['Stuff Market', 'Arts, crafts, and locally crafted foods'],
  ['Book Market', 'Got a book? Essay? Poem? Share your physical prints'],
  ['Black Market', 'Naming rights to a baby’s middle name, ‘probiotics’, etc.'],
]

const testimonials = [
  {
    quote:
      'I met many well-known figures I’ve been reading for years. Where else will you meet multiple people within 24 hours who casually mentioned the short story Funes the Memorious in conversation?',
    author: 'Scott Sumner',
    link: 'https://scottsumner.substack.com/p/paradise-on-telegraph-avenue',
  },
  {
    quote:
      'I love Manifest. My subsidy provided for swaying bauble lights, warm soporific nooks, flames and corridors, souls brought to Earth together, eyes lighting up at their electric worlds made real.',
    author: 'Tomie',
    link: 'https://x.com/tomieinlove/status/1931934629218734083',
  },
  {
    quote:
      'Gwern came to my talk and told me at the end “I disagree with everything you said and your entire theory of aesthetics is wrong.” lol',
    author: 'Pablo',
    link: 'https://x.com/PabloPeniche/status/1932095093827334543',
  },
  {
    quote:
      'It bills itself as “a festival for forecasting and prediction markets,” which fails to capture the spirit — it’s more like “Substack and Twitter live”, a festival-conference-party-Burning-Man for nerds with many interests.',
    author: 'Jake Seliger',
    link: 'https://jakeseliger.com/2024/06/13/manifest-the-manifold-markets-nerd-festival/',
  },
  {
    quote:
      'The Manifest conference has been a successful experiment: put enough introverts with common interests into a confined space and they’ll spontaneously turn into extroverts.',
    author: 'Byrne Hobart',
    link: 'https://x.com/ByrneHobart/status/1799963459658154203',
  },
  {
    quote:
      'For much of my life, I have poured my attention into tough-to-explain solitary pursuits, sitting in quiet corners on the fringes of gatherings wondering if they’re worth the effort. Not so last weekend.',
    author: 'TracingWoodgrains',
    link: 'https://x.com/tracewoodgrains/status/1800790146633138395',
  },
]

const faqs: { q: string; a: ReactNode }[] = [
  { q: 'Where is Manifest happening?', a: 'Lighthaven, 2740 Telegraph Avenue, Berkeley, CA 94705.' },
  {
    q: 'Can I purchase accommodation?',
    a: (
      <>
        Yes. Our venue, Lighthaven, has a limited number of rooms available for ticketholders — book
        directly through{' '}
        <a href="https://www.havenbookings.space/events/festival-season-2026" target="_blank" rel="noopener">
          Lighthaven
        </a>
        . Space fills up quickly, so most attendees will need to find other accommodations nearby.
      </>
    ),
  },
  {
    q: 'When does Manifest start and end?',
    a: 'We’re still finalizing the schedule. In 2025, the festival opened doors on Friday at 2pm, held opening ceremony from 5:15-6pm. In 2025, the closing ceremony was Sunday 6-6:45pm, though events and informal gatherings continue into the night.',
  },
  { q: 'How many people will be at Manifest?', a: 'We are expecting about 600-700 attendees over the course of the weekend.' },
  { q: 'What does my ticket include?', a: 'Access to the festival from Fri afternoon through Sunday night, including all meals.' },
  {
    q: 'Can I bring my kids?',
    a: (
      <>
        We’d love for you to bring your kids! Please fill out this{' '}
        <a href="https://airtable.com/appMZp1aBO5b7NTdM/pag451KZs8vARd9sr/form" target="_blank" rel="noopener">
          Child Attendance Form
        </a>
        . Children 10 and under don’t need tickets. And we offer free onsite childcare! To help us plan
        the event, please fill out the form whether or not you need childcare.
      </>
    ),
  },
  {
    q: 'How does volunteering work?',
    a: (
      <>
        Volunteers get to buy for a reduced-price ticket in exchange for working shifts (at least 3x 4+
        hr shifts) during the event. Once all shifts are completed, volunteers are eligible for a full
        refund. Email <a href="mailto:volunteers@manifest.is">volunteers@manifest.is</a> with questions.
      </>
    ),
  },
  {
    q: 'What if I need financial assistance to attend?',
    a: (
      <>
        We don’t want finances to keep anyone from attending. If the volunteer shift requirement or
        deposit is a barrier, fill out our{' '}
        <a href="https://airtable.com/appMZp1aBO5b7NTdM/pagTrQtYd1k1Oakhi/form" target="_blank" rel="noopener">
          Low-Income Ticket Form
        </a>
        , or reach out to team@manifest.is.
      </>
    ),
  },
  { q: 'What is your refund policy?', a: 'Full refunds are available up to 7 days before the event. Contact team@manifest.is to request one.' },
]

const organizers = [
  { name: 'Winter', email: 'winter@manifest.is', image: '/images/staff/winter.jpg' },
  { name: 'Austin', email: 'austin@manifest.is', image: '/images/staff/austin.jpg' },
  { name: 'Carolanne', email: 'carolanne@manifest.is', image: '/images/staff/carolanne.jpg' },
]

/* -------------------------------------------------------------------------- */
/* Stylesheet (kept inline — palette/markup are tightly coupled)              */
/* -------------------------------------------------------------------------- */

const PAGE_CSS = `
:root {
  --m26-parchment: #f0e8df;
  --m26-cream: #f5f0eb;
  --m26-lav: #c8bdd6;
  --m26-purple: #6b5b8d;
  --m26-purple-deep: #4a3a6b;
  --m26-purple-dark: #2e1f4d;
  --m26-btn: #7b6b9e;
  --m26-btn-hover: #6a5a8d;
  --m26-muted: #6b5b7d;
  --m26-ink: #4a3a6b;

  /* V1 tokens (alias same palette) */
  --p: #f0e8df; --c: #f5f0eb; --pdeep: #2e1f4d; --pmid: #4a3a6b;
  --plav: #6b5b8d; --btn: #7b6b9e; --ink: #4a3a6b; --muted: #6b5b7d;
  --rule: rgba(74,58,107,0.18);
}

/* Font aliases — point at the next/font CSS variables set on <body>. */
body {
  --cinzel: var(--font-cinzel), serif;
  --deco: var(--font-cinzel-decorative), serif;
  --serif: var(--font-libre-baskerville), Georgia, serif;
  --display: var(--font-cormorant-garamond), var(--font-libre-baskerville), Georgia, serif;
  --font-baskerville: var(--font-libre-baskerville), Georgia, serif;
  --font-cinzel-deco: var(--font-cinzel-decorative), serif;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  background: var(--m26-parchment);
  color: var(--m26-purple-deep);
  font-family: var(--font-baskerville);
  -webkit-font-smoothing: antialiased;
}

.pill { border-radius: 9999px 0 9999px 0; }
a { color: inherit; }
img { max-width: 100%; display: block; }

/* ----- NAV (original m26 chrome — kept) ----- */
nav.top {
  position: fixed; top: 0; left: 0; right: 0;
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 24px;
  background: rgba(240, 232, 223, 0.30);
  backdrop-filter: blur(6px);
  z-index: 50;
  transition: background 180ms, box-shadow 180ms;
}
.top__brand {
  font-family: var(--font-cinzel);
  font-weight: 700; font-size: 14px;
  text-transform: uppercase; letter-spacing: 0.04em;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
.top__links { display: flex; align-items: center; gap: 24px; }
.top__links a {
  font-family: var(--font-cinzel);
  font-weight: 700; font-size: 14px;
  color: #fff; text-decoration: none;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
.top__links a:hover { opacity: 0.7; }
nav.top.is-scrolled {
  background: rgba(240, 232, 223, 0.88);
  box-shadow: 0 1px 10px rgba(46,31,77,0.08);
}
nav.top.is-scrolled .top__brand,
nav.top.is-scrolled .top__links a {
  color: var(--m26-purple-deep);
  text-shadow: none;
}
nav.top.is-scrolled .top__register { color: #fff !important; }
.top__register {
  background: var(--m26-btn);
  color: #fff !important;
  text-shadow: none !important;
  padding: 8px 20px;
}
.top__register:hover { background: var(--m26-btn-hover); }

/* ----- HERO (V1 editorial) ----- */
.v1-hero { position: relative; height: 100vh; min-height: 720px; overflow: hidden; }
.v1-hero__img {
  position: absolute; inset: 0;
  object-fit: cover; object-position: center;
  transform: scale(1.04);
}
.v1-hero__veil {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at center, transparent 50%, rgba(20,16,14,0.25) 100%),
    linear-gradient(to bottom, rgba(20,16,14,0.05), rgba(20,16,14,0.30));
}
.v1-hero__fade {
  position: absolute; left: 0; right: 0; bottom: 0;
  height: 10vh;
  background: linear-gradient(to top, var(--m26-parchment), transparent);
  pointer-events: none;
}
.v1-hero__inner {
  position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; text-align: center;
  padding: 0 24px; color: #fff;
}
.v1-hero__eyebrow {
  font-family: var(--cinzel); font-weight: 900; font-size: 20px;
  letter-spacing: 0.4em; text-transform: uppercase;
  color: #fff; margin-bottom: 22px;
  text-shadow: 0 2px 10px rgba(46,31,77,0.7);
}
.v1-hero__title {
  font-family: var(--deco); font-weight: 700; font-size: 128px; line-height: 1;
  margin: 0; letter-spacing: -0.04em; color: #fff;
  text-shadow:
    0 2px 4px rgba(46,31,77,0.95),
    0 4px 20px rgba(46,31,77,0.85),
    0 8px 40px rgba(46,31,77,0.7);
}
.v1-hero__sub {
  margin: 28px 0 36px; font-family: var(--cinzel); font-weight: 700;
  font-size: 24px; line-height: 1.4; color: rgba(255,255,255,0.95);
  letter-spacing: 0.02em;
  text-shadow: 0 2px 10px rgba(46,31,77,0.7);
}
.v1-hero__row { display: flex; gap: 14px; }
.v1-hero__note {
  margin: 22px 0 0; font-family: var(--cinzel); font-weight: 700;
  font-size: 18px; line-height: 1.4; color: #fff;
  letter-spacing: 0.04em; white-space: nowrap;
  text-shadow: 0 2px 10px rgba(46,31,77,0.85), 0 0 24px rgba(46,31,77,0.6);
}
@media (max-width: 720px) {
  .v1-hero__note { white-space: normal; font-size: 15px; max-width: 520px; }
}
.v1-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 26px; font-family: var(--cinzel); font-weight: 700; font-size: 13px;
  letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;
  border-radius: 999px 0 999px 0; transition: transform 200ms, background 160ms;
}
.v1-btn--solid { background: #fff; color: var(--pdeep); }
.v1-btn--solid:hover { transform: translateY(-1px); }
.v1-btn--ink {
  background: var(--m26-btn); color: #fff;
  padding: 10px 24px; font-size: 13px;
}
.v1-btn--ink:hover { background: var(--m26-btn-hover); }

/* ----- shared editorial primitives ----- */
.v1-divider { border: 0; height: 1px; background: var(--rule); margin: 0 0 36px; }
.v1-h2 {
  font-family: var(--display); font-style: italic; font-weight: 500; font-size: 84px; line-height: 0.95;
  margin: 0 0 28px; letter-spacing: -0.015em; color: var(--pdeep);
}
.v1-h2 em { font-style: italic; color: var(--plav); }
.v1-h2--center { text-align: center; }
.v1-h2--deco {
  font-family: var(--deco); font-style: normal; font-weight: 400;
  font-size: 48px; letter-spacing: 0.04em;
}
.v1-lede {
  font-family: var(--serif); font-style: italic; font-size: 22px; line-height: 1.55;
  margin: 0 0 18px; color: var(--pdeep); max-width: 56ch;
}
.v1-body {
  font-size: 16px; line-height: 1.75; color: var(--pmid); margin: 0; max-width: 64ch;
}

.scroll-mt { scroll-margin-top: 64px; }

/* ----- SPEAKERS (V1) ----- */
.v1-speakers { padding: 28px 56px 80px; }
.v1-speakers__head { display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: end; margin-bottom: 44px; }
.v1-speakers__head .v1-h2 { margin: 0; }
.v1-spk-grid {
  display: flex; flex-wrap: wrap; justify-content: center; row-gap: 4px;
}
.v1-spk-grid > * { flex: 0 0 16.666%; }
.v1-spk { margin: 0; display: flex; flex-direction: column; align-items: center; }
.v1-spk__img {
  width: 112px; height: 112px;
  object-fit: cover; object-position: center;
  border-radius: 50%;
  box-shadow: 0 4px 16px rgba(46,31,77,0.2);
  transition: transform 250ms ease, filter 250ms ease;
}
.v1-spk:hover .v1-spk__img { transform: scale(1.04); filter: brightness(1.05); }
.v1-spk figcaption { display: flex; flex-direction: column; gap: 2px; padding-top: 12px; align-items: center; text-align: center; }
.v1-spk__name {
  font-family: var(--cinzel); font-weight: 700; font-size: 12px;
  letter-spacing: 0.06em; text-transform: uppercase; color: var(--pdeep);
}
.v1-spk__role { font-style: italic; font-size: 12px; color: var(--muted); }
.v1-spk__prob {
  width: 84px; height: 4px;
  margin: 10px auto 4px;
  background: rgba(74,58,107,0.14);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}
.v1-spk__prob-fill {
  position: absolute; left: 0; top: 0; bottom: 0;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left center;
  background: var(--plav);
  transition: transform 600ms ease;
  will-change: transform;
}
.v1-spk__prob-num {
  font-family: var(--cinzel); font-weight: 600; font-size: 11px;
  letter-spacing: 0.08em; color: var(--muted);
}
.v1-spk__confirmed {
  display: inline-block;
  margin: 2px 0 10px;
  padding: 3px 10px 2px;
  font-family: var(--cinzel); font-weight: 700; font-size: 10px;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--pdeep);
  background: rgba(107,91,141,0.18);
  border-radius: 9999px 0 9999px 0;
}

.v1-spk-more { margin: 64px auto 0; text-align: center; max-width: 900px; }
.v1-spk-more__label {
  display: block;
  font-family: var(--cinzel); font-weight: 600; font-size: 12px;
  letter-spacing: 0.32em; text-transform: uppercase; color: var(--plav);
  margin-bottom: 36px;
}
.v1-spk-more__grid {
  display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 56px; row-gap: 8px;
  font-family: var(--cinzel); font-weight: 500; font-size: 14px;
  letter-spacing: 0.02em; color: var(--m26-ink); line-height: 1.3;
}
.v1-spk-more__grid > :nth-child(3n+1) { text-align: right; }
.v1-spk-more__grid > :nth-child(3n+2) { text-align: center; }
.v1-spk-more__grid > :nth-child(3n)   { text-align: left; }
.v1-spk-more__note {
  margin: 56px 0 0; font-family: var(--cinzel); font-style: italic;
  font-size: 16px; color: var(--m26-purple);
  letter-spacing: 0.02em;
}

/* ----- TICKETHOLDERS section ----- */
.v1-hold__lede {
  font-family: var(--serif); font-style: italic; font-size: 15px;
  color: var(--muted); line-height: 1.6; margin: 0;
}
.v1-hold__card {
  text-decoration: none; color: inherit; display: block;
}
.v1-spk-more__grid a {
  color: inherit; text-decoration: none;
  transition: color 180ms ease;
}
.v1-spk-more__grid a:hover { color: var(--plav); }

/* ----- WHAT IS MANIFEST (V1) ----- */
.v1-what { margin: 0; padding: 0; }
.v1-what__grid { display: grid; grid-template-columns: 1fr 1fr; align-items: start; }
.v1-what__images { display: flex; flex-direction: column; gap: 0; }
.v1-what__img-wrap { overflow: hidden; display: block; }
.v1-what__img {
  width: 100%; height: auto; display: block;
  transition: transform 250ms ease, filter 250ms ease;
}
.v1-what__img-wrap:hover .v1-what__img { transform: scale(1.04); filter: brightness(1.05); }
.v1-what__text { padding: 0 56px; }
.v1-what__text .v1-themes__title { white-space: normal; margin-top: 48px; }

/* ----- THEMES GRID (V1) ----- */
.v1-themes { padding: 0; }
.v1-themes__head { margin: 0; padding: 0 56px 40px; }
.v1-themes__title {
  font-family: var(--display); font-style: italic; font-weight: 500; font-size: 56px; line-height: 1.0;
  letter-spacing: -0.015em; max-width: none; white-space: nowrap; margin: 0 0 18px; color: var(--pdeep);
}
.v1-themes__sub {
  font-family: var(--serif); font-size: 16px; line-height: 1.75;
  color: var(--pmid); margin: 0; max-width: 64ch;
}
.v1-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
}
.v1-cell {
  position: relative; min-height: 360px; padding: 36px 56px;
  border-right: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
  margin: 0;
}
.v1-cell:nth-child(2n) { border-right: none; }
.v1-cell:nth-last-child(-n+2) { border-bottom: none; }
.v1-cell--photo { padding: 0; overflow: hidden; }
.v1-cell--photo .v1-cell__img {
  position: absolute; inset: 0; object-fit: cover; object-position: center;
  transition: transform 600ms ease;
}
.v1-cell--photo:hover .v1-cell__img { transform: scale(1.03); }
.v1-cell--photo figcaption {
  position: absolute; left: 24px; bottom: 20px; color: #fff;
  font-family: var(--cinzel); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
  text-shadow: 0 1px 6px rgba(0,0,0,0.6);
}
.v1-cell--photo figcaption i { font-style: normal; opacity: 0.7; margin-right: 10px; }

.v1-cell--list { padding-top: 0; }
.v1-cell--list header {
  display: flex; justify-content: space-between; align-items: baseline; gap: 16px;
  margin: 0 -56px 18px; padding: 22px 56px 14px;
  background: var(--p);
  border-bottom: 1px dotted var(--rule);
}
.v1-list__cat {
  font-family: var(--cinzel); font-weight: 700; font-size: 18px;
  letter-spacing: 0.04em; text-transform: uppercase; color: var(--pdeep);
}
.v1-list__items {
  list-style: none; margin: 0; padding: 0 8px 0 0;
  font-family: var(--serif); font-size: 13.5px; line-height: 1.45; color: var(--ink);
  max-height: 260px; overflow-y: auto;
  scrollbar-width: thin; scrollbar-color: rgba(74,58,107,0.35) transparent;
  -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - 36px), transparent 100%);
  mask-image: linear-gradient(to bottom, #000 calc(100% - 36px), transparent 100%);
}
.v1-list__items::-webkit-scrollbar { width: 6px; }
.v1-list__items::-webkit-scrollbar-track { background: transparent; }
.v1-list__items::-webkit-scrollbar-thumb {
  background: rgba(74,58,107,0.3); border-radius: 3px;
}
.v1-list__items::-webkit-scrollbar-thumb:hover { background: rgba(74,58,107,0.5); }
.v1-list__items li {
  display: flex; align-items: baseline; gap: 16px;
  padding: 9px 0;
  border-bottom: 1px dotted var(--rule);
  transition: color 150ms;
}
.v1-list__items li i {
  font-style: italic; color: var(--muted); font-size: 12px;
  text-align: right; white-space: nowrap;
}
.v1-list__items li:last-child { border-bottom: none; }
.v1-list__items li:hover { color: var(--pdeep); }
.v1-list__items li b {
  flex: 1; font-family: var(--serif); font-style: normal; font-weight: 400;
  font-size: 14px; color: var(--pdeep); letter-spacing: 0;
}
.v1-themes__more {
  display: flex; justify-content: center; padding: 36px 56px;
  border-bottom: 1px solid var(--rule);
}
.v1-themes__more-link {
  font-family: var(--cinzel); font-weight: 700; font-size: 13px;
  letter-spacing: 0.18em; text-transform: uppercase; text-decoration: none;
  color: var(--pdeep); padding-bottom: 4px;
  border-bottom: 1px dotted rgba(74,58,107,0.45);
  transition: color 160ms, border-color 160ms, transform 160ms;
}
.v1-themes__more-link:hover {
  color: var(--m26-btn); border-color: var(--m26-btn);
}
.v1-themes__more-link .v1-themes__more-arrow {
  display: inline-block; margin-left: 10px; transition: transform 200ms;
}
.v1-themes__more-link:hover .v1-themes__more-arrow { transform: translateX(4px); }

/* ----- NIGHT MARKET (V1) ----- */
.v1-nm { padding: 0 56px 88px; }
.v1-strip {
  display: flex;
  gap: 0;
  border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -webkit-mask-image: linear-gradient(to right, #000 calc(100% - 80px), transparent 100%);
  mask-image: linear-gradient(to right, #000 calc(100% - 80px), transparent 100%);
}
.v1-strip::-webkit-scrollbar { height: 6px; }
.v1-strip::-webkit-scrollbar-thumb { background: rgba(74,58,107,0.3); border-radius: 999px; }
.v1-nm { padding-top: 0; }
.v1-nm > .v1-strip { margin: 0 -56px 56px; }
.v1-strip__item {
  position: relative; flex: 0 0 25%;
  aspect-ratio: 4/3; margin: 0;
  border-right: 1px solid var(--rule); overflow: hidden;
  scroll-snap-align: start;
}
.v1-strip__item:last-child { border-right: none; }
.v1-strip__img {
  position: absolute; inset: 0; object-fit: cover; object-position: center;
  transition: transform 600ms ease;
}
/* (no strip hover) */
.v1-strip__item figcaption {
  position: absolute; left: 16px; bottom: 14px; color: #fff;
  font-family: var(--cinzel); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
  text-shadow: 0 1px 6px rgba(0,0,0,0.7);
}
.v1-strip__item figcaption i { font-style: normal; opacity: 0.7; margin-right: 8px; }

.v1-nm__row {
  display: grid; grid-template-columns: 1fr 2fr; gap: 64px; align-items: start;
}
.v1-nm__eyebrow {
  display: block; font-family: var(--cinzel); font-weight: 500; font-size: 12px; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--muted); margin-bottom: 18px;
}
.v1-nm__title {
  font-family: var(--deco); font-style: normal; font-weight: 400; font-size: 36px;
  line-height: 1.1; letter-spacing: 0.04em; text-transform: uppercase; color: var(--pdeep); margin: 0 0 24px;
}
.v1-nm__lede .v1-body {
  margin: 0 0 24px; max-width: 36ch; font-family: var(--serif);
  font-size: 14px; font-weight: 400; line-height: 1.6; color: var(--ink);
}
.v1-nm__pill {
  display: inline-block;
  font-family: var(--cinzel); font-weight: 700; font-size: 11px; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--pdeep);
}
.v1-nm__cols { display: grid; grid-template-columns: 1fr 1fr; gap: 0 48px; padding-top: 8px; }
.v1-nm__col { margin: 0; display: flex; flex-direction: column; }
.v1-nm__col > div {
  padding: 0 0 24px 0;
}
.v1-nm__col > div:last-child { padding-bottom: 0; }
.v1-nm__col dt {
  font-family: var(--cinzel); font-weight: 700; font-size: 13px;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--pdeep);
  margin-bottom: 6px;
}
.v1-nm__col dd {
  margin: 0; font-family: var(--serif); font-weight: 400; font-size: 13px;
  line-height: 1.5; color: var(--ink);
}
.v1-nm__cta { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-top: 56px; }

/* ----- TESTIMONIALS (V1) ----- */
.v1-testi { padding: 28px 56px 80px; }
.v1-testi__head { margin-bottom: 56px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.v1-testi__row {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
}
.v1-testi__card {
  margin: 0; padding: 28px 26px;
  background: var(--m26-cream);
  border: 1px solid var(--rule);
  display: flex; flex-direction: column; gap: 18px;
  text-decoration: none;
  transition: box-shadow 220ms, border-color 220ms, transform 220ms;
}
.v1-testi__card:hover {
  border-color: var(--plav); box-shadow: 0 14px 32px rgba(46,31,77,0.10);
  transform: translateY(-2px);
}
.v1-testi__card blockquote {
  margin: 0;
  font-family: var(--display); font-style: italic;
  font-weight: 600;
  font-size: 17px; line-height: 1.55; color: var(--pdeep);
  text-wrap: pretty;
}
.v1-testi__card figcaption {
  margin-top: auto;
  font-family: var(--cinzel); font-size: 11px; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--plav);
  border-top: 1px dotted var(--rule);
  padding-top: 16px;
}

/* ----- SPONSORS (V1) ----- */
.v1-spon { padding: 28px 56px 88px; text-align: center; }
.v1-spon__head { margin-bottom: 56px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.v1-spon__head-row {
  display: flex; align-items: center; gap: 18px; margin: 0 auto 18px; max-width: 760px;
}
.v1-spon__tier {
  font-family: var(--cinzel); font-weight: 600; font-size: 11px;
  letter-spacing: 0.28em; text-transform: uppercase; color: var(--plav);
  flex: 0 0 auto;
}
.v1-spon__rule { flex: 1; height: 1px; background: var(--rule); }
.v1-spon__row {
  display: flex; flex-wrap: wrap; align-items: baseline; justify-content: center;
  gap: 18px 28px; margin-bottom: 36px;
}
.v1-spon__row--head { margin-bottom: 44px; }
.v1-spon__name {
  font-family: var(--display); font-weight: 500; font-size: 22px;
  color: var(--pdeep); letter-spacing: -0.01em;
  text-decoration: none;
}
.v1-spon__name--lg { font-size: 32px; }
.v1-spon__name--xl { font-size: 56px; font-weight: 600; letter-spacing: -0.02em; }
.v1-spon__sep { color: var(--plav); font-size: 14px; }
.v1-spon__cta { margin-top: 20px; }

/* ----- SPONSORS (original m26 — restored) ----- */
.sponsors-orig { padding: 28px 56px 88px; text-align: center; }
.sponsors-orig .v1-h2 { margin-bottom: 56px; }
.sponsors-stack { display: flex; flex-direction: column; align-items: center; gap: 32px; }
.sponsors-row { display: flex; align-items: center; gap: 56px; }
.mono-img { display: block; }
.mono-img--polymarket {
  height: 80px; width: 280px;
  background-color: var(--m26-purple);
  -webkit-mask-image: url('/images/sponsors/polymarket-logo.svg');
  mask-image: url('/images/sponsors/polymarket-logo.svg');
  -webkit-mask-size: contain; mask-size: contain;
  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
  -webkit-mask-position: center; mask-position: center;
}
.mono-img--substack {
  height: 48px; width: 200px;
  background-color: var(--m26-purple);
  -webkit-mask-image: url('/images/sponsors/substack-logo.png');
  mask-image: url('/images/sponsors/substack-logo.png');
  -webkit-mask-size: contain; mask-size: contain;
  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
  -webkit-mask-position: center; mask-position: center;
}
.mono-img--kalshi {
  height: 48px; width: 120px;
  background-color: var(--m26-purple);
  -webkit-mask-image: url('/images/sponsors/kalshi-logo.svg');
  mask-image: url('/images/sponsors/kalshi-logo.svg');
  -webkit-mask-size: contain; mask-size: contain;
  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
  -webkit-mask-position: center; mask-position: center;
}
.sponsors-small {
  margin-top: 8px;
  font-family: var(--font-cinzel); font-weight: 700; font-size: 18px;
  letter-spacing: 0.02em; color: var(--m26-purple);
}
.sponsors-tier { display: flex; align-items: center; justify-content: center; gap: 48px; flex-wrap: wrap; }
.sponsors-tier--md { margin-top: 24px; }
.sponsors-logo { height: auto; width: auto; object-fit: contain; mix-blend-mode: multiply; }
.sponsors-logo--invert { filter: invert(1); mix-blend-mode: multiply; }
.sponsors-tier--xl .sponsors-logo { max-height: 140px; max-width: 460px; }
.sponsors-tier--lg .sponsors-logo { max-height: 110px; max-width: 280px; }
.sponsors-tier--md .sponsors-logo { max-height: 72px; max-width: 200px; }
.sponsors-tier--sm .sponsors-logo { max-height: 56px; max-width: 180px; }
.sponsors-tier--sm .sponsors-logo--eigen { max-height: 38px; max-width: 130px; transform: translateY(6px); }
.sponsors-tier--md .sponsors-logo--sportspredict { max-height: 56px; max-width: 150px; transform: translateY(6px); }
.sponsors-tier--md .sponsors-logo--mnx { max-height: 56px; max-width: 150px; }
.sponsors-tier--md .sponsors-logo--futo { max-height: 56px; max-width: 150px; }
.sponsors-cta { margin-top: 40px; text-align: center; }
.btn-solid {
  display: inline-block;
  background: var(--m26-btn); color: #fff !important;
  padding: 12px 24px;
  font-family: var(--font-cinzel); font-weight: 700; font-size: 14px;
  letter-spacing: 0.08em; text-decoration: none;
  transition: background 160ms;
}
.btn-solid:hover { background: var(--m26-btn-hover); }

/* ----- TICKETS (V1, restored) ----- */
.v1-tix { padding: 28px 56px 80px; }
.v1-tix__head { text-align: center; margin-bottom: 36px; }
.v1-tix__frame {
  max-width: 1100px; margin: 0 auto;
  background: var(--m26-cream);
}
.v1-tix__frame iframe {
  width: 100%; height: 900px; border: 0; display: block; background: var(--m26-cream);
}

/* ----- FAQ (V1) ----- */
.v1-faq { padding: 28px 56px 80px; }
.v1-faq__head { margin-bottom: 36px; }
.v1-faq__list {
  margin: 0; padding: 0;
  border-top: 1px solid var(--rule);
}
.v1-faq__item {
  position: relative;
  border-bottom: 1px solid var(--rule);
  padding: 20px 36px 20px 0;
  display: grid; grid-template-columns: 1fr 1.2fr; gap: 48px;
  align-items: baseline;
  cursor: pointer;
}
.v1-faq__item::after {
  content: '+';
  position: absolute;
  right: 0; top: 20px;
  font-family: var(--cinzel); font-weight: 600; font-size: 22px;
  color: var(--plav);
  transition: color 150ms;
}
.v1-faq__item.open::after { content: '−'; color: var(--pdeep); }
.v1-faq__item dt {
  margin: 0;
  font-family: var(--display); font-weight: 600; font-size: 22px;
  color: var(--pdeep); line-height: 1.25;
  display: flex; gap: 14px; align-items: baseline;
}
/* +/- now lives on .v1-faq__item itself */
.v1-faq__num {
  font-family: var(--cinzel); font-weight: 500; font-size: 11px;
  letter-spacing: 0.18em; color: var(--plav); flex: 0 0 auto;
}
.v1-faq__item dd {
  margin: 0;
  font-family: var(--serif); font-size: 14px; line-height: 1.65;
  color: var(--ink); text-wrap: pretty;
}
.v1-faq__item dd a {
  color: var(--m26-purple);
  text-decoration: underline; text-underline-offset: 2px;
}
.v1-faq__item dd a:hover { color: var(--m26-purple-deep); }

/* ----- ORGANIZERS (V1) ----- */
.v1-org { padding: 28px 56px 88px; text-align: center; }
.v1-org__head { margin-bottom: 48px; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.v1-org__sub {
  font-family: var(--display); font-style: italic; font-size: 18px;
  color: var(--muted); margin: 0;
}
.v1-org__grid {
  display: flex; justify-content: center; gap: 72px;
}
.v1-org__card { margin: 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.v1-org__photo {
  width: 144px; height: 144px; border-radius: 50%;
  object-fit: cover; object-position: center;
  background-color: var(--plav);
  box-shadow: 0 6px 20px rgba(46,31,77,0.18);
  transition: transform 250ms;
}
.v1-org__card:hover .v1-org__photo { transform: scale(1.04); }
.v1-org__name {
  display: block;
  font-family: var(--cinzel); font-weight: 700; font-size: 14px;
  letter-spacing: 0.06em; text-transform: uppercase; color: var(--pdeep);
}
.v1-org__email {
  display: block; margin-top: 2px;
  font-family: var(--display); font-style: italic; font-size: 14px;
  color: var(--muted); text-decoration: none;
}
.v1-org__email:hover { color: var(--pdeep); }

/* ----- FOOTER (V1) ----- */
.v1-foot {
  padding: 56px 56px 64px; background: var(--pdeep); color: rgba(255,255,255,0.85);
}
.v1-foot__row { display: flex; justify-content: space-between; align-items: flex-start; gap: 32px; }
.v1-foot__brand { display: flex; flex-direction: column; gap: 6px; }
.v1-foot__title {
  font-family: var(--deco); font-weight: 700; font-size: 28px; color: #fff;
}
.v1-foot__sub {
  font-family: var(--cinzel); font-size: 11px; letter-spacing: 0.28em;
  text-transform: uppercase; color: rgba(255,255,255,0.6);
}
.v1-foot__links { display: flex; flex-wrap: wrap; gap: 18px 28px; max-width: 360px; justify-content: flex-end; }
.v1-foot__links a {
  color: rgba(255,255,255,0.8); text-decoration: none;
  font-family: var(--cinzel); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
}
.v1-foot__links a:hover { color: #fff; }
.v1-foot__past {
  display: flex; flex-direction: column; align-items: center;
  gap: 12px; margin: 0 0 28px;
}
.v1-foot__past a {
  font-family: var(--font-cinzel); font-weight: 700; font-size: 14px;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: rgba(255,255,255,0.85); text-decoration: none;
}
.v1-foot__past a:hover { color: #fff; }
.v1-foot__rule { height: 1px; background: rgba(255,255,255,0.2); margin: 36px 0 28px; }
.v1-foot__fine {
  display: flex; justify-content: space-between; gap: 24px;
  font-family: var(--cinzel); font-size: 10px; letter-spacing: 0.22em;
  text-transform: uppercase; color: rgba(255,255,255,0.5);
}

/* ----- responsive ----- */
@media (max-width: 900px) {
  .v1-spk-grid > * { flex: 0 0 33.333%; }
  .v1-grid { grid-template-columns: 1fr; }
  .v1-cell { border-right: none; }
  .v1-nm__row { grid-template-columns: 1fr; gap: 40px; }
  .v1-nm__cols { grid-template-columns: 1fr; }
  .v1-testi__row { grid-template-columns: 1fr; }
  .v1-faq__item { grid-template-columns: 1fr; gap: 12px; }
  .v1-speakers__head { grid-template-columns: 1fr; gap: 20px; }
  .v1-strip { grid-template-columns: repeat(2, 1fr); }
  .v1-what__grid { grid-template-columns: 1fr; gap: 32px; }
}
@media (max-width: 720px) {
  .v1-hero__title { font-size: 64px; }
  .v1-hero__sub { font-size: 18px; }
  .v1-h2 { font-size: 48px; }
  .v1-h2--deco { font-size: 30px; }
  .v1-nm__title { font-size: 48px; }
  .v1-themes__title { font-size: 36px; }
  .v1-speakers, .v1-themes__head, .v1-nm, .v1-testi, .sponsors-orig, .v1-tix, .v1-faq, .v1-org { padding-left: 24px; padding-right: 24px; }
  .v1-what__text { padding: 0 24px; }
  .v1-cell { padding: 28px 24px; }
  .v1-cell--list header { margin: 0 -24px 18px; padding: 22px 24px 14px; }
  .v1-themes__more { padding: 28px 24px; }
  .v1-themes__more-link { font-size: 11px; letter-spacing: 0.16em; text-align: center; }
  .v1-foot { padding: 40px 24px 48px; }
  .v1-foot__row { flex-direction: column; gap: 24px; }
  .v1-foot__links { justify-content: flex-start; }
  .v1-foot__fine { flex-direction: column; gap: 8px; }
  /* nav: keep only brand + Register so it fits */
  nav.top { padding: 10px 16px; }
  .top__links { gap: 12px; }
  .top__links a:not(.top__register) { display: none; }
  /* speakers: smaller portraits so 3-col fits cleanly */
  .v1-spk__img { width: 96px; height: 96px; }
  .v1-spk-more__grid { column-gap: 24px; }
  /* night market: 2 per row, negative margin matches mobile padding */
  .v1-nm > .v1-strip { margin: 0 -24px 56px; }
  .v1-strip__item { flex: 0 0 50%; }
  /* sponsors: wrap rows and shrink polymarket logo */
  .sponsors-row { gap: 24px; flex-wrap: wrap; justify-content: center; }
  .mono-img--polymarket { width: 240px; height: 64px; }
  /* organizers: wrap to two rows on phones */
  .v1-org__grid { gap: 24px 32px; flex-wrap: wrap; }
}
`

/* -------------------------------------------------------------------------- */
/* Hooks & helpers                                                            */
/* -------------------------------------------------------------------------- */

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

function useTicketholderProbabilities() {
  const [probabilities, setProbabilities] = useState<Record<string, number>>({})
  useEffect(() => {
    let cancelled = false
    fetch(TICKETHOLDER_MARKET_API)
      .then((r) => r.json())
      .then((market: { answers?: { id: string; probability: number }[] }) => {
        if (cancelled) return
        const next: Record<string, number> = {}
        market.answers?.forEach((a) => {
          next[a.id] = Math.round(a.probability * 100)
        })
        setProbabilities(next)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])
  return probabilities
}

/* -------------------------------------------------------------------------- */
/* Sections                                                                   */
/* -------------------------------------------------------------------------- */

function TopNav() {
  const scrolled = useScrolled()
  return (
    <nav className={`top${scrolled ? ' is-scrolled' : ''}`}>
      <a href="#top" className="top__brand">Manifest 2026</a>
      <div className="top__links">
        <a href="#speakers">Speakers</a>
        <a href="https://Manifest.is/pastsessions">Past Sessions</a>
        <a href="#nightmarket">Night Market</a>
        <a href="#faq">FAQ</a>
        <a href="#tickets" className="top__register pill">Register</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="top" className="v1-hero">
      <Image
        src="/images/2026/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="v1-hero__img"
      />
      <div className="v1-hero__veil" />
      <div className="v1-hero__inner">
        <p className="v1-hero__eyebrow">June 12–14 · Berkeley</p>
        <h1 className="v1-hero__title">Manifest 2026</h1>
        <p className="v1-hero__sub">
          A festival for predictions,
          <br />
          and markets thereof.
        </p>
        <div className="v1-hero__row">
          <a href="#tickets" className="v1-btn v1-btn--solid pill">
            Get your tickets
          </a>
        </div>
      </div>
      <div className="v1-hero__fade" />
    </section>
  )
}

function SpeakerPortrait({ name, image }: Pick<Person, 'name' | 'image'>) {
  return (
    <Image
      src={image}
      alt={name}
      width={112}
      height={112}
      className="v1-spk__img"
      sizes="112px"
    />
  )
}

function SpeakerFigure({ name, role, image, confirmed }: Person & { confirmed?: boolean }) {
  return (
    <figure className="v1-spk">
      <SpeakerPortrait name={name} image={image} />
      <figcaption>
        <span className="v1-spk__name">{name}</span>
        <span className="v1-spk__role">{role}</span>
        {confirmed && <span className="v1-spk__confirmed">Confirmed</span>}
      </figcaption>
    </figure>
  )
}

function TicketholderFigure({
  name,
  role,
  image,
  probability,
}: Person & { probability?: number }) {
  const hasProb = probability != null
  return (
    <a className="v1-hold__card" href={TICKETHOLDER_MARKET_URL} target="_blank" rel="noopener">
      <figure className="v1-spk">
        <SpeakerPortrait name={name} image={image} />
        <figcaption>
          <span className="v1-spk__name">{name}</span>
          <span className="v1-spk__role">{role}</span>
          <div className="v1-spk__prob">
            <div
              className="v1-spk__prob-fill"
              style={{ transform: `scaleX(${hasProb ? probability! / 100 : 0})` }}
            />
          </div>
          <span className="v1-spk__prob-num">{hasProb ? `${probability}%` : '—'}</span>
        </figcaption>
      </figure>
    </a>
  )
}

function Speakers({ probabilities }: { probabilities: Record<string, number> }) {
  return (
    <section id="speakers" className="v1-speakers scroll-mt">
      <hr className="v1-divider" />
      <header className="v1-speakers__head">
        <h2 className="v1-h2">
          2026 Speakers & <em>Guests</em>
        </h2>
      </header>

      <div className="v1-spk-grid">
        {confirmedSpeakers.map((s) => (
          <SpeakerFigure key={s.name} {...s} confirmed />
        ))}
        {ticketholders.map((t) => (
          <TicketholderFigure key={t.answerId} {...t} probability={probabilities[t.answerId]} />
        ))}
      </div>

      <div className="v1-spk-more">
        <div className="v1-spk-more__grid">
          {additionalTicketholders.map((name) => (
            <a key={name} href={TICKETHOLDER_MARKET_URL} target="_blank" rel="noopener">
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatIsManifest() {
  return (
    <section id="what-is-manifest" className="v1-what scroll-mt">
      <div className="v1-what__grid">
        <div className="v1-what__text">
          <hr className="v1-divider" />
          <h2 className="v1-h2">What is Manifest?</h2>
          <p className="v1-lede">
            Manifest started in <a href="/2023">2023</a> as a festival about prediction markets and
            forecasting; it has since become an annual excuse to treat curiosity as a serious hobby —
            long conversations, unfinished arguments, bets, and the company of writers, researchers,
            and builders you admire from your favorite niche corners of the internet.
          </p>
          <p className="v1-body">
            “Equal parts Math Olympiad and Burning Man” — a gathering of nerds who want to find the
            thinkers and practitioners they vehemently agree (and disagree) with, share a meal around
            a cozy campfire, and come away with radically new ways of thinking.
          </p>
          <h3 className="v1-themes__title">What sorts of things happen at Manifest?</h3>
          <p className="v1-themes__sub">
            Talks, panels, debates, workshops, games, prediction market tournaments, a night market,
            career fair, and much more. Much of the schedule comes from attendee-led sessions.
            Schedule from past years have included:
          </p>
          <div className="v1-themes__more">
            <a className="v1-btn v1-btn--ink pill v1-themes__more-btn" href="/pastsessions">
              See sessions from all previous years
              <span className="v1-themes__more-arrow">→</span>
            </a>
          </div>
        </div>
        <div className="v1-what__images">
          <div className="v1-what__img-wrap">
            <Image
              className="v1-what__img"
              src="/images/2026/what-is-manifest-1.jpg"
              alt="Attendees gathered under sunshade canopies at Manifest"
              width={1800}
              height={1000}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="v1-what__img-wrap">
            <Image
              className="v1-what__img"
              src="/images/2026/what-is-manifest-2.jpg"
              alt="Attendees in conversation at Manifest"
              width={1426}
              height={745}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ThemesGrid() {
  return (
    <section className="v1-themes">
      <div className="v1-grid">
        {themeCells.map((cell, i) =>
          cell.kind === 'photo' ? (
            <figure key={i} className="v1-cell v1-cell--photo">
              <Image
                src={cell.src}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="v1-cell__img"
                style={cell.bgPosition ? { objectPosition: cell.bgPosition } : undefined}
              />
            </figure>
          ) : (
            <article key={i} className="v1-cell v1-cell--list">
              <header>
                <span className="v1-list__cat">{cell.title}</span>
              </header>
              <ol className={`v1-list__items${cell.stack ? ' v1-list__items--stack' : ''}`}>
                {cell.items.map((item, j) => (
                  <li key={j}>
                    <b>{item.title}</b>
                    {item.by && <i>{item.by}</i>}
                  </li>
                ))}
              </ol>
            </article>
          )
        )}
      </div>
    </section>
  )
}

function NightMarket() {
  return (
    <section id="nightmarket" className="v1-nm scroll-mt">
      <div className="v1-strip">
        {nightMarketImages.map((file) => (
          <figure key={file} className="v1-strip__item">
            <Image
              src={`/images/night-market/${file}`}
              alt=""
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
              className="v1-strip__img"
            />
          </figure>
        ))}
      </div>
      <div className="v1-nm__row">
        <div className="v1-nm__lede">
          <span className="v1-nm__eyebrow">Opening Night · Free & Public</span>
          <h2 className="v1-nm__title">The Night Market</h2>
          <p className="v1-body">
            On Friday, the first night of Manifest, Lighthaven will be open and free to the public for
            our Career Fair & Night Market. An open-air evening celebration of all things markets;
            it’s a chance to meet people, share ideas, see strange gadgets, and wander around in a
            transcendent twilight…
          </p>
          <span className="v1-nm__pill">No ticket required</span>
        </div>
        <div className="v1-nm__cols">
          {[nightMarketCategories.slice(0, 3), nightMarketCategories.slice(3, 6)].map((col, i) => (
            <dl key={i} className="v1-nm__col">
              {col.map(([term, desc]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{desc}</dd>
                </div>
              ))}
            </dl>
          ))}
        </div>
      </div>
      <div className="v1-nm__cta">
        <a
          href="https://airtable.com/appMZp1aBO5b7NTdM/pag9gppXcX1cxRixI/form"
          className="v1-btn v1-btn--ink pill"
          target="_blank"
          rel="noopener"
        >
          Register your interest
        </a>
        <a
          href="https://airtable.com/appMZp1aBO5b7NTdM/pagH4yhHlxyolS2Qv/form"
          className="v1-btn v1-btn--ink pill"
          target="_blank"
          rel="noopener"
        >
          Job Market sign-up
        </a>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="v1-testi scroll-mt">
      <hr className="v1-divider" />
      <header className="v1-testi__head">
        <h2 className="v1-h2 v1-h2--center v1-h2--deco">
          Tales from Festivalgoers
        </h2>
      </header>
      <div className="v1-testi__row">
        {testimonials.map(({ quote, author, link }) => (
          <a key={author} className="v1-testi__card" href={link} target="_blank" rel="noopener">
            <blockquote>{quote}</blockquote>
            <figcaption>— {author}</figcaption>
          </a>
        ))}
      </div>
    </section>
  )
}

function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-orig scroll-mt">
      <hr className="v1-divider" />
      <h2 className="v1-h2 v1-h2--center v1-h2--deco">
        Sponsored by
      </h2>
      <div className="sponsors-stack">
        <div className="sponsors-tier sponsors-tier--xl">
          <a href="https://sovereign.trading/" target="_blank" rel="noopener">
            <Image
              src="/images/sponsors/sovereign-logo.png"
              alt="Sovereign"
              width={701}
              height={276}
              className="sponsors-logo"
            />
          </a>
        </div>
        <div className="sponsors-tier sponsors-tier--lg">
          <a href="https://manifold.markets/" target="_blank" rel="noopener">
            <Image
              src="/images/sponsors/manifold-logo.png"
              alt="Manifold Markets"
              width={1118}
              height={306}
              className="sponsors-logo"
            />
          </a>
        </div>
        <div className="sponsors-tier sponsors-tier--md sponsors-row">
          <a href="https://mnx.fi/" target="_blank" rel="noopener">
            <Image
              src="/images/sponsors/mnx-logo.png"
              alt="MNX"
              width={485}
              height={133}
              className="sponsors-logo sponsors-logo--mnx"
            />
          </a>
          <a href="https://futo.tech/" target="_blank" rel="noopener">
            <Image
              src="/images/sponsors/futo-logo.svg"
              alt="Futo"
              width={400}
              height={160}
              className="sponsors-logo sponsors-logo--futo"
            />
          </a>
          <a href="https://soccer.sportspredict.com/" target="_blank" rel="noopener">
            <Image
              src="/images/sponsors/sportspredict-logo.png"
              alt="Sports Predict"
              width={1200}
              height={460}
              className="sponsors-logo sponsors-logo--sportspredict"
            />
          </a>
        </div>
        <div className="sponsors-tier sponsors-tier--sm sponsors-row">
          <Image
            src="/images/sponsors/futuur-logo-new.png"
            alt="Futuur"
            width={970}
            height={400}
            className="sponsors-logo"
          />
          <Image
            src="/images/sponsors/eigenlabs-logo.png"
            alt="Eigen Labs"
            width={960}
            height={200}
            className="sponsors-logo sponsors-logo--eigen"
          />
        </div>
      </div>
    </section>
  )
}

function Tickets() {
  return (
    <section id="tickets" className="v1-tix scroll-mt">
      <div className="v1-tix__frame">
        <iframe src="https://less.online/manifest-embed" title="Manifest 2026 tickets" loading="lazy" />
      </div>
    </section>
  )
}

function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <section id="faq" className="v1-faq scroll-mt">
      <hr className="v1-divider" />
      <header className="v1-faq__head">
        <h2 className="v1-h2" style={{ fontSize: 56 }}>
          Frequently <em>Asked</em>
        </h2>
      </header>
      <dl className="v1-faq__list">
        {faqs.map((item, i) => {
          const open = openIdx === i
          return (
            <div
              key={i}
              className={`v1-faq__item${open ? ' open' : ''}`}
              onClick={() => {
                if (window.getSelection()?.toString()) return
                setOpenIdx(open ? null : i)
              }}
            >
              <dt>
                <span className="v1-faq__num">{String(i + 1).padStart(2, '0')}</span>
                {item.q}
              </dt>
              <dd onClick={(e) => e.stopPropagation()} style={{ display: open ? 'block' : 'none' }}>
                {item.a}
              </dd>
            </div>
          )
        })}
      </dl>
    </section>
  )
}

function Organizers() {
  return (
    <section id="organizers" className="v1-org scroll-mt">
      <hr className="v1-divider" />
      <header className="v1-org__head">
        <h2 className="v1-h2 v1-h2--center v1-h2--deco">
          Organizers:
        </h2>
        <p className="v1-org__sub">Questions? Please reach out.</p>
      </header>
      <div className="v1-org__grid">
        {organizers.map((o) => (
          <figure key={o.name} className="v1-org__card">
            <Image
              src={o.image}
              alt={o.name}
              width={144}
              height={144}
              className="v1-org__photo"
              sizes="144px"
            />
            <figcaption>
              <span className="v1-org__name">{o.name}</span>
              <a className="v1-org__email" href={`mailto:${o.email}`}>
                {o.email}
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="v1-foot">
      <div className="v1-foot__row">
        <div className="v1-foot__brand">
          <span className="v1-foot__title">Manifest 2026</span>
          <span className="v1-foot__sub">June 12 – 14 · Lighthaven, Berkeley</span>
        </div>
        <div className="v1-foot__links">
          <a href="#speakers">Speakers</a>
          <a href="#what-is-manifest">Festival</a>
          <a href="#nightmarket">Night Market</a>
          <a href="#tickets">Tickets</a>
          <a href="#faq">FAQ</a>
          <a href="https://discord.com/invite/MjDqMcQFdR" target="_blank" rel="noopener">
            Discord
          </a>
        </div>
      </div>
      <div className="v1-foot__rule" />
      <div className="v1-foot__past">
        <a href="/2025">Manifest 2025</a>
        <a href="/2024">Manifest 2024</a>
        <a href="/2023">Manifest 2023</a>
      </div>
      <div className="v1-foot__fine">
        <span>Berkeley, CA</span>
        <span>team@manifest.is</span>
      </div>
    </footer>
  )
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function Manifest2026() {
  const probabilities = useTicketholderProbabilities()
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <TopNav />
      <Hero />
      <Speakers probabilities={probabilities} />
      <WhatIsManifest />
      <ThemesGrid />
      <NightMarket />
      <Testimonials />
      <Tickets />
      <Sponsors />
      <Faq />
      <Organizers />
      <SiteFooter />
    </>
  )
}
