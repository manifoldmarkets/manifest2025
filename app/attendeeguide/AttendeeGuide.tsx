'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

type TocItem = { emoji: string; label: string; id: string }

const toc: TocItem[] = [
  { emoji: '🏡', label: 'Venue', id: 'venue' },
  { emoji: '📆', label: 'Schedule', id: 'schedule' },
  { emoji: '🎟', label: 'Ticketing & Registration', id: 'ticketing' },
  { emoji: '🤝', label: 'Connecting with Other Attendees', id: 'connect' },
  { emoji: '🍪', label: 'Food', id: 'food' },
  { emoji: '☎️', label: 'Get Help', id: 'help' },
  { emoji: '♿️', label: 'Accessibility', id: 'accessibility' },
  { emoji: '⚖️', label: 'Participant Policies', id: 'policies' },
  { emoji: '🎒', label: 'What to Bring', id: 'bring' },
  { emoji: '👘', label: 'What to Wear', id: 'wear' },
  { emoji: '👶', label: 'Childcare', id: 'childcare' },
]

const nightMarketBooths: { emoji: string; title: string; body: string }[] = [
  {
    emoji: '📖',
    title: 'Book market',
    body: 'Selling, swapping, or giving away physically printed text? A book? An essay? A poem? A pamphlet? A manifesto?',
  },
  {
    emoji: '📦',
    title: 'Stuff market',
    body: 'Arts, crafts, zines, food, weird trinkets, anything you’ve made or curated that someone might want to take home.',
  },
  {
    emoji: '🌟',
    title: 'Experience / Service market',
    body: 'Match-making, mini games, compliments, insults, haircuts, massages, life advice, argument steel-manning, shoe shining — anything where you are providing a service or experience.',
  },
  {
    emoji: '📚',
    title: 'Education market',
    body: 'Teaching a quick skill? General crash courses, lockpicking, how to read a stock chart, beginner LaTeX — anything where someone walks away knowing how to do a thing they couldn’t do before.',
  },
  {
    emoji: 'ℹ️',
    title: 'Information market',
    body: 'Share a research project, a half-baked theory, a passion explainer; like a poster session without the standards.',
  },
  {
    emoji: '🌌',
    title: 'Black market',
    body: 'Rights to babies’ middle names, “probiotics”, expired forecasts, etc. Black market goods must still be legal! (We mean it.)',
  },
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
    <h3 className="mt-8 font-cinzel text-xl font-semibold text-m26-purple-deep">{children}</h3>
  )
}

function Callout({
  emoji,
  children,
}: {
  emoji: string
  children: ReactNode
}) {
  return (
    <div className="my-5 flex items-start gap-4 rounded-tl-3xl rounded-br-3xl border border-m26-lav/60 bg-m26-cream px-5 py-4 shadow-sm">
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
      className="my-2 inline-block rounded-tl-full rounded-br-full bg-m26-btn px-6 py-2.5 font-cinzel text-sm font-semibold uppercase tracking-wider text-m26-cream transition-colors hover:bg-m26-btn-hover"
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
        <div className="mx-auto -mt-16 max-w-3xl px-6 sm:-mt-24">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-20 w-20 overflow-hidden rounded-tl-full rounded-br-full border-4 border-m26-parchment bg-m26-cream shadow-md sm:h-24 sm:w-24">
              <Image
                src="/images/attendeeguide/icon.png"
                alt="Manifest logo"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <h1 className="mt-6 font-cinzel-decorative text-4xl font-bold leading-tight tracking-tight text-m26-purple-dark sm:text-5xl">
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
          className="mx-6 mb-10 mt-12 rounded-tl-3xl rounded-br-3xl border border-m26-lav/60 bg-m26-cream/80 px-5 py-5 lg:sticky lg:top-0 lg:mx-0 lg:mb-0 lg:mt-0 lg:flex lg:h-screen lg:w-64 lg:flex-shrink-0 lg:flex-col lg:overflow-y-auto lg:rounded-none lg:border-0 lg:border-r lg:border-m26-lav/60 lg:bg-m26-cream/60 lg:px-6 lg:py-10 xl:w-72"
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
          <Link href="http://lighthaven.space">Lighthaven Campus</Link>, 2740 Telegraph Ave,
          Berkeley, CA 94705
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
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-tl-3xl rounded-br-3xl border border-m26-lav/60 bg-m26-cream">
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

        {/* Schedule */}
        <SectionHeading id="schedule" emoji="📆">
          Schedule
        </SectionHeading>
        <Callout emoji="🔗">
          See the live working schedule on{' '}
          <Link href="https://waypoint.lighthaven.space/e/manifest-2026/schedule">Waypoint</Link>
        </Callout>

        <SubHeading>Adding your own sessions</SubHeading>
        <P>
          At each of LessOnline, Summer Camp, and Manifest, attendees can host their own sessions!
          You can add your own events directly to the schedule now from Waypoint.
        </P>
        <ul className="ml-6 list-disc space-y-2 font-baskerville text-base leading-relaxed text-m26-purple-deep/90">
          {sessionTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>

        <SubHeading>Special events you can register for now</SubHeading>
        <P>
          These are some highly participatory events organized by Manifest, which you can register
          for in advance.
        </P>

        <div className="my-6 rounded-tl-3xl rounded-br-3xl border border-m26-lav bg-m26-lav-light/40 px-6 py-5">
          <h4 className="font-cinzel text-lg font-bold text-m26-purple-dark">Night Market</h4>
          <P>
            On Friday evening, there will be a night market that is open to the public, where you
            can sign up to host a booth. Booth/table space is limited, with some priority given to
            Manifest ticketholders — but we encourage you to get your requests in early.
          </P>
          <ul className="mt-4 space-y-3">
            {nightMarketBooths.map((b) => (
              <li key={b.title} className="font-baskerville text-base text-m26-purple-deep/90">
                <span className="mr-2" aria-hidden>
                  {b.emoji}
                </span>
                <strong className="font-bold text-m26-purple-dark">{b.title}</strong> — {b.body}
              </li>
            ))}
          </ul>
          <Button href="https://airtable.com/appMZp1aBO5b7NTdM/pag9gppXcX1cxRixI/form">
            Register a table
          </Button>
        </div>

        <div className="my-6 rounded-tl-3xl rounded-br-3xl border border-m26-lav bg-m26-lav-light/40 px-6 py-5">
          <h4 className="font-cinzel text-lg font-bold text-m26-purple-dark">Career Fair</h4>
          <P>
            In parallel to the Night Market, we will also have a career fair, where you can talk to
            hiring sponsors and hang out. Please submit this form if you think you might come,
            whether or not you are interested in looking for work.
          </P>
          <Button href="https://airtable.com/appMZp1aBO5b7NTdM/pagH4yhHlxyolS2Qv/form">
            Career Fair sign-up
          </Button>
        </div>

        {/* Ticketing */}
        <SectionHeading id="ticketing" emoji="🎟">
          Ticketing & Registration
        </SectionHeading>
        <P>
          Throughout the festival season, <strong>your name badge will act as your ticket in.</strong>
        </P>
        <P>
          If you’re coming to multiple events during the festival season, you’ll have a separate
          name badge for each part (LessOnline, Summer Camp, and Manifest). You’ll be expected to
          wear your name badge at all times while on campus. If you forget to wear your badge, staff
          or security may ask you to see your name badge and ID.
        </P>
        <P>
          When you first arrive at the venue, you’ll be asked to show your ticket QR code in
          Waypoint before going to registration to be given your name badge.
        </P>
        <Callout emoji="🕒">
          <strong>Registration will open for Manifest at 2pm on Friday</strong>, and will open at
          9am on Saturday and Sunday.
        </Callout>
        <P>Once you have your badge, you’ll be free to come and go from the venue at any time.</P>

        {/* Connect */}
        <SectionHeading id="connect" emoji="🤝">
          Connect with Other Attendees
        </SectionHeading>
        <P>
          We highly recommend joining our{' '}
          <Link href="https://discord.gg/ySNwKgb2Bp">Discord</Link>, where you can chat with other
          Manifest attendees, coordinate carpool or shared housing, give the organizers feedback,
          et cetera.
        </P>
        <P>
          The best way to connect with and learn details about fellow attendees will be on
          Waypoint. Check your email for an invite and add your profile. Have Waypoint feedback?
          Contact <Link href="mailto:team@lightconeinfrastructure.com">team@lightconeinfrastructure.com</Link>.
        </P>

        {/* Food */}
        <SectionHeading id="food" emoji="🍪">
          Food
        </SectionHeading>
        <SubHeading>Meals</SubHeading>
        <P>
          <strong>Food and drinks will be provided free of charge.</strong> We’ll have plenty of
          vegan and vegetarian options, and we’ll do our best to accommodate dietary restrictions,
          allergies, and preferences. <strong>Meals provided:</strong> dinner on Friday, plus
          grab-and-go breakfast, lunch, and dinner on Saturday and Sunday.
        </P>
        <SubHeading>Snacks</SubHeading>
        <P>
          <strong>Snacks will be provided free of charge.</strong> Small snacks, water, and drinks
          (e.g. Soylent, Huel, sodas, etc) will be available at all times.
        </P>

        {/* Get Help */}
        <SectionHeading id="help" emoji="☎️">
          Get Answers
        </SectionHeading>
        <P>
          All communications happen on the Discord (
          <Link href="http://bit.ly/manifestdiscord">bit.ly/manifestdiscord</Link>). Join it now to
          ask questions, get help, etc!
        </P>

        <SubHeading>General help / support / questions</SubHeading>
        <P>
          You can ask general questions on <Code>#questions</Code>, or walk up to the registration
          desk at the entrance.
        </P>
        <figure className="my-6">
          <a
            href="/images/attendeeguide/registration-map.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-tl-3xl rounded-br-3xl border border-m26-lav/60 bg-m26-cream">
              <Image
                src="/images/attendeeguide/registration-map.png"
                alt="Map showing the registration desk at Lighthaven"
                fill
                sizes="(max-width: 640px) 90vw, 336px"
                className="object-contain"
              />
            </div>
          </a>
          <figcaption className="mt-2 text-center font-baskerville text-sm italic text-m26-muted">
            The registration desk is right by the entrance.
          </figcaption>
        </figure>

        <SubHeading>Event staff</SubHeading>
        <P>
          We’ll be constantly checking the channels, but if you need an urgent answer, you can ping
          the whole events staff by tagging <Code>@conference team</Code>.
        </P>

        <SubHeading>Security</SubHeading>
        <P>
          We’ll have security during all hours of the conference. You can tag them on Discord with{' '}
          <Code>@security</Code>.
        </P>

        <SubHeading>Community contacts</SubHeading>
        <P>
          We’ll have a community contact who you can talk to about any interpersonal or emotional
          issues during the conference. You can tag them on Discord with{' '}
          <Code>@community contact</Code>. Note that our community contact is a volunteer, and is
          not being paid by the event organizing team. They just rock.
        </P>
        <div className="my-4 flex items-center gap-4 rounded-tl-3xl rounded-br-3xl border border-m26-lav/60 bg-m26-cream px-5 py-4">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-tl-full rounded-br-full border border-m26-lav">
            <Image
              src="/images/attendeeguide/stefanie.png"
              alt="Stefanie Shank"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="font-baskerville text-base">
            <div className="font-cinzel text-lg font-bold text-m26-purple-dark">
              Stefanie Shank
            </div>
            <div>
              Discord: <Code>@stefanie</Code>
            </div>
            <div>Phone: +1 (925) 526-5006</div>
          </div>
        </div>

        <SubHeading>Volunteers</SubHeading>
        <P>
          There will be loads of volunteers on-hand to help make the event go smoothly. If you have
          any questions, please feel free to ask them — they will be wearing red t-shirts when
          on-duty.
        </P>

        {/* Accessibility */}
        <SectionHeading id="accessibility" emoji="♿️">
          Accessibility
        </SectionHeading>
        <P>
          Unfortunately, Lighthaven is not generally wheelchair-accessible. If you’re interested in
          learning more about how you can participate with a wheelchair, please{' '}
          <Link href="mailto:carolanne@manifest.is">send us an email</Link> and we’d be happy to
          work with you.
        </P>

        {/* Policies */}
        <SectionHeading id="policies" emoji="⚖️">
          Participant Policies
        </SectionHeading>
        <SubHeading>Code of Conduct</SubHeading>
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
          We understand that human interaction is complex. If you feel able, please give each other
          the benefit of explaining behavior you find unwelcome or offensive. If you’re asked to
          stop a behavior that’s causing a problem for someone, we expect you to stop immediately.
        </P>
        <P>
          If you: break the law, the code of conduct, or the policies of the venue; don’t respect
          other attendees, volunteers, or staff; and/or, generally do bad things, we’ll take action
          including but not limited to: asking you politely to stop; asking you slightly less
          politely to stop; asking you to leave the venue; etc. That definitely won’t be fun for
          us, and probably not for you either.
        </P>

        <SubHeading>Code of Being a Particularly Awesome Attendee</SubHeading>
        <P>
          The code of conduct above expresses how <em>not</em> to behave at Manifest. But more
          importantly, we have a guide for how <em>to</em> behave at Manifest if you want to go
          above and beyond:
        </P>
        <P>
          🐶{' '}
          <Link href="https://www.notion.so/How-to-Be-Prosocial-at-Manifest-2026-36f54492ea7a80c0be92da05f6402396">
            How to Be Prosocial at Manifest 2026
          </Link>
        </P>

        <SubHeading>Privacy and Photo Policy</SubHeading>
        <P>
          Please note that <strong>we can’t guarantee any statements stay inside the conference.</strong>
        </P>
        <P>
          We may share some identifying information with venue staff, security, sponsors, and other
          relevant parties. We may share your name with other attendees, through selecting fields
          on various forms. We’re careful to only share necessary information, and only when it’s
          actually useful. However, we can’t guarantee that any information you share with{' '}
          <em>other attendees</em> won’t be subsequently shared externally.
        </P>
        <P>
          There will be photographers at the event, and we may use those photos for promotional
          materials, social media, websites, etc. If you’re not comfortable showing up in any
          photos or videos, please ask for a red lanyard upon registration. We will do our best to
          exclude you from any pictures (but we can’t guarantee that you won’t accidentally end up
          in a picture).
        </P>
        <P>
          Some members of the press may attend. They’ll wear a green lanyard and ticker on their
          badge that identifies them as press, so you’re free to choose whether to speak to them
          and what to disclose to them.
        </P>

        {/* What to bring */}
        <SectionHeading id="bring" emoji="🎒">
          What to Bring
        </SectionHeading>
        <P>
          You should bring anything you’d normally bring to a networking or industry conference.
          Some examples of things you might consider bringing:
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
          Please <strong>DO NOT</strong> bring pets, friends who don’t have tickets, illegal
          substances, or insider knowledge (the illegal kind).
        </P>

        {/* What to wear */}
        <SectionHeading id="wear" emoji="👘">
          What to Wear
        </SectionHeading>
        <P>
          There’s no dress code beyond the basics: a top, a bottom, and (highly encouraged) shoes.
          We expect most people to be dressed casually, but encourage fashion, self-expression, and
          even costumes.
        </P>
        <P>
          <strong>Temperature.</strong> For days 11–20 of June, Berkeley’s averages run highs
          around 78.4°F (25.8°C) and lows around 53.8°F (12.1°C). These are area-wide normals;
          Lighthaven sits in the Berkeley hills/flats and afternoons can feel cooler with the bay
          breeze, while the “marine layer” often produces gray, cool mornings that burn off by
          midday.
        </P>
        <P>
          Practically, expect daytime in the low-to-mid 70s (around 22–24°C) and evenings dropping
          into the mid-50s (around 12–13°C). Since a lot of social spaces will be outside, you
          might consider bringing a light sweater for the evening, and a hat or sunglasses for the
          day.
        </P>
        <P>
          <strong>Rain probability:</strong> Very low. On an average June day in Berkeley there’s
          about a 3% chance of rain.
        </P>

        {/* Childcare */}
        <SectionHeading id="childcare" emoji="👶">
          Childcare
        </SectionHeading>
        <P>
          As two of us organizers are parents ourselves, we really want to support the attendance
          of people with kids. While we’re not sure yet whether we’ll have any kid-specific
          programming, we love having kids and parents in attendance, and it really contributes to
          the wholesome, family-friendly atmosphere we want to create this year. We want to live in
          a world where there isn’t so much societal separation between people who have and don’t
          have kids.
        </P>
        <P>
          We plan to have <strong>dedicated free onsite childcare</strong>. We plan to have a quiet
          space with experienced childcare providers and a <strong>nursing room</strong> with a
          fridge available. If you specifically need a partner/caregiver to attend to support your
          kids (or some other professional to directly support your attendance), we offer{' '}
          <strong>50% off caregiver tickets</strong> that grant full access to the space, meals,
          and sessions (email us at <Link href="mailto:team@manifest.is">team@manifest.is</Link>).
          If you need additional support, please let us know.
        </P>
        <P>
          If you plan on bringing children, please fill out this form regardless of whether you
          plan on using our childcare.
        </P>
        <Button href="https://airtable.com/appMZp1aBO5b7NTdM/pag451KZs8vARd9sr/form">
          Child Attendance Form
        </Button>

        {/* Footer */}
        <hr className="my-16 border-m26-lav/60" />
        <p className="text-center font-baskerville text-base italic text-m26-purple">
          Nice job reading all the way to the end of the guide! Here’s a little gold star,
          congrats: ⭐
        </p>
        </article>
      </div>
    </main>
  )
}
