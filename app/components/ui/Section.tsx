'use client'

interface SectionProps {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`mb-16 max-w-5xl mx-auto px-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      {children}
    </section>
  )
}