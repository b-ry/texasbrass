import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    est_text: 'Est. 2018',
    brow_text: 'Handcrafted',
    brow_locations: 'Texas',
    tagline_text_start: 'Play a',
    tagline_text_accent: 'Horn Worth',
    tagline_text_last: 'Hearing',
    text: 'Carol Brass of Texas pairs world-class craftsmanship with personalized service — finding the perfect trumpet for every musician\'s voice.',
    
  }

};