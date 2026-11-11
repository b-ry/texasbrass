import { Button } from '../Button/Button';

export interface HeroProps {
  est_text?: string;
  brow_text?: string;
  brow_location?: string;
  tagline_text_start?: string;
  tagline_text_accent?: string;
  tagline_text_last?: string;
  text?: string;
  instrumentButtonLabel?: string;
  orderButtonLabel?: string;
  /** Called when the button is clicked — e.g. to navigate to the product page. */
  onButtonClick?: () => void;
}

export const Hero = ({
  est_text = 'Est. 2018',
  brow_text = 'Handcrafted',
  brow_location = 'Texas',
  tagline_text_start = 'Play a',
  tagline_text_accent = 'Horn Worth',
  tagline_text_last = 'Hearing',
  text = "Carol Brass of Texas pairs world-class craftsmanship with personalized service - finding the perfect trumpet for every musician\'s voice.",
  instrumentButtonLabel = 'Shop Instruments',
  orderButtonLabel = 'Custom Orders',
  onButtonClick,
}: HeroProps) => {
  return(
    <section className="c-hero relative flex h-lvh min-h-[40rem] flex-col items-center justify-center overflow-hidden px-[1.5rem] text-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_108%,rgba(196,160,72,0.18)_0%,transparent_65%),linear-gradient(170deg,var(--white)_0%,var(--gray-750)_50%,#eee8dc_100%)]"
      >
        {/* Subtle grain texture over the gradient */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Warm gold glow bar at the very bottom of the hero */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(to_right,transparent,var(--gold-mid),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-[43.75rem]">
        {est_text && (
          <p className="text-(--gold-dark) font-semibold px-[0.9rem] tracking-(--ls-xlg) uppercase m-[1.5rem]">{brow_text} 	&bull; {brow_location} 	&bull; {est_text}</p>
        )}
        {tagline_text_start && (
          <h1 className="font-serif text-(--text-primary) text-[120px] font-normal tracking-[-0.02em] leading-[0.92]">
            {tagline_text_start}
            <span className="text-(--gold-dark) italic"> {tagline_text_accent} </span>
            {tagline_text_last}
          </h1>
        )}
        { text && (
          <p className="my-[1.8rem] mb-[2.5rem] mx-[2.5rem] text-[1.25rem] text-(--text-secondary)">{text}</p>
        )}
        { instrumentButtonLabel && (
          <div className="flex gap-[1rem] justify-center">
            <Button
              label={instrumentButtonLabel}
              variant="secondary"
              size="large"
              onClick={onButtonClick}
            />
            <Button
              label={orderButtonLabel}
              variant="tertiary"
              size="large"
              onClick={onButtonClick}
            />
          </div>
        )}
      </div>
    </section>
  );
}