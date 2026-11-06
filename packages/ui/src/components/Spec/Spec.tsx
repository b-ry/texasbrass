export interface SpecProps {
  label: string;
  value: string;
}

/**
 * A single label/value row, meant to be looped and rendered as
 * accordion content (e.g. inside `Accordion`'s `accordion_content`).
 * Renders `dt`/`dd`, so a list of `Spec`s should be wrapped in a `<dl>`
 * by the consumer for valid, fully accessible description-list markup.
 */
export const Spec = ({ label, value }: SpecProps) => {
  return (
    <div className="flex items-baseline justify-between border-b border-(--gray-700) py-[0.6rem] last:mb-[1rem] last:border-b-0">
      <dt className="text-[0.9rem] font-medium text-(--text-muted)">{label}</dt>
      <dd className="max-w-[55%] text-right text-[0.9rem] font-semibold text-(--text-primary)">{value}</dd>
    </div>
  );
};
