import type { Meta, StoryObj } from '@storybook/react-vite';

import { ShippingNote } from './ShippingNote';

const meta = {
  title: 'Components/ShippingNote',
  component: ShippingNote,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShippingNote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Free insured shipping across the continental US via FedEx Ground. International shipping available — contact us for a quote. All instruments are professionally set up and play-tested before they leave.',
  },
};
