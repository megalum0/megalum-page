'use client'

import { useState } from 'react'
import { ServiceCard } from '@/components/service-card'
import { Button } from '@/components/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

// Mapeo de servicios con sus imágenes reales
const serviceImages = {
  'ventaneria': '/ventaneria edificios/edificios1.jpg',
  'puertas': '/puertas/puertas1.jpg',
  'fachadas': '/fachadas/fachadas1.jpg',
  'divisiones': '/divisiones/divisiones1.jpg',
  'escaleras': '/aceros/acero1.jpg',
  'barandas': '/pasamanos/pasamanos.jpg',
}

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3 // Número de servicios visibles a la vez

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= SERVICES.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, SERVICES.length - itemsPerView) : prev - 1
    )
  }

  const visibleServices = SERVICES.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div className="relative">
      {/* Carrusel Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${(SERVICES.length / itemsPerView) * 100}%`
          }}
        >
          {SERVICES.map((service) => (
            <div key={service.id} className="flex-shrink-0 px-3" style={{ width: `${100 / SERVICES.length}%` }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                slug={service.slug}
                image={serviceImages[service.id as keyof typeof serviceImages] || '/aceros/acero1.jpg'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="rounded-full p-2"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        {/* Dots Indicator */}
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(SERVICES.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / itemsPerView) === index 
                  ? 'bg-brand' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          disabled={currentIndex + itemsPerView >= SERVICES.length}
          className="rounded-full p-2"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
