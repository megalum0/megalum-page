import { Metadata } from 'next'
import { Section } from '@/components/section'
import { Grid } from '@/components/grid'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card'
import { Button } from '@/components/button'
import { generatePageSEO } from '@/lib/seo'
import { DIFFERENTIALS } from '@/lib/constants'
import { Shield, Users, CheckCircle, Wrench, Award, Target, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = generatePageSEO(
  'Quiénes Somos',
  'Conoce la historia, misión y valores de Megalum Center, especialistas en vidrios, aluminio y acero inoxidable',
  '/quienes-somos'
)

const iconMap = {
  Shield,
  Users,
  CheckCircle,
  Wrench,
}

const values = [
  {
    title: 'Calidad',
    description: 'Utilizamos únicamente materiales de primera calidad con certificaciones internacionales.',
    icon: Award,
  },
  {
    title: 'Compromiso',
    description: 'Nos comprometemos con la satisfacción total de nuestros clientes.',
    icon: Target,
  },
  {
    title: 'Integridad',
    description: 'Actuamos con transparencia y honestidad en todas nuestras relaciones comerciales.',
    icon: Heart,
  },
]

export default function QuienesSomosPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Quiénes Somos
          </h1>
          <p className="text-xl text-gray-500 mb-8">
            Más de 10 años de experiencia brindando soluciones de calidad en vidrios, 
            aluminio y acero inoxidable en Ibagué y toda la región del Tolima.
          </p>
        </div>
      </Section>

      {/* About Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-gray-500">
              <p>
                Megalum Center S.A.S. nació en 2013 con la visión de convertirse en 
                la empresa líder en soluciones de vidrios, aluminio y acero inoxidable 
                en la región del Tolima.
              </p>
              <p>
                Desde nuestros inicios, nos hemos enfocado en brindar productos de 
                alta calidad y un servicio excepcional, lo que nos ha permitido 
                crecer y consolidarnos como referentes en el sector.
              </p>
              <p>
                Hoy en día, contamos con un equipo de profesionales altamente 
                capacitados y las mejores tecnologías para garantizar la satisfacción 
                de nuestros clientes.
              </p>
            </div>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
              alt="Equipo de Megalum Center"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Proporcionar soluciones integrales en vidrios, aluminio y acero inoxidable 
                de la más alta calidad, superando las expectativas de nuestros clientes 
                a través de un servicio profesional, innovador y confiable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Ser reconocidos como la empresa líder en el sector de vidrios, aluminio 
                y acero inoxidable en la región del Tolima, expandiendo nuestro alcance 
                y manteniendo los más altos estándares de calidad y servicio.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Nuestros Valores
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Los principios que guían nuestro trabajo y definen nuestra cultura empresarial
          </p>
        </div>
        <Grid cols={3} gap="lg">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                    <IconComponent className="h-8 w-8 text-brand" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </Grid>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Nuestras ventajas competitivas que nos distinguen en el mercado
          </p>
        </div>
        <Grid cols={4} gap="lg">
          {DIFFERENTIALS.map((differential, index) => {
            const IconComponent = iconMap[differential.icon as keyof typeof iconMap]
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                    <IconComponent className="h-8 w-8 text-brand" />
                  </div>
                  <CardTitle className="text-xl">{differential.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {differential.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section className="bg-brand text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos hoy mismo y descubre por qué somos la mejor opción para tu proyecto
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contacto">Contactar ahora</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
