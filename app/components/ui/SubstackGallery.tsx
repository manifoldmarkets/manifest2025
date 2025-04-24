'use client'

import Image from 'next/image'
import substackQuotes from '../../data/substack-quotes'

export default function SubstackGallery() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
      {substackQuotes.map((quote) => (
        <a
          key={quote.src}
          href={quote.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
        >
          <Image
            src={quote.src}
            alt={quote.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </a>
      ))}
    </div>
  )
}
