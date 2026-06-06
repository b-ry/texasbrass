import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from '@storybook/addon-actions';
import { Social, type SocialIcon } from './Social';

const meta = {
  title: 'Components/Social',
  component: Social,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: ['facebook', 'instagram', 'contact'] satisfies SocialIcon[],
    },
  },
  args: { onClick: action('onClick') },
} satisfies Meta<typeof Social>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'instagram',
    title: 'Follow us on Instagram',
    link: 'https://instagram.com',
  },
};
