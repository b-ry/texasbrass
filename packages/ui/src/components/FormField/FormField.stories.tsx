import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox, Input, RadioGroup } from './FormField';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/FormField',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const fieldWrap = { maxWidth: '28rem' };

export const Text: Story = {
  args: {
    label: 'Full Name',
    name: 'name',
    placeholder: 'Jane Doe',
  },
  decorators: [(Story) => <div style={fieldWrap}><Story /></div>],
};

export const Email: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    name: 'email',
    placeholder: 'jane@example.com',
    helperText: "We'll never share your email.",
  },
  decorators: Text.decorators,
};

export const Required: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    name: 'email',
    required: true,
    placeholder: 'jane@example.com',
  },
  decorators: Text.decorators,
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    name: 'email',
    defaultValue: 'not-an-email',
    error: 'Enter a valid email address.',
  },
  decorators: Text.decorators,
};

export const Valid: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    name: 'email',
    defaultValue: 'jane@example.com',
    valid: true,
  },
  decorators: Text.decorators,
};

export const Disabled: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    name: 'email',
    defaultValue: 'jane@example.com',
    disabled: true,
  },
  decorators: Text.decorators,
};

export const CheckboxDefault: Story = {
  render: () => (
    <div style={fieldWrap}>
      <Checkbox label="Subscribe to our newsletter" name="newsletter" />
    </div>
  ),
};

export const CheckboxRequiredError: Story = {
  render: () => (
    <div style={fieldWrap}>
      <Checkbox label="I agree to the terms and conditions" name="terms" required error="You must accept the terms to continue." />
    </div>
  ),
};

export const CheckboxDisabled: Story = {
  render: () => (
    <div style={fieldWrap}>
      <Checkbox label="Subscribe to our newsletter" name="newsletter" disabled defaultChecked />
    </div>
  ),
};

export const RadioGroupDefault: Story = {
  render: () => (
    <div style={fieldWrap}>
      <RadioGroup
        legend="Preferred Contact Method"
        name="contact-method"
        required
        defaultValue="email"
        options={[
          { label: 'Email', value: 'email' },
          { label: 'Phone', value: 'phone' },
          { label: 'Text Message', value: 'text' },
        ]}
      />
    </div>
  ),
};

export const RadioGroupDisabled: Story = {
  render: () => (
    <div style={fieldWrap}>
      <RadioGroup
        legend="Preferred Contact Method"
        name="contact-method-disabled"
        disabled
        defaultValue="email"
        options={[
          { label: 'Email', value: 'email' },
          { label: 'Phone', value: 'phone' },
        ]}
      />
    </div>
  ),
};

export const FullFormExample: Story = {
  render: () => (
    <form style={{ maxWidth: '28rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }} onSubmit={(e) => e.preventDefault()}>
      <Input label="Full Name" name="name" required placeholder="Jane Doe" />
      <Input label="Email Address" type="email" name="email" required placeholder="jane@example.com" />
      <Checkbox label="Subscribe to our newsletter" name="newsletter" defaultChecked />
      <RadioGroup
        legend="Preferred Contact Method"
        name="contact-method"
        required
        defaultValue="email"
        options={[
          { label: 'Email', value: 'email' },
          { label: 'Phone', value: 'phone' },
          { label: 'Text Message', value: 'text' },
        ]}
      />
      <Button type="submit" label="Submit" variant="primary" size="medium" />
    </form>
  ),
};
