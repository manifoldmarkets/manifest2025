'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

type TocItem = { emoji: string; label: string; id: string }

const toc: TocItem[] = [
  { emoji: '🏡', label: 'Venue', id: 'venue' },
  { emoji: '🧭', label: 'Waypoint', id: 'waypoint' },
  { emoji: '📆', label: 'Schedule', id: 'schedule' },
  { emoji: '🎟', label: 'Ticketing & Registration', id: 'ticketing' },
  { emoji: '🤝', label: 'Connect with Other Attendees', id: 'connect' },
  { emoji: '🍪', label: 'Food', id: 'food' },
  { emoji: '♿️', label: 'Accessibility', id: 'accessibility' },
  { emoji: '⚖️', label: 'Participant Policies', id: 'policies' },
  { emoji: '🎒', label: 'What to Bring', id: 'bring' },
  { emoji: '👘', label: 'What to Wear', id: 'wear' },
  { emoji: '👶', label: 'Childcare', id: 'childcare' },
]

const sessionTips: string[] = [
  'Great sessions tend to be the ones their organizers are the most excited about. If there’s an idea you’re obsessed with, a game you love, a wacky group activity you’ve been curious to try out — run an event for it!',
  'Some of our favorite attendee-run events from last year were wrestling with live betting, a workshop on AI poker, and a question-writing tournament.',
  'Interactive sessions consistently rate higher per feedback forms from past years.',
  'If you are giving a talk, our suggestion is aiming for ~1:1 talk to Q&A time.',
  'We reserve the rights to move the timing and location of your session.',
]

const bringList: string[] = [
  'Laptop (+ charger, etc)',
  'Phone (+ charger, etc)',
  'Notebook, pens, etc',
  'Headphones/earbuds',
  'ID (for getting into the venue, and, if you’re over 21, for access to the bar when there is one)',
  'Insider knowledge (the legal kind)',
]

const codeOfConductDo: string[] = [
  'Respect the boundaries of other participants.',
  'Look out for one another and try to help if you can.',
]
const codeOfConductDont: string[] = [
  'Unwanted sexual attention, or sexual harassment of any kind.',
  'Offensive, disruptive, or discriminatory actions or communication.',
]

/* -------------------------------------------------------------------------- */
/* Building blocks                                                            */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  id,
  emoji,
  children,
}: {
  id: string
  emoji: string
  children: ReactNode
}) {
  return (
    <h2
      id={id}
      className="mt-20 scroll-mt-24 font-cinzel-decorative text-3xl font-bold tracking-tight text-m26-purple-dark sm:text-4xl"
    >
      <span className="mr-3" aria-hidden>
        {emoji}
      </span>
      {children}
    </h2>
  )
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 font-cinzel text-xl font-semibold text-m26-purple-deep">
      {children}
    </h3>
  )
}

function Callout({ emoji, children }: { emoji: string; children: ReactNode }) {
  return (
    <div className="my-5 flex items-start gap-4 rounded-br-3xl rounded-tl-3xl border border-m26-lav/60 bg-m26-cream px-5 py-4 shadow-sm">
      <span className="text-2xl leading-none" aria-hidden>
        {emoji}
      </span>
      <div className="flex-1 font-baskerville text-base leading-relaxed text-m26-purple-deep">
        {children}
      </div>
    </div>
  )
}

function Button({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="my-2 inline-block rounded-br-full rounded-tl-full bg-m26-btn px-6 py-2.5 font-cinzel text-sm font-semibold uppercase tracking-wider text-m26-cream transition-colors hover:bg-m26-btn-hover"
    >
      {children}
    </a>
  )
}

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-m26-lav-light/70 px-1.5 py-0.5 font-mono text-[0.9em] text-m26-purple-dark">
      {children}
    </code>
  )
}

function Link({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith('http') || href.startsWith('mailto:')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="text-m26-purple underline decoration-m26-lav-mid underline-offset-2 transition-colors hover:text-m26-purple-deep hover:decoration-m26-purple"
    >
      {children}
    </a>
  )
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="my-3 font-baskerville text-base leading-relaxed text-m26-purple-deep/90">
      {children}
    </p>
  )
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function AttendeeGuide() {
  return (
    <main className="min-h-screen bg-m26-parchment text-m26-purple-deep">
      {/* Cover */}
      <header className="relative">
        <div className="relative h-[42vh] min-h-[280px] w-full overflow-hidden sm:h-[52vh]">
          <Image
            src="/images/attendeeguide/cover.png"
            alt="Manifest attendees gathered at Lighthaven"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-m26-purple-dark/30 via-transparent to-m26-parchment" />
        </div>
        <div className="mx-auto mt-10 max-w-3xl px-6 sm:mt-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-cinzel-decorative text-4xl font-bold leading-tight tracking-tight text-m26-purple-dark sm:text-5xl">
              Manifest 2026 Attendee Guide
            </h1>
            <p className="mt-3 font-cinzel text-sm uppercase tracking-[0.2em] text-m26-purple">
              June 12–14, 2026 · Berkeley, CA
            </p>
          </div>
        </div>
      </header>

      <div className="lg:flex lg:items-start">
        {/* Table of contents — full-height left rail on lg+, inline panel on smaller screens */}
        <nav
          aria-label="Table of contents"
          className="mx-6 mb-10 mt-12 rounded-br-3xl rounded-tl-3xl border border-m26-lav/60 bg-m26-cream/80 px-5 py-5 lg:sticky lg:top-0 lg:mx-0 lg:mb-0 lg:mt-0 lg:flex lg:h-screen lg:w-64 lg:flex-shrink-0 lg:flex-col lg:overflow-y-auto lg:rounded-none lg:border-0 lg:border-r lg:border-m26-lav/60 lg:bg-m26-cream/60 lg:px-6 lg:py-10 xl:w-72"
        >
          <h2 className="font-cinzel text-xs font-semibold uppercase tracking-[0.18em] text-m26-purple">
            Table of Contents
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-y-1.5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-1">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 font-baskerville text-sm text-m26-purple-deep transition-colors hover:bg-m26-lav-light/60 hover:text-m26-purple-dark"
                >
                  <span aria-hidden>{item.emoji}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="mx-auto min-w-0 max-w-3xl px-6 pb-24 pt-12 lg:flex-1 lg:px-12 lg:pt-16">
          {/* Venue */}
          <SectionHeading id="venue" emoji="🏡">
            Venue
          </SectionHeading>
          <Callout emoji="📍">
            <Link href="http://lighthaven.space">Lighthaven Campus</Link>, 2740
            Telegraph Ave, Berkeley, CA 94705
          </Callout>
          <Callout emoji="🌐">
            Wifi network: <Code>LightFi</Code>
            <br />
            Password: <Code>wearethelight</Code>
          </Callout>
          <figure className="my-6">
            <a
              href="/images/attendeeguide/venue.png"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-br-3xl rounded-tl-3xl border border-m26-lav/60 bg-m26-cream">
                <Image
                  src="/images/attendeeguide/venue.png"
                  alt="Lighthaven venue"
                  fill
                  sizes="(max-width: 640px) 90vw, 480px"
                  className="object-contain"
                />
              </div>
            </a>
          </figure>

          {/* Waypoint */}
          <SectionHeading id="waypoint" emoji="🧭">
            Waypoint
          </SectionHeading>
          <P>
            Please ensure you are able to access Waypoint. This is how you will
            be able to access the schedule, venue map, attendee list, and
            receive conference announcements.
          </P>
          <P>
            If you have a ticket, you should have received an invitation email
            from Waypoint{' '}
            <Link href="mailto:no-reply@mg.lighthaven.space">
              no-reply@mg.lighthaven.space
            </Link>
            . If you can’t find the invite email, just go to{' '}
            <Link href="https://waypoint.lighthaven.space">
              waypoint.lighthaven.space
            </Link>{' '}
            and click “Forgot Password” to get a new email.
          </P>

          {/* Schedule */}
          <SectionHeading id="schedule" emoji="📆">
            Schedule
          </SectionHeading>
          <Callout emoji="🔗">
            See the live working schedule on{' '}
            <Link href="https://waypoint.lighthaven.space/e/manifest-2026/schedule">
              Waypoint
            </Link>
          </Callout>

          <SubHeading>Adding your own sessions</SubHeading>
          <P>
            Manifest is a collaborative festival; many of the best talks,
            meetups, workshops and games are hosted by your fellow attendees. You
            can add your own events directly to the schedule now from Waypoint.
          </P>
          <ul className="ml-6 list-disc space-y-2 font-baskerville text-base leading-relaxed text-m26-purple-deep/90">
            {sessionTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>

          <SubHeading>Special events you can register for now</SubHeading>
          <P>
            These are some highly participatory events organized by Manifest,
            which you can register for in advance.
          </P>

          <div className="my-6 rounded-br-3xl rounded-tl-3xl border border-m26-lav bg-m26-lav-light/40 px-6 py-5">
            <h4 className="font-cinzel text-lg font-bold text-m26-purple-dark">
              Night Market
            </h4>
            <P>
              On Friday evening, there will be a night market that is open to
              the public, where you can sign up to host a booth. Booth/table
              space is limited, with some priority given to Manifest ticket
              holders, however we encourage you to get your requests in early.
            </P>
            <Button href="https://airtable.com/appMZp1aBO5b7NTdM/pag9gppXcX1cxRixI/form">
              Register interest here
            </Button>
          </div>

          <div className="my-6 rounded-br-3xl rounded-tl-3xl border border-m26-lav bg-m26-lav-light/40 px-6 py-5">
            <h4 className="font-cinzel text-lg font-bold text-m26-purple-dark">
              Career Fair
            </h4>
            <P>
              In parallel to the night market, we will also have a career fair,
              where you can talk to hiring sponsors and hang out. Please submit
              this form if you think you might come, whether or not you are
              interested in looking for work.
            </P>
            <Button href="https://airtable.com/appMZp1aBO5b7NTdM/pagH4yhHlxyolS2Qv/form">
              Submit this form
            </Button>
          </div>

          {/* Ticketing */}
          <SectionHeading id="ticketing" emoji="🎟">
            Ticketing & Registration
          </SectionHeading>
          <P>
            Throughout the festival season,{' '}
            <strong>your name badge will act as your ticket in.</strong>
          </P>
          <P>
            If you’re coming to multiple events during the festival season,
            you’ll have a separate name badge for each part (LessOnline, Summer
            Camp, and Manifest). You’ll be expected to wear your name badge at
            all times while on campus. If you forget to wear your badge, staff
            or security may ask you to see your name badge and ID.
          </P>
          <P>
            When you first arrive at the venue, you’ll be asked to show your
            ticket QR code in Waypoint before going to registration to be given
            your name badge.
          </P>
          <Callout emoji="🕒">
            <strong>
              Registration will open for Manifest at 2pm on Friday
            </strong>
            , and will open at 9am on Saturday and Sunday.
          </Callout>
          <P>
            Once you have your badge, you’ll be free to come and go from the
            venue at any time.
          </P>

          {/* Connect */}
          <SectionHeading id="connect" emoji="🤝">
            Connect with Other Attendees
          </SectionHeading>
          <P>
            We highly recommend joining our{' '}
            <Link href="https://discord.gg/ySNwKgb2Bp">Discord</Link>, where you
            can chat with other Manifest attendees, coordinate carpool or shared
            housing, give the organizers feedback, et cetera.
          </P>
          <P>
            The best way to connect with and learn about fellow attendees will
            be on Waypoint. You can also ask the Waypoint AI who you should get
            to know.
          </P>

          {/* Food */}
          <SectionHeading id="food" emoji="🍪">
            Food
          </SectionHeading>
          <SubHeading>Meals</SubHeading>
          <P>
            <strong>Food and drinks will be provided free of charge.</strong>{' '}
            We’ll have plenty of vegan and vegetarian options, and we’ll do our
            best to accommodate dietary restrictions, allergies, and
            preferences. <strong>Meals provided:</strong> dinner on Friday, plus
            grab-and-go breakfast, lunch, and dinner on Saturday and Sunday.
          </P>
          <SubHeading>Snacks</SubHeading>
          <P>
            <strong>Snacks will also be provided free of charge.</strong> Small
            snacks, water, and drinks (e.g. Soylent, Huel, sodas, etc) will be
            available at all times.
          </P>

          {/* Accessibility */}
          <SectionHeading id="accessibility" emoji="♿️">
            Accessibility
          </SectionHeading>
          <P>
            Unfortunately, Lighthaven is not generally wheelchair-accessible. If
            you’re interested in learning more about how you can participate
            with a wheelchair, please{' '}
            <Link href="mailto:carolanne@manifest.is">send us an email</Link>{' '}
            and we’d be happy to work with you.
          </P>

          {/* Policies */}
          <SectionHeading id="policies" emoji="⚖️">
            Participant Policies
          </SectionHeading>
          <h3 className="mt-8 font-cinzel text-2xl font-bold text-m26-purple-deep">
            Code of Conduct
          </h3>
          <P>
            <strong>At Manifest, all attendees agree to:</strong>
          </P>
          <ul className="ml-6 list-disc space-y-2 font-baskerville text-base leading-relaxed text-m26-purple-deep/90">
            {codeOfConductDo.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <P>
            <strong>These behaviors don’t belong at Manifest:</strong>
          </P>
          <ul className="ml-6 list-disc space-y-2 font-baskerville text-base leading-relaxed text-m26-purple-deep/90">
            {codeOfConductDont.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <P>
            We understand that human interaction is complex. If you feel able,
            please give each other the benefit of explaining behavior you find
            unwelcome or offensive. If you’re asked to stop a behavior that’s
            causing a problem for someone, we expect you to stop immediately.
          </P>
          <P>
            If you: break the law, the code of conduct, or the policies of the
            venue; don’t respect other attendees, volunteers, or staff; and/or,
            generally do bad things, we’ll take action including but not limited
            to: asking you politely to stop; asking you slightly less politely
            to stop; asking you to leave the venue; etc. That definitely won’t
            be fun for us, and probably not for you either.
          </P>

          <h3 className="mt-8 font-cinzel text-2xl font-bold text-m26-purple-deep">
            Privacy and Photo Policy
          </h3>
          <P>
            Please note that{' '}
            <strong>
              we can’t guarantee any statements stay inside the conference.
            </strong>
          </P>
          <P>
            We may share some identifying information with venue staff,
            security, sponsors, and other relevant parties. We may share your
            name with other attendees, through selecting fields on various
            forms. We’re careful to only share necessary information, and only
            when it’s actually useful. However, we can’t guarantee that any
            information you share with <em>other attendees</em> won’t be
            subsequently shared externally.
          </P>
          <P>
            There will be photographers at the event, and we may use those
            photos for promotional materials, social media, websites, etc. If
            you’re not comfortable showing up in any photos or videos, please
            ask for a red lanyard upon registration. We will do our best to
            exclude you from any pictures (but we can’t guarantee that you won’t
            accidentally end up in a picture).
          </P>
          <P>
            Some members of the press may attend. They’ll wear a green lanyard
            and have a note on their badge that identifies them as press, so
            you’re free to choose whether to speak to them and what to disclose
            to them.
          </P>

          {/* What to bring */}
          <SectionHeading id="bring" emoji="🎒">
            What to Bring
          </SectionHeading>
          <P>
            You should bring anything you’d normally bring to a networking or
            industry conference. Some examples of things you might consider
            bringing:
          </P>
          <ul className="ml-2 space-y-2 font-baskerville text-base leading-relaxed text-m26-purple-deep/90">
            {bringList.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-4 w-4 flex-shrink-0 rounded-sm border border-m26-purple/60 bg-m26-cream"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <P>
            Please <strong>DO NOT</strong> bring pets, friends who don’t have
            tickets, illegal substances, or insider knowledge (the illegal
            kind).
          </P>

          {/* What to wear */}
          <SectionHeading id="wear" emoji="👘">
            What to Wear
          </SectionHeading>
          <P>
            There’s no dress code beyond the basics: a top, a bottom, and
            (highly encouraged) shoes. We expect most people to be dressed
            casually, but encourage fashion, self-expression, and even costumes.
          </P>
          <P>
            <strong>Temperature.</strong> For days 11–20 of June, Berkeley’s
            averages run highs around 78.4°F (25.8°C) and lows around 53.8°F
            (12.1°C). These are area-wide normals; Lighthaven sits in the
            Berkeley hills/flats and afternoons can feel cooler with the bay
            breeze, while the “marine layer” often produces gray, cool mornings
            that burn off by midday.
          </P>
          <P>
            Practically, expect daytime in the low-to-mid 70s (around 22–24°C)
            and evenings dropping into the mid-50s (around 12–13°C). Since a lot
            of social spaces will be outside, you might consider bringing a
            light sweater for the evening, and a hat or sunglasses for the day.
          </P>
          <P>
            <strong>Rain probability:</strong> Very low. On an average June day
            in Berkeley there’s about a 3% chance of rain.
          </P>

          {/* Childcare */}
          <SectionHeading id="childcare" emoji="👶">
            Childcare
          </SectionHeading>
          <P>
            As two of us organizers are parents ourselves, we really want to
            support the attendance of people with kids. While we’re not sure yet
            whether we’ll have any kid-specific programming, we love having kids
            and parents in attendance, and it really contributes to the
            wholesome, family-friendly atmosphere we want to create this year.
            We want to live in a world where there isn’t so much societal
            separation between people who have and don’t have kids.
          </P>
          <P>
            We plan to have <strong>dedicated free onsite childcare</strong>. We
            plan to have a quiet space with experienced childcare providers and
            a <strong>nursing room</strong> with a fridge available. If you
            specifically need a partner/caregiver to attend to support your kids
            (or some other professional to directly support your attendance), we
            offer <strong>50% off caregiver tickets</strong> that grant full
            access to the space, meals, and sessions (email us at{' '}
            <Link href="mailto:team@manifest.is">team@manifest.is</Link>). If
            you need additional support, please let us know.
          </P>
          <P>
            If you plan on bringing children, please fill out this form
            regardless of whether you plan on using our childcare.
          </P>
          <Button href="https://airtable.com/appMZp1aBO5b7NTdM/pag451KZs8vARd9sr/form">
            Child Attendance Form
          </Button>

          {/* Footer */}
          <hr className="my-16 border-m26-lav/60" />
          <p className="text-center font-baskerville text-base italic text-m26-purple">
            Nice job reading all the way to the end of the guide! Here’s a
            little gold star, congrats: ⭐
          </p>
        </article>
      </div>
    </main>
  )
}
