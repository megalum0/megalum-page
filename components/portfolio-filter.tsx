'use client'

import { Button } from '@/components/button'
import { PortfolioCategory } from '@/lib/portfolio-data'

interface PortfolioFilterProps {
  categories: PortfolioCategory[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export function PortfolioFilter({ categories, activeCategory, onCategoryChange }: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <Button
        variant={activeCategory === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onCategoryChange('all')}
        className="rounded-full px-6 py-2 font-medium transition-all duration-300"
      >
        Todos los proyectos
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className="rounded-full px-4 py-2 font-medium transition-all duration-300 flex items-center gap-2"
        >
          <span>{category.name}</span>
          <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
            {category.count}
          </span>
        </Button>
      ))}
    </div>
  )
}
