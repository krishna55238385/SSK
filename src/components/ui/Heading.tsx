import React from "react"
import { cn } from "../../lib/utils"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  align?: 'left' | 'center' | 'right'
}

export const Heading: React.FC<HeadingProps> = ({ 
  level = 2, 
  align = 'center', 
  className, 
  children,
  ...props 
}) => {
  const Tag = `h${level}` as React.ElementType

  return (
    <Tag 
      className={cn(
        "font-serif text-brand-text",
        {
          'text-4xl md:text-5xl lg:text-6xl': level === 1,
          'text-3xl md:text-4xl': level === 2,
          'text-2xl md:text-3xl': level === 3,
          'text-xl md:text-2xl': level === 4,
          'text-center': align === 'center',
          'text-left': align === 'left',
          'text-right': align === 'right',
        },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
