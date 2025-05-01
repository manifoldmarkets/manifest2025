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
          <h2 className="text-ink-900 mb-8 text-center text-3xl font-bold">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
