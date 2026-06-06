import type { Meta, StoryObj } from '@storybook/react-vite';

import { action } from '@storybook/addon-actions';

import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: { onClick: action('onClick') },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://placehold.co/380x520',
    alt: 'Picture',
    brow: 'Signature Series',
    title: 'Carol BrassCTR-5000 Bb Trumpet',
    price: '699',
    link: '/home',
  }
};