import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { COMPANY_INFO } from '@/lib/constants'

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export function Logo({ className, size = 'md', showText = true, ...props }: LogoProps) {
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

  return (
    <div className={cn('flex items-center space-x-3', className)} {...props}>
      {/* Placeholder for logo image - replace with actual logo */}
      <div className={cn('w-auto', sizes[size])}>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-brand text-white font-bold">
          MC
        </div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn('font-bold text-ink', textSizes[size])}>
            {COMPANY_INFO.name}
          </span>
          <span className="text-xs text-gray-500 hidden sm:block">
            Vidrios y Aluminio
          </span>
        </div>
      )}
    </div>
  )
}
