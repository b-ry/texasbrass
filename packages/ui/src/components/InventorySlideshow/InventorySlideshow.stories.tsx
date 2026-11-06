import type { Meta, StoryObj } from '@storybook/react-vite';

import { InventorySlideshow } from './InventorySlideshow';

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const placeholder = (label: string, bg: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200">` +
      `<rect width="400" height="200" fill="${bg}"/>` +
      `<text x="200" y="106" font-family="sans-serif" font-size="18" fill="#7a5818" text-anchor="middle">${escapeXml(label)}</text>` +
      `</svg>`,
  )}`;

const items = [
  {
    image: placeholder('CTR-5000H', '#ede9e1'),
    alt: 'CTR-5000H raw brass bell trumpet',
    badge: 'New In',
    name: 'CTR-5000H Raw Brass Bell',
    description:
      'A professional-grade Bb trumpet with a hand-hammered raw brass bell. Warm, centered tone with exceptional projection — ideal for jazz and classical settings.',
    price: '$829',
    priceNote: '+ Free Shipping',
  },
  {
    image: placeholder('BMAC Gold Lacquer', '#f7f4ef'),
    alt: 'BMAC gold lacquer edition trumpet',
    badge: 'Limited Run',
    name: 'BMAC Gold Lacquer Edition',
    description:
      'The beloved BMAC model now in a stunning vintage gold lacquer. Only 10 units available. Each horn is individually tested and setup by our in-house tech.',
    price: 'Custom Quote',
    priceNote: 'Contact Us',
  },
  {
    image: placeholder('Bach Stradivarius', '#eae6de'),
    alt: 'Bach Stradivarius 72 bell trumpet',
    badge: 'Pre-owned · Mint',
    name: 'Bach Stradivarius 72 Bell Trumpet',
    description:
      'A pristine Bach Strad with the coveted 72 bell. Fully serviced with new valve corks and slides. A once-in-a-while find at a fraction of new price.',
    price: '$1,450',
    priceNote: 'As-Tested',
  },
  {
    image: placeholder('CTS-0 Silver Cornet', '#f7f4ef'),
    alt: 'CTS-0 silver plated cornet',
    badge: 'New In',
    name: 'CTS-0 Silver Plated Cornet',
    description:
      'Our most popular student cornet in a stunning silver plate finish. Perfect for beginners who want a horn that looks as good as it sounds.',
    price: '$549',
    priceNote: 'Silver Plate',
  },
  {
    image: placeholder('Flugelhorn CTF-2000', '#ede9e1'),
    alt: 'Flugelhorn CTF-2000',
    badge: 'Hot Item',
    name: 'Flugelhorn CTF-2000',
    description:
      'A silky-smooth flugelhorn with a large bore and warm, dark tone. Ships with case, mouthpiece, and valve oil — ready to play on day one.',
    price: '$699',
    priceNote: 'Complete Package',
  },
];

const meta = {
  title: 'Components/InventorySlideshow',
  component: InventorySlideshow,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InventorySlideshow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'New arrivals',
    items,
  },
};

export const MultipleOnOnePage: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <InventorySlideshow {...args} label="New arrivals" />
      <InventorySlideshow {...args} items={[...items].reverse()} label="Recently sold" />
    </div>
  ),
  args: {
    label: 'New arrivals',
    items,
  },
};
