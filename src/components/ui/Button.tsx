import React from "react"
import { cn } from "../../lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'solid'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-satoshi hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
          {
            'bg-brand-text text-brand-light hover:bg-black': variant === 'primary',
            'border border-brand-text text-brand-text hover:bg-brand-gray/20': variant === 'outline',
            'hover:bg-brand-gray/20 text-brand-text': variant === 'ghost',
            'bg-[#7a7a7a] text-white hover:bg-gray-600': variant === 'solid', // like the submit button
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-8 text-base': size === 'md',
            'h-14 px-10 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
