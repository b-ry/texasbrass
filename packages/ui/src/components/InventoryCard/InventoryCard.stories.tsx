import type { Meta, StoryObj } from '@storybook/react-vite';

import { InventoryCard } from './InventoryCard';

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const placeholder = (label: string, bg: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200">` +
      `<rect width="400" height="200" fill="${bg}"/>` +
      `<text x="200" y="106" font-family="sans-serif" font-size="18" fill="#7a5818" text-anchor="middle">${escapeXml(label)}</text>` +
      `</svg>`,
  )}`;

const meta = {
  title: 'Components/InventoryCard',
  component: InventoryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InventoryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: placeholder('CTR-5000H', '#ede9e1'),
    alt: 'CTR-5000H raw brass bell trumpet',
    badge: 'New In',
    name: 'CTR-5000H Raw Brass Bell',
    description:
      'A professional-grade Bb trumpet with a hand-hammered raw brass bell. Warm, centered tone with exceptional projection — ideal for jazz and classical settings.',
    price: '$829',
    priceNote: '+ Free Shipping',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
