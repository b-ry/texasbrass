'use client';

import { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import type { Splide as SplideInstance } from '@splidejs/splide';

import '@splidejs/react-splide/css/core';

export interface SliderImage {
  src: string;
  alt: string;
}

export interface SliderProps {
  images: SliderImage[];
  /** Accessible label describing what this carousel shows, e.g. a product name. */
  label: string;
}

export const Slider = ({ images, label }: SliderProps) => {
  const mainRef = useRef<Splide>(null);
  const thumbsRef = useRef<Splide>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  useEffect(() => {
    const main = mainRef.current;
    const thumbs = thumbsRef.current?.splide;
    if (main && thumbs) {
      main.sync(thumbs);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="relative aspect-[5/4] overflow-hidden bg-(--gray-700) after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-[3px] after:bg-linear-to-r after:from-transparent after:via-(--gold-mid) after:to-transparent after:content-['']">
        <Splide
          ref={mainRef}
          aria-label={label}
          hasTrack={false}
          tabIndex={0}
          options={{
            type: 'slide',
            rewind: true,
            arrows: false,
            pagination: false,
            drag: true,
            keyboard: 'focused',
          }}
          onMoved={(splide: SplideInstance) => setActiveIndex(splide.index)}
        >
          <SplideTrack>
            {images.map((image) => (
              <SplideSlide key={image.src}>
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>

        <button
          type="button"
          aria-label="Previous image"
          onClick={() => mainRef.current?.go('-1')}
          className="absolute top-1/2 left-[1rem] z-20 flex h-[2.8rem] w-[2.8rem] -translate-y-1/2 cursor-pointer items-center justify-center border border-(--gray-600) bg-(--white)/92 text-[1rem] text-(--text-primary) transition-colors duration-200 hover:border-(--gold-dark) hover:bg-(--white) hover:text-(--gold-dark)"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => mainRef.current?.go('+1')}
          className="absolute top-1/2 right-[1rem] z-20 flex h-[2.8rem] w-[2.8rem] -translate-y-1/2 cursor-pointer items-center justify-center border border-(--gray-600) bg-(--white)/92 text-[1rem] text-(--text-primary) transition-colors duration-200 hover:border-(--gold-dark) hover:bg-(--white) hover:text-(--gold-dark)"
        >
          <span aria-hidden="true">→</span>
        </button>

        <div
          aria-live="polite"
          aria-atomic="true"
          className="absolute right-[1rem] bottom-[1rem] z-10 bg-(--white)/85 px-[0.65rem] py-[0.2rem] text-[0.8rem] font-semibold tracking-[0.1em] text-(--text-muted) uppercase"
        >
          {activeIndex + 1} / {total}
        </div>
      </div>

      <Splide
        ref={thumbsRef}
        aria-label={`${label} thumbnails`}
        options={{
          rewind: true,
          isNavigation: true,
          perPage: 4,
          gap: '0.5rem',
          pagination: false,
          arrows: false,
        }}
        className="mt-[0.6rem]"
      >
        {images.map((image, i) => (
          <SplideSlide
            key={image.src}
            aria-label={`View image ${i + 1}: ${image.alt}`}
            aria-current={i === activeIndex ? 'true' : undefined}
            className={[
              'border-2 transition-colors duration-200',
              i === activeIndex ? 'border-(--gold-dark)' : 'border-transparent hover:border-(--gray-600)',
            ].join(' ')}
          >
            <img src={image.src} alt="" className="block aspect-[5/4] w-full object-cover" />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
