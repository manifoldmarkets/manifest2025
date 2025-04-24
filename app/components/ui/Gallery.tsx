'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import Image from 'next/image';
import gallery from '../../data/gallery';
import { PrevButton, NextButton, usePrevNextButtons } from './carousel/CarouselButtons';

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  });
  const { prevBtnEnabled, nextBtnEnabled } = usePrevNextButtons(emblaApi);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {gallery.map((image) => (
            <div key={image.src} className="relative min-w-0 flex-[0_0_80%] pl-4">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 w-[8%] bg-black/20 backdrop-blur-sm pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[8%] bg-black/20 backdrop-blur-sm pointer-events-none" />
      <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
      <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
    </div>
  );
}