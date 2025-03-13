import React from 'react';
import clsx from 'clsx';

function Button({ children, variant = 'primary', className, ...props }) {
  return (
    <button
      className={clsx(
        'font-bold py-4 px-8 rounded-xl transition-all duration-300',
        {
          'bg-primary text-white hover:bg-secondary shadow-button': variant === 'primary',
          'bg-white text-primary hover:bg-gray-50': variant === 'secondary',
          'border-2 border-primary text-primary hover:bg-primary hover:text-white': variant === 'outline'
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;