import React from 'react';

export interface StatProps {
  stat?: string
  title?: string;
}

export const Stat = ({ stat, title
}: StatProps) => {
  return (
    <figure aria-label={title}
      className={[
        'flex flex-col gap-[0.375rem] border-s-[0.125rem] border-(--gray-800) ps-[1.3125rem]'
      ].join(' ')}
      
    >
      <div className='text-[3.1875rem] text-(--gray-900) font-serif leading-none'>{stat}</div>
      <figcaption className='text-[0.8125rem] font-sans text-(--gray-900) uppercase tracking-[0.10625rem] font-semibold'>{title}</figcaption>
    </figure>
  );
};
