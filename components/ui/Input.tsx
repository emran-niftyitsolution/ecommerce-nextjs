'use client';

import { cn } from '@/lib/utils/cn';
import { HTMLMotionProps, motion } from 'framer-motion';
import * as React from 'react';

export interface InputProps extends Omit<HTMLMotionProps<'input'>, 'children'> {
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      leftIcon,
      rightIcon,
      label,
      helperText,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          <motion.input
            type={type}
            className={cn(
              'flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error &&
                'border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500',
              className
            )}
            ref={ref}
            whileFocus={{ scale: 1.01 }}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        {helperText && (
          <p
            className={cn(
              'mt-1 text-xs',
              error ? 'text-red-500' : 'text-gray-500'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
