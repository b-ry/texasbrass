import type { Meta, StoryObj } from '@storybook/react-vite';

import { Testimonial } from './Testimonial';

const meta = {
  title: 'Components/Testimonial',
  component: Testimonial,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Testimonial>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'What Players Say',
    title: 'Voices from the',
    titleAccent: 'Stage',
    testimonials: [
      {
        quote:
          "Working with Carol Brass of Texas was unlike anything I'd experienced buying an instrument before. They listened, they knew their stock inside and out, and I walked away with a horn that transformed my playing overnight.",
        authorName: 'James R.',
        authorRole: 'Section Lead Trumpet · Dallas Symphony Youth Orchestra',
      },
      {
        quote:
          "I was skeptical about buying a Carol Brass instrument — I'd only ever played Bachs. Three months later I cannot believe the quality I got for the price. My students are jealous.",
        authorName: 'Maria T.',
        authorRole: 'Band Director · Fort Worth ISD',
      },
      {
        quote:
          'The custom order process was seamless. I specified bell material, lacquer, bore size — and the final horn exceeded every expectation. This is a special operation.',
        authorName: 'Derek A.',
        authorRole: 'Freelance Trumpet · Houston, TX',
      },
    ],
  },
};
