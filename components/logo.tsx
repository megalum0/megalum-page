import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { COMPANY_INFO } from '@/lib/constants'

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  variant?: 'default' | 'white'
}

export function Logo({ className, size = 'md', showText = true, variant = 'default', ...props }: LogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }

  const textColors = {
    default: 'text-ink',
    white: 'text-white',
  }

  return (
    <div className={cn('flex items-center space-x-3', className)} {...props}>
      {/* Logo image */}
      <div className={cn('relative', sizes[size])}>
        <img
          src="/logo.svg"
          alt={`${COMPANY_INFO.name} Logo`}
          className="h-full w-auto object-contain"
          style={{ 
            filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none',
            maxWidth: 'none' 
          }}
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn('font-bold', textColors[variant], textSizes[size])}>
            {COMPANY_INFO.name}
          </span>
          <span className={cn(
            'text-xs hidden sm:block',
            variant === 'white' ? 'text-gray-300' : 'text-gray-500'
          )}>
            Vidrios y Aluminio
          </span>
        </div>
      )}
    </div>
  )
}
