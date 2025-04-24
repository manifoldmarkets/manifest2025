'use client'

interface SectionProps {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({
  id,
  title,
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto mb-16 max-w-5xl scroll-mt-24 px-6 ${className}`}
    >
      <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>
      {children}
    </section>
  )
}
