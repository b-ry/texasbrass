import type { Meta, StoryObj } from '@storybook/react-vite';

import { ProductMeta } from './ProductMeta';

const meta = {
  title: 'Components/ProductMeta',
  component: ProductMeta,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductMeta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Year', value: '2023' },
      { label: 'Serial No.', value: 'CB23-04817' },
      { label: 'Condition', value: 'New' },
      { label: 'Finish', value: 'Raw Brass' },
    ],
  },
};
