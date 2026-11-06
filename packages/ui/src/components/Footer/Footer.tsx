import React from 'react';

import { Social, type SocialIcon } from '../Social/Social';
import { NavList, type NavLink } from '../NavList/NavList';

interface NavMenu {
  heading: string;
  links: NavLink[];
}

interface SocialLink {
  icon: SocialIcon;
  title: string;
  href: string;
}

export interface FooterProps {
  menus?: NavMenu[];
  socialLinks?: SocialLink[];
  legalText?: string;
  marketingText?: string;
  tagline?: string;
  taglineAccent?: string;
  blurb?: string;
}

export const Footer = ({ menus, blurb,  socialLinks, legalText, marketingText, tagline, taglineAccent }: FooterProps) => {
  return (
    <footer className="bg-(--gray-900) text-(--white)">
      <div className="max-w-[80rem] mx-auto px-[2rem] pbs-[4rem] pbe-[1.5625rem]">
        <div className="footerTop pbe-[4rem] grid lg:grid-cols-(--grid-footer) gap-x-[2.5rem]">
          <div className="grid-left">
            {tagline && (
              <h2 className="font-(family-name:--font-serif) font-bold text-(--gold)  text-[2rem] mbe-[1.25rem]">
                {tagline}{' '}
                {taglineAccent && <span className="text-(--white) font-light">{taglineAccent}</span>}
              </h2>
            )}
            <p className="mbe-[2rem] text-(--gold-hover) text-[0.9375rem] leading-[1.85]">{ blurb }</p>
            {socialLinks && (
              <div className="flex gap-[0.75rem]">
                {socialLinks.map((s) => (
                  <Social key={s.href} icon={s.icon} title={s.title} href={s.href} />
                ))}
              </div>
            )}
          </div>
          <div className="grid-center">
            {menus && (
              <div className="grid sm:grid-cols-2 gap-[1.875rem] mbs-[2.5rem] lg:mbs-0">
                {menus.map((menu) => (
                  <NavList key={menu.heading} heading={menu.heading} links={menu.links} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="footerBottom flex flex-col-reverse sm:flex-row sm:justify-between text-lg pbs-[1.25rem] text-(--gold-hover) gap-[0.625rem]">
          <p>{ legalText }</p>
          <p>{ marketingText }</p>
        </div>
      </div>
    </footer>
  );
};