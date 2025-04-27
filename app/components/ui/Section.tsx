'use client'

interface SectionProps {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export default function Section({
  id,
  title,
  children,
  className = '',
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto mb-16 scroll-mt-24 ${dark ? 'bg-primary-800 py-20 text-ink-100' : 'py-10'}`}
    >
      <div className={`mx-auto max-w-5xl px-6 ${className}`}>
        <h2 className="mb-6 text-center text-5xl font-bold">{title}</h2>
        {children}
      </div>
    </section>
  )
}
