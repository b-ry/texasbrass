import React from 'react';
import { Button, ButtonProps } from '../Button/Button';

export interface TextBlockProps {
  variant?: 'dark_background' | 'light_background';
  label?: string;
  title?: string;
  body?: string;
  button?: string;
  buttonVariant?: ButtonProps['variant'];
  buttonSize?: ButtonProps['size'];
  onClick?: () => void;
}

const defaultButtonVariant: Record<NonNullable<TextBlockProps['variant']>, ButtonProps['variant']> = {
  dark_background: 'ghost',
  light_background: 'primary',
};

const variantClasses = {
  dark_background: {
    article: 'bg-(--gray-900) p-[4.8rem]',
    label: 'font-sans font-semibold uppercase tracking-[.3rem] text-[1.3rem] text-(--gold)',
    title: 'font-serif font-normal text-[3.8rem] md:text-[4.6rem] lg:text-[5.7rem] leading-(--lh-small) text-(--white)',
    body: 'font-sans font-normal text-[1.6rem] leading-(--lh-normal) md:leading-(--lh-large) text-(--gray-700)',
  },
  light_background: {
    article: 'bg-(--gray-750) p-[2.4rem]',
    label: 'font-sans font-semibold uppercase tracking-[.3rem] text-[1.3rem] text-(--gold-dark)',
    title: 'font-serif font-normal text-[3.8rem] md:text-[4.6rem] lg:text-[5.7rem] leading-(--lh-small) text-(--gray-900)',
    body: 'font-serif font-normal text-[1.8rem] md:text-[2rem] lg:text-[2.3rem] leading-(--lh-normal) md:leading-(--lh-large) text-(--gray-900)',
  },
};

export const TextBlock = ({ variant = 'light_background', label, title, body, button, buttonVariant, buttonSize, onClick
}: TextBlockProps) => {
  const classes = variantClasses[variant];
  return (
    <article
      className={['flex flex-col gap-[2rem]', classes.article].join(' ')}
    >
      {label && <p className={classes.label}>{label}</p>}
      {title && <h2 className={classes.title}>{title}</h2>}
      <span className='inline-flex w-[6.4rem] h-[.1rem] bg-(--gold-mid)' aria-hidden="true"></span>
      {body && <p className={classes.body}>{body}</p>}
      {button && <Button label={button} variant={buttonVariant ?? defaultButtonVariant[variant]} size={buttonSize} onClick={onClick} />}
    </article>
  );
};
