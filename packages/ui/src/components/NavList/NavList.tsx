import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavListProps {
  heading?: string;
  links: NavLink[];
  currentHref?: string;
}

export const NavList = ({ heading, links, currentHref }: NavListProps) => (
  <nav aria-label={heading}>
    {heading && (
      <h3 className="font-sans font-semibold uppercase tracking-[0.125rem] text-[0.75rem] text-(--gold) mb-[1rem]">
        {heading}
      </h3>
    )}
    <ul className="flex flex-col gap-[0.75rem]">
      {links.map((link) => {
        const isCurrent = link.href === currentHref;
        return (
          <li key={link.href}>
            <a
              href={link.href}
              aria-current={isCurrent ? 'page' : undefined}
              className={[
                'font-sans text-[0.875rem] transition-colors duration-200 border-be',
                isCurrent
                  ? 'text-(--gold) border-current'
                  : 'text-(--gray-700) border-transparent hover:text-(--gold) hover:border-current',
              ].join(' ')}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);
