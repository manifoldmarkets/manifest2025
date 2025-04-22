'use client'

import { useState } from 'react'
import Kindwords from '../../data/kindwords';

export default function Quote() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})

  return (
    <section className="max-w-prose mx-auto px-6 py-12 font-serif text-[15px] leading-relaxed text-ink-900 dark:text-ink-100 space-y-10">
      <h2 className="text-xl font-bold mb-6 text-center">Kind Words</h2>
      {Kindwords.map((q, i) => (
        <div key={i}>
          <p className="italic mb-1">“{q.preview}”</p>

          {q.full && expanded[i] && (
            <div className="mt-3 space-y-2">
              {(Array.isArray(q.full) ? q.full : [q.full]).map((para, j) => (
                <p key={j}>{para}</p>
              ))}
              {q.link && (
                <a
                  href={q.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline text-purple-600"
                >
                  Read full post →
                </a>
              )}
            </div>
          )}

          {q.full && (
            <button
              onClick={() => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))}
              className="mt-2 text-xs text-purple-600 underline"
            >
              {expanded[i] ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
      ))}
    </section>
  )
}

