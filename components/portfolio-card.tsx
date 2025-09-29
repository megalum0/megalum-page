'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/card'
import { Button } from '@/components/button'
import { Eye, Calendar, MapPin, Wrench } from 'lucide-react'
import { PortfolioItem } from '@/lib/portfolio-data'

interface PortfolioCardProps {
  item: PortfolioItem
  onImageClick?: (images: string[], currentIndex: number) => void
}

export function PortfolioCard({ item, onImageClick }: PortfolioCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (item.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % item.images.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (item.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length)
    }
  }

  const handleCardClick = () => {
    if (onImageClick) {
      onImageClick(item.images, currentImageIndex)
    }
  }

  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.images[currentImageIndex]}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Navigation arrows for multiple images */}
        {item.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image counter */}
        {item.images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {currentImageIndex + 1} / {item.images.length}
          </div>
        )}

        {/* Featured badge */}
        {item.featured && (
          <div className="absolute top-3 left-3 bg-brand text-white text-xs px-2 py-1 rounded-full font-semibold">
            Destacado
          </div>
        )}

        {/* View icon */}
        <div className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Eye className="w-4 h-4" />
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-ink group-hover:text-brand transition-colors duration-300">
            {item.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Project details */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            {item.year && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{item.year}</span>
              </div>
            )}
            {item.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{item.location}</span>
              </div>
            )}
          </div>

          {/* Materials */}
          {item.materials && item.materials.length > 0 && (
            <div className="flex items-start gap-1">
              <Wrench className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-wrap gap-1">
                {item.materials.slice(0, 2).map((material, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                  >
                    {material}
                  </span>
                ))}
                {item.materials.length > 2 && (
                  <span className="text-gray-400 text-xs px-2 py-1">
                    +{item.materials.length - 2} más
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
