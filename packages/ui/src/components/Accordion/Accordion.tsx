'use client';

import React, { useId, useLayoutEffect, useRef, useState } from 'react';

export interface AccordionProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'id' | 'type' | 'onClick' | 'aria-expanded' | 'aria-controls'
  > {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  accordion_heading: string;
  accordion_content: React.ReactNode;
  /** Whether the accordion is expanded on initial render. */
  defaultOpen?: boolean;
}

export const Accordion = ({
  accordion_heading,
  accordion_content,
  defaultOpen = false,
  ...props
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const generatedId = useId();
  const triggerId = `accordion-trigger-${generatedId}`;
  const contentId = `accordion-content-${generatedId}`;

  const panelRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(defaultOpen ? 'none' : '0px');

  useLayoutEffect(() => {
    if (!panelRef.current) return;
    setMaxHeight(isOpen ? `${panelRef.current.scrollHeight}px` : '0px');
  }, [isOpen, accordion_content]);

  return (
    <div className="border-b border-(--gray-600)">
      <h3 className="m-0">
        <button
          type="button"
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((open) => !open)}
          className={[
            'flex w-full cursor-pointer items-center justify-between border-none bg-transparent py-[1.1rem] text-left font-sans text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-(--text-primary) transition-colors duration-200 hover:text-(--gold-dark)',
          ].join(' ')}
          {...props}
        >
          <span>{accordion_heading}</span>
          <span
            aria-hidden="true"
            className={[
              'shrink-0 text-[1.3rem] leading-none text-(--gold-dark) transition-transform duration-300',
              isOpen ? 'rotate-45' : '',
            ].join(' ')}
          >
            +
          </span>
        </button>
      </h3>

      <div
        ref={panelRef}
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
        style={{ maxHeight }}
        className="overflow-hidden transition-[max-height] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        <div className="pb-[1rem]">{accordion_content}</div>
      </div>
    </div>
  );
};

