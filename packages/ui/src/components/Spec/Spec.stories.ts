import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spec } from './Spec';

const meta = {
  title: 'Components/Spec',
  component: Spec,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spec>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Bore Size',
    value: '.459" Medium-Large',
  },
};
