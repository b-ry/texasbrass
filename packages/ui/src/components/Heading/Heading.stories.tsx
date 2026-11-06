import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllLevels: Story = {
  args: { children: '' },
  render: () => (
    <div className="flex flex-col gap-[2rem]">
      <Heading level={1}>H1 — Display Heading</Heading>
      <Heading level={2}>H2 — Section Heading</Heading>
      <Heading level={3}>H3 — Sub-section Heading</Heading>
      <Heading level={4}>H4 — Card Heading</Heading>
      <Heading level={5}>H5 — Small Heading</Heading>
      <Heading level={6}>H6 — Label Heading</Heading>
    </div>
  ),
};

export const H1: Story = { args: { level: 1, children: 'Display Heading' } };
export const H2: Story = { args: { level: 2, children: 'Section Heading' } };
export const H3: Story = { args: { level: 3, children: 'Sub-section Heading' } };
export const H4: Story = { args: { level: 4, children: 'Card Heading' } };
export const H5: Story = { args: { level: 5, children: 'Small Heading' } };
export const H6: Story = { args: { level: 6, children: 'Label Heading' } };
