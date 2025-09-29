'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/button'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface PortfolioGalleryProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function PortfolioGallery({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev 
}: PortfolioGalleryProps) {
  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close button */}
      <Button
        variant="outline"
        size="sm"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
      >
        <X className="w-4 h-4" />
      </Button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="sm"
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </>
      )}

      {/* Main image */}
      <div className="relative max-w-7xl max-h-[90vh] mx-4">
        <Image
          src={currentImage}
          alt={`Imagen ${currentIndex + 1}`}
          width={1200}
          height={800}
          className="object-contain max-h-[90vh] rounded-lg"
          priority
        />
      </div>

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} de {images.length}
        </div>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-4xl overflow-x-auto px-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                // This would need to be handled by parent component
                // For now, we'll just show the current image
              }}
              className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                index === currentIndex 
                  ? 'border-white' 
                  : 'border-white/30 hover:border-white/60'
              }`}
            >
              <Image
                src={image}
                alt={`Miniatura ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
