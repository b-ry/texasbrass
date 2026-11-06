import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accordion_heading: 'What is the BMAC Bb Trumpet?',
    accordion_content:
      'The Carol Brass BMAC Bb Trumpet features a hand-lacquered bell and precision-fit valves for a warm, responsive tone.',
    'aria-label': 'Learn more about the Carol Brass BMAC Bb Trumpet',
  },
};

export const Open: Story = {
  args: {
    ...Default.args,
    defaultOpen: true,
  },
};