import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import { PortfolioClient } from './portfolio-client'

export const metadata: Metadata = generatePageSEO(
  'Portafolio',
  'Conoce nuestros proyectos más destacados en vidrios, aluminio y acero inoxidable. Más de 10 años de experiencia materializados en trabajos exitosos.',
  '/portafolio'
)

export default function PortfolioPage() {
  return <PortfolioClient />
}