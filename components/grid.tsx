import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4 | 6
  gap?: 'sm' | 'md' | 'lg'
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, children, cols = 3, gap = 'md', ...props }, ref) => {
    const gridCols = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
    }

    const gaps = {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          gridCols[cols],
          gaps[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Grid.displayName = 'Grid'

export { Grid }
