import React, { useId } from 'react';

const FOCUS_RING = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

export interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
}

export const Label = ({ htmlFor, children, required, disabled }: LabelProps) => (
  <label
    htmlFor={htmlFor}
    className={`font-sans text-[0.9rem] font-semibold ${disabled ? 'text-(--text-muted)' : 'text-(--text-primary)'}`}
  >
    {children}
    {required && (
      <span aria-hidden="true" className="ml-[0.25rem] text-(--error-dark)">
        *
      </span>
    )}
  </label>
);

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  id?: string;
  /** Error message. Shown below the field and announced via `role="alert"`; also sets `aria-invalid`. */
  error?: string;
  helperText?: string;
  /** Shows a success/verified checkmark once the field has been validated. Ignored while `error` is set. */
  valid?: boolean;
}

export const Input = ({
  label,
  id,
  error,
  helperText,
  valid,
  required,
  disabled,
  type = 'text',
  className,
  ...props
}: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  return (
    <div className="flex flex-col gap-[0.5rem]">
      {label && (
        <Label htmlFor={inputId} required={required} disabled={disabled}>
          {label}
        </Label>
      )}
      <div className="relative">
        <input
          id={inputId}
          type={type}
          required={required}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={[
            'w-full border bg-(--white) px-[1.25rem] py-[0.875rem] font-sans text-[1rem] text-(--text-primary) transition-colors duration-200',
            'placeholder:text-(--text-muted)',
            FOCUS_RING,
            'disabled:cursor-not-allowed disabled:border-(--gray-600) disabled:bg-(--gray-700) disabled:text-(--text-muted)',
            error
              ? 'border-(--error-dark) focus-visible:outline-(--error-dark)'
              : valid
                ? 'border-(--gold-mid) focus-visible:outline-(--gold-dark)'
                : 'border-(--gray-600) focus-visible:outline-(--gold-dark)',
            valid && !error ? 'pr-[2.75rem]' : '',
          ].join(' ')}
          {...props}
        />
        {valid && !error && (
          <span
            aria-hidden="true"
            className="absolute top-1/2 right-[1rem] -translate-y-1/2 font-semibold text-(--gold-dark)"
          >
            ✓
          </span>
        )}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="text-[0.875rem] font-medium text-(--error-dark)">
          {error}
        </p>
      ) : (
        helperText && (
          <p id={helperId} className="text-[0.875rem] text-(--text-muted)">
            {helperText}
          </p>
        )
      )}
    </div>
  );
};

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label: string;
  id?: string;
  error?: string;
}

export const Checkbox = ({ label, id, error, disabled, className, ...props }: CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const errorId = `${checkboxId}-error`;

  return (
    <div className="flex flex-col gap-[0.5rem]">
      <div className="flex items-center gap-[0.75rem]">
        <input
          type="checkbox"
          id={checkboxId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={[
            'h-[1.125rem] w-[1.125rem] shrink-0 accent-(--gold-dark)',
            FOCUS_RING,
            'focus-visible:outline-(--gold-dark)',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          ].join(' ')}
          {...props}
        />
        <Label htmlFor={checkboxId} disabled={disabled}>
          {label}
        </Label>
      </div>
      {error && (
        <p id={errorId} role="alert" className="text-[0.875rem] font-medium text-(--error-dark)">
          {error}
        </p>
      )}
    </div>
  );
};

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  legend: string;
  name: string;
  options: RadioOption[];
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}

export const RadioGroup = ({ legend, name, options, defaultValue, disabled, required, error }: RadioGroupProps) => {
  const groupId = useId();
  const errorId = `${groupId}-error`;

  return (
    <fieldset
      className="m-0 flex flex-col gap-[0.75rem] border-none p-0"
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? errorId : undefined}
    >
      <legend className="mb-[0.25rem] p-0 font-sans text-[0.9rem] font-semibold text-(--text-primary)">
        {legend}
        {required && (
          <span aria-hidden="true" className="ml-[0.25rem] text-(--error-dark)">
            *
          </span>
        )}
      </legend>
      {options.map((option, i) => {
        const optionId = `${groupId}-${i}`;
        return (
          <div key={option.value} className="flex items-center gap-[0.75rem]">
            <input
              type="radio"
              id={optionId}
              name={name}
              value={option.value}
              defaultChecked={option.value === defaultValue}
              disabled={disabled}
              required={required}
              className={[
                'h-[1.125rem] w-[1.125rem] shrink-0 accent-(--gold-dark)',
                FOCUS_RING,
                'focus-visible:outline-(--gold-dark)',
                disabled ? 'cursor-not-allowed' : 'cursor-pointer',
              ].join(' ')}
            />
            <Label htmlFor={optionId} disabled={disabled}>
              {option.label}
            </Label>
          </div>
        );
      })}
      {error && (
        <p id={errorId} role="alert" className="text-[0.875rem] font-medium text-(--error-dark)">
          {error}
        </p>
      )}
    </fieldset>
  );
};
