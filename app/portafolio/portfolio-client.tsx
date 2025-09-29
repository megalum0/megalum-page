'use client'

import { useState, useMemo } from 'react'
import { Section } from '@/components/section'
import { Grid } from '@/components/grid'
import { Button } from '@/components/button'
import { PortfolioCard } from '@/components/portfolio-card'
import { PortfolioFilter } from '@/components/portfolio-filter'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { PageHero } from '@/components/page-hero'
import { AnimatedSection, AnimatedItem } from '@/components/animated-section'
import { COMPANY_INFO, PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  // Filter portfolio items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return PORTFOLIO_ITEMS
    }
    return PORTFOLIO_ITEMS.filter(item => item.category === activeCategory)
  }, [activeCategory])

  // Get featured items for hero section
  const featuredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter(item => item.featured).slice(0, 3)
  }, [])

  // Handle image gallery
  const handleImageClick = (images: string[], currentIndex: number) => {
    setGalleryImages(images)
    setCurrentImageIndex(currentIndex)
    setIsGalleryOpen(true)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleCloseGallery = () => {
    setIsGalleryOpen(false)
    setGalleryImages([])
    setCurrentImageIndex(0)
  }

  // Calculate statistics
  const totalProjects = PORTFOLIO_ITEMS.length
  const totalCategories = PORTFOLIO_CATEGORIES.length
  const yearsOfExperience = new Date().getFullYear() - 2014 // Assuming company started in 2014

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Nuestro Portafolio"
        subtitle={`Más de ${yearsOfExperience} años de experiencia materializados en proyectos exitosos que demuestran nuestra calidad y compromiso con la excelencia`}
        variant="portfolio"
        primaryButtonText="Solicitar cotización"
        primaryButtonHref="/contacto"
        secondaryButtonText="Ver nuestros servicios"
        secondaryButtonHref="/servicios"
      />

      {/* Statistics Section */}
      <Section className="bg-gray-50">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedItem>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand mb-2">{totalProjects}+</div>
                <div className="text-gray-600">Proyectos Completados</div>
              </div>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand mb-2">{totalCategories}</div>
                <div className="text-gray-600">Categorías de Servicio</div>
              </div>
            </AnimatedItem>
            <AnimatedItem delay={0.4}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand mb-2">{yearsOfExperience}+</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedSection>
      </Section>

      {/* Featured Projects */}
      <Section>
        <AnimatedSection>
          <div className="text-center mb-12">
            <AnimatedItem>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Proyectos Destacados
              </h2>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Una selección de nuestros trabajos más representativos que destacan por su calidad y innovación
              </p>
            </AnimatedItem>
          </div>
          
          <Grid cols={3} gap="lg">
            {featuredItems.map((item, index) => (
              <AnimatedItem key={item.id} delay={0.1 * index}>
                <PortfolioCard 
                  item={item} 
                  onImageClick={handleImageClick}
                />
              </AnimatedItem>
            ))}
          </Grid>
        </AnimatedSection>
      </Section>

      {/* Portfolio Filter */}
      <Section className="bg-gray-50">
        <AnimatedSection>
          <div className="text-center mb-8">
            <AnimatedItem>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Todos Nuestros Proyectos
              </h2>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Explora nuestra amplia gama de trabajos organizados por categoría
              </p>
            </AnimatedItem>
          </div>
          
          <AnimatedItem delay={0.4}>
            <PortfolioFilter
              categories={PORTFOLIO_CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </AnimatedItem>
        </AnimatedSection>
      </Section>

      {/* Portfolio Grid */}
      <Section>
        <AnimatedSection>
          <Grid cols={3} gap="lg">
            {filteredItems.map((item, index) => (
              <AnimatedItem key={item.id} delay={0.1 * (index % 6)}>
                <PortfolioCard 
                  item={item} 
                  onImageClick={handleImageClick}
                />
              </AnimatedItem>
            ))}
          </Grid>
          
          {filteredItems.length === 0 && (
            <AnimatedItem>
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No se encontraron proyectos en esta categoría.
                </p>
              </div>
            </AnimatedItem>
          )}
        </AnimatedSection>
      </Section>

      {/* CTA Section */}
      <Section className="bg-brand text-white">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedItem>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Te gusta lo que ves?
              </h2>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <p className="text-xl mb-8 opacity-90">
                Contáctanos para discutir tu próximo proyecto y hacerlo realidad con la misma calidad y profesionalismo
              </p>
            </AnimatedItem>
            <AnimatedItem delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-brand hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                  asChild
                >
                  <Link href="/contacto" className="flex items-center gap-3">
                    <span>Solicitar cotización</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-brand px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                  asChild
                >
                  <Link href="tel:+573001234567" className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Llamar ahora</span>
                  </Link>
                </Button>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedSection>
      </Section>

      {/* Image Gallery Modal */}
      <PortfolioGallery
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={isGalleryOpen}
        onClose={handleCloseGallery}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </>
  )
}
