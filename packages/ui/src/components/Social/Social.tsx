import React from 'react';

export type SocialIcon = 'facebook' | 'instagram' | 'contact';

const icons: Record<SocialIcon, React.ReactNode> = {
  facebook: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: (
   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"></circle>
            </svg>
  ),
  contact: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="M2 7l10 7 10-7"></path>
            </svg>
  ),
};

export interface SocialProps  {
  icon: SocialIcon;
  title: string;
  link: string;
  onClick?: () => void;
}

export const Social = ({ icon, title, link, onClick }: SocialProps) => (
  <a href={link} aria-label={title} onClick={onClick}
    className="w-[4.4rem] h-[4.4rem] flex items-center justify-center text-(--gold-social) border border-(--muted-black) hover:text-(--gold) transition-colors duration-200 hover:border-(--gold)"
  >
    <span className="w-[2rem] h-[2rem] flex items-center justify-center">{icons[icon]}</span>
  </a>
);
