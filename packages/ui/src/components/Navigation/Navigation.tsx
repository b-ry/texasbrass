'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  logoHref?: string;
  logoText?: string;
  logoAccent?: string;
  links: NavigationLink[];
  ctaLabel?: string;
  ctaHref?: string;
  /** Renders a "Skip to main content" link targeting this element id. Pass `false` to omit it. */
  skipToId?: string | false;
}

const SCROLL_THRESHOLD = 50;

export const Navigation = ({
  logoHref = '/',
  logoText = 'Carol Brass',
  logoAccent = 'of Texas',
  links,
  ctaLabel,
  ctaHref,
  skipToId = 'main-content',
}: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const drawerId = useId();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    hamburgerRef.current?.focus();
  }, []);

  // Lock background scroll while the drawer is open, matching the reference design.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Move focus into the drawer on open, trap Tab within it, and close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const focusable = drawerRef.current?.querySelectorAll<HTMLElement>('a, button');
    focusable?.[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeDrawer();
        return;
      }
      if (e.key !== 'Tab' || !focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeDrawer]);

  return (
    <>
      {skipToId && (
        <a
          href={`#${skipToId}`}
          className="fixed top-[-6.25rem] left-[1rem] z-[9999] bg-(--gold-dark) px-[1.5rem] py-[0.75rem] text-[0.9rem] font-semibold text-(--white) no-underline transition-[top] duration-200 focus-visible:top-[1rem]"
        >
          Skip to main content
        </a>
      )}

      <nav
        aria-label="Main navigation"
        className={[
          'fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-[1.5rem] py-[1.25rem] backdrop-blur-[8px] transition-[background-color] duration-300 sm:px-[3rem]',
          scrolled
            ? 'bg-[rgba(250,248,244,0.98)] border-b border-(--gray-600) shadow-[0_1px_24px_rgba(28,26,23,0.06)]'
            : 'bg-[linear-gradient(to_bottom,rgba(250,248,244,0.97),rgba(250,248,244,0))]',
        ].join(' ')}
      >
        <a
          href={logoHref}
          aria-label={`${logoText} ${logoAccent} – Home`}
          className="shrink-0 font-serif text-[1.6rem] font-semibold tracking-[0.06em] whitespace-nowrap text-(--gold-dark) no-underline"
        >
          {logoText} <span className="font-normal text-(--text-primary)">{logoAccent}</span>
        </a>

        <ul className="hidden items-center gap-[2rem] min-[1180px]:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative inline-block py-[0.25rem] font-sans text-[0.8rem] font-semibold tracking-[0.14em] text-(--text-secondary) uppercase no-underline transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-(--gold-dark) after:transition-transform after:duration-300 hover:text-(--gold-dark) hover:after:scale-x-100 focus-visible:text-(--gold-dark) focus-visible:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            className="hidden shrink-0 border-[1.5px] border-(--gold-dark) px-[1.5rem] py-[0.7rem] font-sans text-[0.8rem] font-semibold tracking-[0.12em] whitespace-nowrap text-(--gold-dark) uppercase no-underline transition-all duration-[250ms] hover:bg-(--gold-dark) hover:text-(--white) min-[1180px]:block"
          >
            {ctaLabel}
          </a>
        )}

        <button
          ref={hamburgerRef}
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls={drawerId}
          onClick={() => setIsOpen((open) => !open)}
          className="z-[201] flex flex-col gap-[5px] border-none bg-transparent p-[0.5rem] min-[1180px]:hidden"
        >
          <span
            aria-hidden="true"
            className={`block h-[2px] w-[26px] origin-center bg-(--text-primary) transition-transform duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            aria-hidden="true"
            className={`block h-[2px] w-[26px] origin-center bg-(--text-primary) transition-[opacity,transform] duration-300 ${isOpen ? 'scale-x-0 opacity-0' : ''}`}
          />
          <span
            aria-hidden="true"
            className={`block h-[2px] w-[26px] origin-center bg-(--text-primary) transition-transform duration-300 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <nav
        ref={drawerRef}
        id={drawerId}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[190] flex-col items-center justify-center gap-[2rem] border-t-[3px] border-(--gold) bg-[rgba(250,248,244,0.99)] p-[2rem] ${isOpen ? 'flex' : 'hidden'}`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeDrawer}
            className="relative font-serif text-[1.6rem] tracking-[0.08em] text-(--text-primary) uppercase no-underline transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-(--gold-dark) after:transition-transform after:duration-300 hover:text-(--gold-dark) hover:after:scale-x-100 focus-visible:text-(--gold-dark) focus-visible:after:scale-x-100"
          >
            {link.label}
          </a>
        ))}
        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            onClick={closeDrawer}
            className="mt-[0.5rem] border-[1.5px] border-(--gold-dark) px-[1.5rem] py-[0.7rem] font-sans text-[0.9rem] font-semibold tracking-[0.12em] text-(--gold-dark) uppercase no-underline transition-all duration-[250ms] hover:bg-(--gold-dark) hover:text-(--white)"
          >
            {ctaLabel}
          </a>
        )}
      </nav>
    </>
  );
};
