import type { Meta, StoryObj } from '@storybook/react-vite';

import { Navigation } from './Navigation';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoText: 'Carol Brass',
    logoAccent: 'of Texas',
    links: [
      { label: 'Instruments', href: '#instruments' },
      { label: 'New Arrivals', href: '#new-arrivals' },
      { label: 'Custom Orders', href: '#custom' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    ctaLabel: 'Get in Touch',
    ctaHref: 'mailto:hello@carolbrassoftexas.com',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '150vh' }}>
        <Story />
        <p style={{ padding: '8rem 2rem 2rem', maxWidth: '40rem' }}>
          Scroll this page to see the nav pick up its scrolled background, border, and shadow.
        </p>
      </div>
    ),
  ],
};
