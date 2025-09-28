import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  asChild, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    primary: 'btn-primary text-white',
    secondary: 'bg-gray-200 text-ink hover:bg-gray-500 hover:text-white',
    outline: 'btn-outline text-brand',
  }

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg',
  }

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  if (asChild) {
    return (
      <span className={buttonClasses}>
        {children}
      </span>
    )
  }
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  )
}
