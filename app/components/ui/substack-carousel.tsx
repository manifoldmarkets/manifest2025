'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import Image from 'next/image';
import substackQuotes from '../../data/substack-quotes';

export default function SubstackCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {substackQuotes.map((quote) => (
            <div key={quote.src} className="relative min-w-0 flex-[0_0_80%] pl-4">
              <a href={quote.link} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-square rounded-lg overflow-hidden">
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
        className="absolute inset-y-0 left-0 w-[8%] bg-black/20 hover:bg-black/30 backdrop-blur-sm transition-colors cursor-pointer flex items-center justify-center"
      >
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={scrollNext}
        className="absolute inset-y-0 right-0 w-[8%] bg-black/20 hover:bg-black/30 backdrop-blur-sm transition-colors cursor-pointer flex items-center justify-center"
      >
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}