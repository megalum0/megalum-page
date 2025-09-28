import { Metadata } from 'next'
import { Section } from '@/components/section'
import { Grid } from '@/components/grid'
import { Button } from '@/components/button'
import { generatePageSEO } from '@/lib/seo'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = generatePageSEO(
  'Portafolio',
  'Conoce algunos de nuestros proyectos más destacados en vidrios, aluminio y acero inoxidable',
  '/portafolio'
)

const projects = [
  {
    id: 1,
    title: 'Edificio Residencial Los Robles',
    category: 'Fachadas',
    description: 'Sistema de fachadas en vidrio templado y aluminio para edificio de 12 pisos.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
  },
  {
    id: 2,
    title: 'Centro Comercial Plaza Mayor',
    category: 'Divisiones',
    description: 'Divisiones de oficina con vidrio templado y sistemas de puertas automáticas.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
  },
  {
    id: 3,
    title: 'Casa Residencial Villa Hermosa',
    category: 'Ventanería',
    description: 'Ventanas de aluminio con vidrio templado para casa unifamiliar.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
  },
  {
    id: 4,
    title: 'Oficinas Corporativas TechCorp',
    category: 'Puertas',
    description: 'Puertas de acero inoxidable con sistemas de seguridad para oficinas.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
  },
  {
    id: 5,
    title: 'Hotel Boutique El Mirador',
    category: 'Barandas',
    description: 'Barandas de acero inoxidable para balcones y terrazas del hotel.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
  },
  {
    id: 6,
    title: 'Escalera Corporativa',
    category: 'Escaleras',
    description: 'Escalera de acero inoxidable con vidrio templado para edificio corporativo.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center&auto=format&q=80',
  },
]

export default function PortafolioPage() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
          Nuestro Portafolio
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          Proyectos exitosos que demuestran nuestra experiencia y calidad en 
          vidrios, aluminio y acero inoxidable en Ibagué y toda la región.
        </p>
      </div>

      <Grid cols={3} gap="lg">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-200 mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <div className="text-sm text-brand font-medium">{project.category}</div>
              <h3 className="text-lg font-semibold text-ink group-hover:text-brand transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </Grid>

      <div className="mt-16 text-center">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-ink mb-4">
            ¿Te gusta lo que ves?
          </h2>
          <p className="text-gray-500 mb-6">
            Contáctanos para discutir tu proyecto y recibir una cotización personalizada.
          </p>
          <Button size="lg" asChild>
            <Link href="/contacto">
              Solicitar cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
