import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-transparent text-(--gold-dark) border-(--gold-dark) font-semibold hover:bg-(--gold-dark) hover:text-(--white) hover:border-(--gold-dark)',
  secondary: 'bg-(--gray-900) text-(--white) border-none font-semibold hover:bg-(--gray-800) hover:shadow-[0_12px_40px_rgba(28,26,23,0.18)] hover:-translate-y-1',
  tertiary: 'bg-transparent text-(--gray-900) font-medium border-(--gray-600) hover:text-(--gold-dark) hover:border-(--gold-dark)',
  ghost: 'bg-(--gold) text-(--gray-900) font-medium hover:-translate-y-1 hover:bg-(--gold-hover)',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'px-[2.4rem] py-[1.2rem] text-[1.3rem] tracking-(--ls-sm)',
  medium: 'px-[3.2rem] py-[1.6rem] text-[1.3rem] tracking-(--ls-sm)',
  large: 'px-[4.2rem] py-[1.8rem] text-[1.3rem] lg:text-[1.6rem] tracking-(--ls-lg)',
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
        'inline-block w-fit cursor-pointer font-sans leading-(--lh-normal) transition-all duration-250 uppercase border border-2 px-6 py-3',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900',
        variantClasses[variant],
        sizeClasses[size],
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
