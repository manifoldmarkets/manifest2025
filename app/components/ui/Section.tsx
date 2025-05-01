'use client'

import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title?: string
  children: ReactNode
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
      className={`bg-ink-50 py-10 ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        {title && (
          <h2
            id={id}
            className={`mb-8 text-center text-4xl font-bold ${className}`}
          >
            <span className="bg-gradient-to-r from-violet-700 to-primary-700 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
