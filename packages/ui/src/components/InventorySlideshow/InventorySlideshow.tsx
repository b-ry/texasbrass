'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import type { Splide as SplideInstance } from '@splidejs/splide';

import '@splidejs/react-splide/css/core';

import { InventoryCard, type InventoryCardProps } from '../InventoryCard/InventoryCard';

export interface InventorySlideshowProps {
  items: InventoryCardProps[];
  /** Accessible label describing what this carousel shows, e.g. "New arrivals". */
  label: string;
}

const DESKTOP_PER_PAGE = 3;
const COMPACT_PER_PAGE = 1;
const COMPACT_BREAKPOINT = 900;
const AUTOPLAY_INTERVAL = 5500;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mirrors the `breakpoints` option passed to Splide below (max-width, same threshold),
// since react-splide's `onResized` event prop isn't exposed by its current type definitions.
const getPerPage = () => (typeof window !== 'undefined' && window.innerWidth <= COMPACT_BREAKPOINT ? COMPACT_PER_PAGE : DESKTOP_PER_PAGE);

export const InventorySlideshow = ({ items, label }: InventorySlideshowProps) => {
  // Each instance owns its own ref and state, so multiple slideshows can sit on
  // one page without interfering with each other; Splide itself auto-generates a
  // unique root id per instance when one isn't supplied.
  const splideRef = useRef<Splide>(null);
  const [reducedMotion] = useState(prefersReducedMotion);
  const [perPage, setPerPage] = useState(DESKTOP_PER_PAGE);
  const [pageIndex, setPageIndex] = useState(0);

  const pageCount = Math.max(1, Math.ceil(items.length / perPage));

  useEffect(() => {
    setPerPage(getPerPage());
    const onResize = () => setPerPage(getPerPage());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const syncPageIndex = useCallback((splide: SplideInstance) => {
    setPageIndex(Math.floor(splide.index / getPerPage()));
  }, []);

  return (
    <div className="w-full">
      <Splide
        ref={splideRef}
        aria-label={label}
        hasTrack={false}
        tabIndex={0}
        options={{
          type: 'loop',
          perPage: DESKTOP_PER_PAGE,
          // Explicit so Prev/Next always advance by a full page, matching the mockup;
          // Splide's default move amount is one slide, regardless of perPage.
          perMove: DESKTOP_PER_PAGE,
          gap: '2px',
          arrows: false,
          pagination: false,
          drag: true,
          keyboard: 'focused',
          autoplay: false,
          interval: AUTOPLAY_INTERVAL,
          pauseOnHover: true,
          pauseOnFocus: true,
          breakpoints: {
            [COMPACT_BREAKPOINT]: { perPage: COMPACT_PER_PAGE, perMove: COMPACT_PER_PAGE },
          },
        }}
        onMounted={syncPageIndex}
        onMoved={syncPageIndex}
      >
        <SplideTrack>
          {items.map((item, i) => (
            <SplideSlide key={i}>
              <InventoryCard {...item} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>

      <div role="group" aria-label={`${label} controls`} className="mt-[2.5rem] flex items-center gap-[0.75rem]">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => splideRef.current?.go('<')}
          className="flex h-[3.2rem] w-[3.2rem] items-center justify-center border border-(--gray-600) bg-transparent text-[1.1rem] text-(--text-primary) transition-colors duration-200 hover:border-(--gold-dark) hover:bg-(--gold-muted) hover:text-(--gold-dark) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--gold-dark)"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => splideRef.current?.go('>')}
          className="flex h-[3.2rem] w-[3.2rem] items-center justify-center border border-(--gray-600) bg-transparent text-[1.1rem] text-(--text-primary) transition-colors duration-200 hover:border-(--gold-dark) hover:bg-(--gold-muted) hover:text-(--gold-dark) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--gold-dark)"
        >
          <span aria-hidden="true">→</span>
        </button>

        {pageCount > 1 && (
          <div className="ml-[1rem] flex gap-[0.6rem]">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide group ${i + 1}`}
                aria-pressed={pageIndex === i}
                onClick={() => splideRef.current?.go(i * perPage)}
                className={`h-[10px] w-[10px] rounded-full border-none transition-[background,transform] duration-200 ${
                  pageIndex === i ? 'scale-[1.35] bg-(--gold-dark)' : 'bg-(--gray-600)'
                }`}
              />
            ))}
          </div>
        )}

        <p aria-live="polite" aria-atomic="true" className="sr-only">
          {`Showing group ${pageIndex + 1} of ${pageCount}`}
        </p>
      </div>
    </div>
  );
};
