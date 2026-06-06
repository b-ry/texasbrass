import React from 'react';

export interface CardProps {
  onClick?: () => void;
  image?: string;
  alt?: string;
  brow?: string;
  title?: string;
  price?: number;
  link?: string;
}


export const Card = ({ image, alt = '', title, price, brow
}: CardProps) => {
  return (
    <article
      className={[
        'cursor-pointer',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--gold-dark) relative aspect-(--aspect-43) sm:aspect-(--aspect-card) sm:max-w-[34rem]',
      ].join(' ')}
      
    >
      {image && <img src={image} alt={alt} className='col-span-full row-span-full aspect-(--aspect-43) sm:aspect-(--aspect-card) object-cover hover:scale-150 transform-gpu' />}
      <div className='p-7 flex flex-col justify-end gap-[.8rem] h-full w-full bg-linear-to-t from-(--gray-900) to-65%  inset-0 top-0 left-0 absolute'>
        <p className='inline-block font-sans font-semibold uppercase tracking-[.2rem] text-[1.2rem] sm:text-[1.4rem] sm:text-sm text-(--gold)'>{brow}</p>
        <h3 className='font-serif font-semibold text-[2.4rem] sm:text-[2.6rem] leading-(--lh-small) text-(--white)'><a href="{ link }">{title}</a></h3>
        {price && <p className='font-sans font-normal text-[1.4rem] sm:text-[1.6rem] text-(--gold)'>Starting from {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(price)}
        </p>}
      </div>
    </article>
  );
};
