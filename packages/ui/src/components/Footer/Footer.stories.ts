import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menus: [
      {
        heading: 'Shop',
        links: [
          { label: 'Carol Brass for Sale', href: '/shop' },
          { label: 'BMAC Model', href: '/shop/BMAC' },
          { label: 'Custom Orders', href: '/shop' },
          { label: 'Used Trumpets', href: '/shop/trumpets' },
          { label: 'Trumpet Collection', href: '/shop' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'About Us', href: '/about-us' },
          { label: 'Our Process', href: '/process' },
          { label: 'Testimonials', href: '/testimonials' },
          { label: 'Blog', href: '/blog' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'instagram', title: 'Instagram', href: 'https://instagram.com' },
      { icon: 'contact', title: 'Email',
        href: 'mailto:someone@someplace.com' },
      { icon: 'facebook', title: 'Facebook', href: 'https://facebook.com' },
    ],
    legalText: '© 2025 Carol Brass Texas. All rights reserved.',
    marketingText: 'Handcrafted Horns · Personal Service · Texas Proud',
    tagline: 'Carol Brass',
    taglineAccent: 'of Texas',
    blurb: 'Connecting musicians with great instruments through personal service, honest advice, and deep product knowledge, right here in Texas.',
  },
};
