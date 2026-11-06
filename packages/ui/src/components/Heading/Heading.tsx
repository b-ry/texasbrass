import React from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const levelClasses: Record<HeadingLevel, string> = {
  1: 'font-serif font-light text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] leading-(--lh-small) text-(--gray-900)',
  2: 'font-serif font-normal text-[2.375rem] md:text-[2.875rem] lg:text-[3.5625rem] leading-(--lh-small) text-(--gray-900)',
  3: 'font-serif font-normal text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-(--lh-small) text-(--gray-900)',
  4: 'font-sans font-semibold text-[1.25rem] md:text-[1.5rem] leading-(--lh-normal) text-(--gray-900)',
  5: 'font-sans font-semibold text-[1rem] leading-(--lh-normal) text-(--gray-900)',
  6: 'font-sans font-semibold uppercase tracking-[0.125rem] text-[0.8125rem] leading-(--lh-normal) text-(--gray-900)',
};

export interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Heading = ({ level = 2, children, className, id }: HeadingProps) => {
  const Tag = `h${level}` as React.ElementType;
  return (
    <Tag id={id} className={[levelClasses[level], className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  );
};
