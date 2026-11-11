import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  label: string;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-transparent text-(--gold-dark) border-(--gold-dark) font-semibold hover:bg-(--gold-dark) hover:text-(--white) hover:border-(--gold-dark)',
  secondary: 'bg-(--gray-900) text-(--white) border-none font-semibold hover:bg-(--gray-800) hover:shadow-[0_12px_40px_rgba(28,26,23,0.18)] hover:-translate-y-1',
  tertiary: 'bg-transparent text-(--gray-900) font-medium border-(--gray-600) hover:text-(--gold-dark) hover:border-(--gold-dark) hover:shadow-[0_12px_40px_rgba(28,26,23,0.18)] hover:-translate-y-1',
  ghost: 'bg-(--gold) text-(--gray-900) font-medium hover:-translate-y-1 hover:bg-(--gold-hover) border-none hover:shadow-[0_12px_40px_rgba(28,26,23,0.18)] hover:-translate-y-1',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'px-[1.5rem] py-[0.75rem] text-[0.8125rem] tracking-(--ls-sm)',
  medium: 'px-[2rem] py-[1rem] text-[0.8125rem] tracking-(--ls-sm)',
  large: 'px-[2.625rem] py-[1.125rem] text-[0.8125rem] lg:text-[1rem] tracking-(--ls-lg)',
};

export const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        'inline-block w-fit cursor-pointer font-bold font-sans leading-(--lh-normal) transition-all duration-250 uppercase border-2 px-6 py-3 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none',
        variantClasses[variant],
        sizeClasses[size],
      ].join(' ')}
      {...props}
    >
        {label}
    </button>
  );
};
