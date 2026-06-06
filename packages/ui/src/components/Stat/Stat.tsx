import React from 'react';

export interface StatProps {
  onClick?: () => void;
  stat?: string
  title?: string;
}

export const Stat = ({ stat, title
}: StatProps) => {
  return (
    <article
      className={[
        'flex flex-col gap-[.6rem] border-s-[.2rem] border-(--gray-800) ps-[2.1rem]'
      ].join(' ')}
      
    >
      <span className='text-[5.1rem] text-(--gray-900) font-serif leading-none'>{stat}</span>
      <p className='text-[1.3rem] font-sans text-(--gray-900) uppercase tracking-[.17rem] font-semibold'>{title}</p>
    </article>
  );
};
