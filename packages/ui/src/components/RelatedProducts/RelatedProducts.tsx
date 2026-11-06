import { useId } from 'react';

import { Card, type CardProps } from '../Card/Card';
import { Heading } from '../Heading/Heading';

export interface RelatedProductsProps {
  label?: string;
  title?: string;
  /** Rendered in italic gold after `title`, e.g. "Fine Horns" in "More Fine Horns". */
  titleAccent?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  products: CardProps[];
  /** Enlarges the first product into a tall feature tile spanning two grid rows on desktop. */
  featured?: boolean;
}

export const RelatedProducts = ({
  label,
  title,
  titleAccent,
  viewAllHref,
  viewAllLabel = 'View All',
  products,
  featured = false,
}: RelatedProductsProps) => {
  const headingId = useId();

  return (
    <section
      aria-labelledby={title ? headingId : undefined}
      className="border-t border-(--gray-600) bg-(--gray-750) py-[3.75rem] sm:py-[6rem]"
    >
      <div className="mx-auto flex max-w-[80rem] flex-col gap-[2.1875rem] px-[1.25rem] sm:px-[2rem]">
        <div className="flex flex-wrap items-end justify-between gap-[1rem]">
          <div>
            {label && (
              <p className="mb-[0.5625rem] block font-sans text-[0.8125rem] font-semibold tracking-[.28em] text-(--gold-dark) uppercase">
                {label}
              </p>
            )}
            {title && (
              <Heading level={2} id={headingId}>
                {title}
                {titleAccent && (
                  <>
                    {' '}
                    <em className="font-serif italic text-(--gold-dark)">{titleAccent}</em>
                  </>
                )}
              </Heading>
            )}
          </div>
          {viewAllHref && (
            <a
              href={viewAllHref}
              className="shrink-0 border-b border-transparent pb-[0.125rem] font-sans text-[0.875rem] font-semibold tracking-[.12em] text-(--gold-dark) uppercase no-underline transition-colors duration-200 hover:border-(--gold-dark) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--gold-dark)"
            >
              {viewAllLabel} →
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 gap-[2px] sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const isFeatureTile = featured && index === 0;
            return (
              <div key={product.link ?? product.title ?? index} className={isFeatureTile ? 'lg:row-span-2' : undefined}>
                <Card {...product} showArrow={product.showArrow ?? true} fill={isFeatureTile} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
