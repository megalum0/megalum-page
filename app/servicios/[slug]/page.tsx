import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section } from '@/components/section'
import { Button } from '@/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card'
import { generatePageSEO } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'
import { ArrowLeft, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug)
  
  if (!service) {
    return {}
  }

  return generatePageSEO(
    service.title,
    service.description,
    `/servicios/${params.slug}`
  )
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const features = [
    'Materiales de primera calidad',
    'Instalación profesional',
    'Garantía extendida',
    'Mantenimiento incluido',
    'Cumplimiento de normativas',
    'Servicio post-venta'
  ]

  return (
    <>
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/servicios" 
            className="inline-flex items-center text-brand hover:text-brand-dark mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a servicios
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-500 mb-8">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contacto">Solicitar cotización</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portafolio">Ver proyectos</Link>
                </Button>
              </div>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src={`https://images.unsplash.com/photo-${1558618666 + Math.random() * 10}?w=600&h=400&fit=crop&crop=center&auto=format&q=80`}
                alt={service.title}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 text-brand mr-2" />
                  Características del servicio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-brand mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Información adicional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Tiempo de entrega</h4>
                    <p className="text-gray-500">15-30 días hábiles</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Garantía</h4>
                    <p className="text-gray-500">2 años en materiales y mano de obra</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Instalación</h4>
                    <p className="text-gray-500">Incluida en el precio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
