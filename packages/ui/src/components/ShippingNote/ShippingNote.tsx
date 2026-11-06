import type { ReactNode } from 'react';

export interface ShippingNoteProps {
  children: ReactNode;
}

export const ShippingNote = ({ children }: ShippingNoteProps) => {
  return (
    <div
      role="note"
      className="flex items-start gap-[1rem] border-l-[3px] border-(--gold-mid) bg-(--gray-750) px-[1.25rem] py-[1rem]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        className="mt-[0.15rem] shrink-0 text-(--gold-dark)"
      >
        <rect x="1" y="3" width="15" height="13" rx="1.5" />
        <path d="M16 8h4l3 5v4h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
      <p className="text-[0.9rem] leading-[1.7] font-medium text-(--text-secondary)">{children}</p>
    </div>
  );
};
