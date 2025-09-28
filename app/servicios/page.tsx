import { Metadata } from 'next'
import { Section } from '@/components/section'
import { Grid } from '@/components/grid'
import { ServiceCard } from '@/components/service-card'
import { generatePageSEO } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = generatePageSEO(
  'Servicios',
  'Conoce todos nuestros servicios especializados en vidrios, aluminio y acero inoxidable',
  '/servicios'
)

export default function ServiciosPage() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
          Nuestros Servicios
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          Ofrecemos soluciones integrales en vidrios, aluminio y acero inoxidable 
          para proyectos residenciales y comerciales en Ibagué y toda la región del Tolima.
        </p>
      </div>

      <Grid cols={2} gap="lg">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            slug={service.slug}
            image={`https://images.unsplash.com/photo-${1558618666 + Math.random() * 10}?w=600&h=400&fit=crop&crop=center&auto=format&q=80`}
          />
        ))}
      </Grid>

      <div className="mt-16 text-center">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-ink mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-500 mb-6">
            Contáctanos y te ayudaremos a encontrar la solución perfecta para tu proyecto.
          </p>
          <a 
            href="/contacto"
            className="inline-flex items-center justify-center rounded-lg bg-brand text-white px-6 py-3 font-medium hover:bg-brand-dark transition-colors"
          >
            Contactar ahora
          </a>
        </div>
      </div>
    </Section>
  )
}
