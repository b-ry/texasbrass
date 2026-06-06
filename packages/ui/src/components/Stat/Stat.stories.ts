import type { Meta, StoryObj } from '@storybook/react-vite';

import { action } from '@storybook/addon-actions';

import { Stat } from './Stat';

const meta = {
  title: 'Components/Stat',
  component: Stat,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: { onClick: action('onClick') },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stat: '100+',
    title: 'Instruments Sold',
  }
};