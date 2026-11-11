'use client';

import { useCallback, useRef, useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import type { Splide as SplideInstance } from '@splidejs/splide';

import '@splidejs/react-splide/css/core';

import { Heading } from '../Heading/Heading';

export interface TestimonialItem {
  quote: string;
  /** Star rating out of 5. Defaults to 5. */
  rating?: number;
  authorName: string;
  authorRole?: string;
  avatarSrc?: string;
  avatarAlt?: string;
}

export interface TestimonialProps {
  label?: string;
  title?: string;
  /** Rendered in italic gold after `title`, e.g. "Stage" in "Voices from the Stage". */
  titleAccent?: string;
  testimonials: TestimonialItem[];
}

const AUTOPLAY_INTERVAL = 5500;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const Testimonial = ({ label, title, titleAccent, testimonials }: TestimonialProps) => {
  // Each instance owns its own ref and state, so multiple instances can sit on one
  // page without interfering with each other; Splide auto-generates a unique root
  // id per instance when one isn't supplied.
  const splideRef = useRef<Splide>(null);
  const [reducedMotion] = useState(prefersReducedMotion);
  const [activeIndex, setActiveIndex] = useState(0);

  const syncIndex = useCallback((splide: SplideInstance) => setActiveIndex(splide.index), []);

  return (
    <section className="bg-(--white) py-[3.75rem] sm:py-[6rem]">
      <div className="mx-auto max-w-[80rem] px-[1.25rem] text-center sm:px-[2rem]">
        {label && (
          <p className="mb-[0.5625rem] block font-sans text-[0.8rem] font-semibold tracking-[.28em] text-(--gold-dark) uppercase">
            {label}
          </p>
        )}
        {title && (
          <Heading level={2} className="text-center">
            {title}
            {titleAccent && (
              <>
                {' '}
                <em className="font-serif italic text-(--gold-dark)">{titleAccent}</em>
              </>
            )}
          </Heading>
        )}

        <div className="relative mt-[3.5rem] overflow-hidden">
          <Splide
            ref={splideRef}
            aria-label={label ? `${label} testimonials` : 'Testimonials'}
            hasTrack={false}
            tabIndex={0}
            options={{
              type: 'loop',
              perPage: 1,
              arrows: false,
              pagination: false,
              drag: true,
              keyboard: 'focused',
              autoplay: false,
              interval: AUTOPLAY_INTERVAL,
              pauseOnHover: true,
              pauseOnFocus: true,
            }}
            onMounted={syncIndex}
            onMoved={syncIndex}
          >
            <SplideTrack>
              {testimonials.map((t, i) => (
                <SplideSlide key={i}>
                  <blockquote className="px-[0.75rem] sm:px-[2.5rem] lg:px-[5rem]">
                    <div
                      aria-label={`${t.rating ?? 5} out of 5 stars`}
                      className="mb-[1.5rem] text-[1.1rem] tracking-[0.2em] text-(--gold-mid)"
                    >
                      {'★'.repeat(t.rating ?? 5)}
                    </div>
                    <span
                      aria-hidden="true"
                      className="mb-[1.8rem] block font-serif text-[6rem] leading-[0.4] text-(--gold-mid) opacity-50 sm:text-[9rem]"
                    >
                      &quot;
                    </span>
                    <p className="mx-auto max-w-[51.25rem] font-serif text-[clamp(1.5rem,2.5vw,2.1rem)] font-normal text-(--gray-900) italic leading-[1.55]">
                      {t.quote}
                    </p>
                    <footer className="mt-[2.5rem] flex flex-col items-center">
                      {t.avatarSrc ? (
                        <img
                          src={t.avatarSrc}
                          alt={t.avatarAlt ?? ''}
                          className="mb-[1rem] h-[64px] w-[64px] shrink-0 rounded-full border-2 border-(--gray-600) bg-(--gray-700) object-cover"
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className="mb-[1rem] h-[64px] w-[64px] shrink-0 rounded-full border-2 border-(--gray-600) bg-(--gray-700)"
                        />
                      )}
                      <div className="mt-[0.4rem] font-sans text-[0.9rem] font-semibold tracking-[0.18em] text-(--gold-dark) uppercase">
                        {t.authorName}
                      </div>
                      {t.authorRole && (
                        <div className="mt-[0.25rem] font-sans text-[1rem] font-medium tracking-[0.05em] text-(--text-secondary)">
                          {t.authorRole}
                        </div>
                      )}
                    </footer>
                  </blockquote>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>

        <div role="group" aria-label="Testimonial controls" className="mt-[3rem] flex items-center justify-center gap-[0.75rem]">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => splideRef.current?.go('<')}
            className="flex h-[3.2rem] w-[3.2rem] items-center justify-center border border-(--gray-600) bg-transparent text-[1.1rem] text-(--text-primary) transition-colors duration-200 hover:border-(--gold-dark) hover:bg-(--gold-muted) hover:text-(--gold-dark) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--gold-dark)"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="flex gap-[0.6rem]">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Testimonial ${i + 1}`}
                aria-pressed={activeIndex === i}
                onClick={() => splideRef.current?.go(i)}
                className={`h-[10px] w-[10px] rounded-full border-none transition-[background,transform] duration-200 ${
                  activeIndex === i ? 'scale-[1.35] bg-(--gold-dark)' : 'bg-(--gray-600)'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => splideRef.current?.go('>')}
            className="flex h-[3.2rem] w-[3.2rem] items-center justify-center border border-(--gray-600) bg-transparent text-[1.1rem] text-(--text-primary) transition-colors duration-200 hover:border-(--gold-dark) hover:bg-(--gold-muted) hover:text-(--gold-dark) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--gold-dark)"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <p aria-live="polite" aria-atomic="true" className="sr-only">
          {`Testimonial ${activeIndex + 1} of ${testimonials.length}`}
        </p>
      </div>
    </section>
  );
};
