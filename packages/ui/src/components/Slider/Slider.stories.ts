import type { Meta, StoryObj } from '@storybook/react-vite';

import { Slider } from './Slider';

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const placeholder = (label: string, bg: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="512" viewBox="0 0 640 512">` +
      `<rect width="640" height="512" fill="${bg}"/>` +
      `<text x="320" y="266" font-family="sans-serif" font-size="28" fill="#7a5818" text-anchor="middle">${escapeXml(label)}</text>` +
      `</svg>`,
  )}`;

const images = [
  { src: placeholder('Full Profile', '#f2ece0'), alt: 'CTR-5000H full side profile' },
  { src: placeholder('Three-Quarter View', '#ede9e1'), alt: 'CTR-5000H three-quarter view' },
  { src: placeholder('Bell Close-Up', '#eee8da'), alt: 'CTR-5000H raw brass bell close-up' },
  { src: placeholder('Valve Cluster', '#ede9e1'), alt: 'CTR-5000H monel piston valve cluster' },
  { src: placeholder('Case & Accessories', '#f7f4ef'), alt: 'CTR-5000H with case and accessories' },
];

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    // 'padded' (not 'centered') since Slider is a full-width component — a
    // centered flex layout would shrink-wrap it to its content instead of
    // letting it fill its container.
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'CTR-5000H Raw Brass Bell product images',
    images,
  },
};
