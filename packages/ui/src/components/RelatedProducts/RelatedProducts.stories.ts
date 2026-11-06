import type { Meta, StoryObj } from '@storybook/react-vite';

import { RelatedProducts } from './RelatedProducts';

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const placeholder = (label: string, bg: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="533" viewBox="0 0 400 533">` +
      `<rect width="400" height="533" fill="${bg}"/>` +
      `<text x="200" y="272" font-family="sans-serif" font-size="22" fill="#f2e2b1" text-anchor="middle">${escapeXml(label)}</text>` +
      `</svg>`,
  )}`;

const relatedProducts = [
  {
    image: placeholder('CTR-5000', '#2a2418'),
    alt: '',
    brow: 'Signature Series',
    title: 'CTR-5000 Bb Trumpet',
    price: 'From $699',
    link: '#',
  },
  {
    image: placeholder('BMAC Model', '#1a1c24'),
    alt: '',
    brow: 'Professional · Custom',
    title: 'BMAC Model Custom Trumpet',
    price: 'Contact for Pricing',
    link: '#',
  },
  {
    image: placeholder('CTS-0 Cornet', '#1a1810'),
    alt: '',
    brow: 'Student · Intermediate',
    title: 'CTS-0 Cornet Silver Plate',
    price: 'From $449',
    link: '#',
  },
];

const featuredProducts = [
  {
    image: placeholder('CTR-5000', '#2a2418'),
    alt: '',
    brow: 'Signature Series',
    title: 'Carol Brass CTR-5000 Bb Trumpet',
    price: 'Starting from $699',
    link: '#',
  },
  {
    image: placeholder('BMAC Model', '#1a1c24'),
    alt: '',
    brow: 'Professional',
    title: 'BMAC Model Custom Trumpet',
    price: 'Contact for Pricing',
    link: '#',
  },
  {
    image: placeholder('CTS-0 Cornet', '#221e10'),
    alt: '',
    brow: 'Student · Intermediate',
    title: 'CTS-0 Student Bb Cornet',
    price: 'Starting from $449',
    link: '#',
  },
  {
    image: placeholder('Trumpet Trader', '#1c1820'),
    alt: '',
    brow: 'Pre-owned · Verified',
    title: 'Texas Trumpet Trader Selection',
    price: 'From $250 – $800',
    link: '#',
  },
  {
    image: placeholder('Vintage Collection', '#221e12'),
    alt: '',
    brow: 'Collector Series',
    title: 'Vintage Collection Showcase',
    price: 'Inquire Within',
    link: '#',
  },
];

const meta = {
  title: 'Components/RelatedProducts',
  component: RelatedProducts,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RelatedProducts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'You Might Also Like',
    title: 'More',
    titleAccent: 'Fine Horns',
    viewAllHref: '#',
    viewAllLabel: 'View All Instruments',
    products: relatedProducts,
  },
};

export const Featured: Story = {
  args: {
    label: 'Featured Instruments',
    title: 'Handpicked',
    titleAccent: 'For You',
    viewAllHref: '#',
    viewAllLabel: 'View All Instruments',
    products: featuredProducts,
    featured: true,
  },
};
