export interface CardProps {
  onClick?: () => void;
  image?: string;
  alt?: string;
  brow?: string;
  title?: string;
  /** A number is formatted as currency ("Starting from $699"); a string is rendered as-is (e.g. "From $699", "Contact for Pricing"). */
  price?: number | string;
  link?: string;
  /** Reveals a small arrow badge in the corner on hover/focus. */
  showArrow?: boolean;
  /** Fills the height of its container at the `lg` breakpoint instead of using a fixed aspect ratio. Use for a feature tile spanning multiple grid rows on desktop. */
  fill?: boolean;
}

const formatPrice = (price: number | string) => {
  if (typeof price === 'number') {
    return `Starting from ${new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)}`;
  }
  return price;
};

export const Card = ({ image, alt = '', title, price, brow, link, onClick, showArrow = false, fill = false }: CardProps) => {
  const sizeClasses = fill
    ? 'aspect-(--aspect-43) sm:aspect-(--aspect-card) lg:aspect-auto lg:h-full lg:w-full lg:max-w-none'
    : 'aspect-(--aspect-43) sm:aspect-(--aspect-card)';
  const imgSizeClasses = fill ? 'aspect-(--aspect-43) sm:aspect-(--aspect-card) lg:aspect-auto lg:h-full lg:w-full' : 'aspect-(--aspect-43) sm:aspect-(--aspect-card)';
  return (
    <a
      href={link}
      onClick={onClick}
      className={`group relative block overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--white) ${sizeClasses}`}
    >
      {image && <img src={image} alt={alt} className={`col-span-full row-span-full h-full w-full object-cover hover:scale-150 transform-gpu ${imgSizeClasses}`} />}
      <div className='p-7 flex flex-col justify-end gap-[0.5rem] h-full w-full bg-linear-to-t from-(--gray-900) to-65%  inset-0 top-0 left-0 absolute'>
        <p className='inline-block font-sans font-semibold uppercase tracking-[0.125rem] text-[0.75rem] sm:text-[0.875rem] sm:text-sm text-(--gold)'>{brow}</p>
        <h3 className='font-serif font-semibold text-[1.5rem] sm:text-[1.625rem] leading-(--lh-small) text-(--white)'>{title}</h3>
        {price !== undefined && (
          <p className='font-sans font-normal text-[0.875rem] sm:text-[1rem] text-(--gold)'>${formatPrice(price)}</p>
        )}
      </div>
      {showArrow && (
        <span
          aria-hidden="true"
          className='absolute top-[1rem] right-[1rem] flex h-[2.2rem] w-[2.2rem] translate-y-[0.375rem] items-center justify-center border border-(--gold)/40 text-[0.9rem] text-(--gold) opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100'
        >
          →
        </span>
      )}
    </a>
  );
};
