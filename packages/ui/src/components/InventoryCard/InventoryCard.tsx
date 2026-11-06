import { Button } from '../Button/Button';

export interface InventoryCardProps {
  image?: string;
  alt?: string;
  badge?: string;
  name: string;
  description?: string;
  price: string;
  /** Secondary text shown next to the price, e.g. "+ Free Shipping" or "Contact Us". */
  priceNote?: string;
  /** Label for the card's call-to-action button. */
  buttonLabel?: string;
  /** Called when the button is clicked — e.g. to navigate to the product page. */
  onButtonClick?: () => void;
}

export const InventoryCard = ({
  image,
  alt = '',
  badge,
  name,
  description,
  price,
  priceNote,
  buttonLabel = 'View Details',
  onButtonClick,
}: InventoryCardProps) => {
  return (
    <article className="relative flex h-full flex-col overflow-hidden border border-(--gray-600) bg-(--white) px-[2.5rem] py-[3rem] before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-[3px] before:origin-center before:scale-x-0 before:bg-linear-to-r before:from-transparent before:via-(--gold-mid) before:to-transparent before:transition-transform before:duration-500 before:content-[''] hover:before:scale-x-100 focus-within:before:scale-x-100">
      {image && (
        <div className="relative -mx-[2.5rem] -mt-[3rem] mb-[2rem] h-[200px] overflow-hidden bg-(--gray-700)">
          <img src={image} alt={alt} className="h-full w-full object-cover" />
        </div>
      )}
      {badge && (
        <p className="mb-[1.5rem] inline self-start border border-(--gold-dark) px-[0.9rem] py-[0.4rem] text-[0.8rem] font-semibold tracking-[.18em] text-(--gold-dark) uppercase">
          {badge}
        </p>
      )}
      <h3 className="mb-[0.9rem] font-serif text-[2.1rem] leading-[1.1] font-normal text-(--gray-900)">{name}</h3>
      {description && <p className="mb-[1.5rem] text-[1rem] leading-[1.85] text-(--text-muted)">{description}</p>}
      <p className="font-serif text-[1.9rem] text-(--gold-dark)">
        {price}
        {priceNote && <span className="ml-[0.4rem] font-sans text-[0.8rem] text-(--text-muted)">{priceNote}</span>}
      </p>
      <div className="mt-auto pt-[1.5rem]">
        <Button label={buttonLabel} variant="primary" size="small" onClick={onButtonClick} />
      </div>
    </article>
  );
};
