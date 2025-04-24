'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import substackQuotes from '../../data/substack-quotes'

export default function SubstackCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative mx-auto max-w-xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {substackQuotes.map((quote) => (
            <div
              key={quote.src}
              className="relative min-w-0 flex-[0_0_80%] pl-4"
            >
              <a href={quote.link} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={quote.src}
                    alt={quote.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute inset-y-0 left-0 flex w-[8%] cursor-pointer items-center justify-center bg-black/20 backdrop-blur-sm transition-colors hover:bg-black/30"
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute inset-y-0 right-0 flex w-[8%] cursor-pointer items-center justify-center bg-black/20 backdrop-blur-sm transition-colors hover:bg-black/30"
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
}
