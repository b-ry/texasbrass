export interface ProductMetaItem {
  label: string;
  value: string;
}

export interface ProductMetaProps {
  items: ProductMetaItem[];
}

export const ProductMeta = ({ items }: ProductMetaProps) => {
  return (
    <dl className="grid grid-cols-2 border-t border-l border-(--gray-600)">
      {items.map((item) => (
        <div key={item.label} className="border-r border-b border-(--gray-600) px-[1.25rem] py-[0.9rem]">
          <dt className="mb-[0.25rem] block text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-(--text-muted)">
            {item.label}
          </dt>
          <dd className="text-[1rem] font-semibold text-(--text-primary)">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};
