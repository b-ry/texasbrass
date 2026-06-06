import type { Meta, StoryObj } from '@storybook/react-vite';

import { action } from '@storybook/addon-actions';

import { TextBlock } from './TextBlock';

const meta = {
  title: 'Components/TextBlock',
  component: TextBlock,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: { onClick: action('onClick') },
} satisfies Meta<typeof TextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkBg: Story = {
  args: {
    variant: 'dark_background',
    label: 'Tailored to you',
    title: 'Custom Orders & BMAC Moduel',
    body: 'Can\'t find exactly what you\'re looking for? We\'ll build it. Specify bell material, bore size, valve type, lacquer finish, and more — resulting in a truly personal instrument. The BMAC model is our flagship custom offering, built to spec for discerning players.',
    button: 'Start Your Custom Order',
    buttonSize: 'large',
  }
};

export const LightBg: Story = {
  args: {
    variant: 'light_background',
  },
};