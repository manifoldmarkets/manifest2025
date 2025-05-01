'use client'

interface SectionProps {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
  dark?: boolean
  isEven?: boolean
}

export default function Section({
  id,
  title,
  children,
  className = '',
  dark = false,
  isEven = false,
}: SectionProps) {
  return (
    <section
      id={id}
      style={{
        backgroundColor: isEven ? 'rgb(129 140 248 / 0.1)' : 'rgb(255 255 255)'
      }}
      className={`mx-auto mb-16 scroll-mt-24 py-10 ${
        dark ? 'bg-primary-800 text-ink-100' : ''
      }`}
    >
      <div className={`mx-auto max-w-5xl px-6 ${className}`}>
        <h2 className="mb-6 text-center text-5xl font-bold">{title}</h2>
        {children}
      </div>
    </section>
  )
}
