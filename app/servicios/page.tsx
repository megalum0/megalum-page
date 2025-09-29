import { Metadata } from 'next'
import { Section } from '@/components/section'
import { Grid } from '@/components/grid'
import { Button } from '@/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card'
import { AnimatedSection, AnimatedItem } from '@/components/animated-section'
import { ServicesHeroBackground } from '@/components/services-hero-background'
import { generatePageSEO } from '@/lib/seo'
import { COMPANY_INFO } from '@/lib/constants'
import { ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = generatePageSEO(
  'Servicios',
  'Conoce todos nuestros servicios especializados en vidrios, aluminio y acero inoxidable. Más de 10 años de experiencia en Ibagué y Tolima.',
  '/servicios'
)

const servicesData = [
  {
    id: 'ventaneria',
    title: 'Ventanería',
    description: 'Ventanas de aluminio y vidrio templado para hogares y oficinas con sistemas de apertura modernos y eficientes.',
    slug: 'ventaneria',
    image: '/ventaneria edificios/edificios1.jpg',
    features: ['Vidrio templado de seguridad', 'Aluminio anodizado', 'Sistemas de apertura modernos', 'Aislamiento térmico'],
    icon: 'Window'
  },
  {
    id: 'puertas',
    title: 'Puertas',
    description: 'Puertas de aluminio, vidrio y acero inoxidable de alta calidad para acceso controlado y diseño moderno.',
    slug: 'puertas',
    image: '/puertas/puertas1.jpg',
    features: ['Acero inoxidable 316', 'Vidrio templado', 'Sistemas automáticos', 'Seguridad reforzada'],
    icon: 'DoorOpen'
  },
  {
    id: 'fachadas',
    title: 'Fachadas',
    description: 'Sistemas de fachadas en vidrio y aluminio para edificios con diseño arquitectónico moderno.',
    slug: 'fachadas',
    image: '/fachadas/fachadas1.jpg',
    features: ['Vidrio estructural', 'Aluminio anodizado', 'Sistemas de drenaje', 'Diseño arquitectónico'],
    icon: 'Building'
  },
  {
    id: 'divisiones',
    title: 'Divisiones',
    description: 'Divisiones de oficina y espacios con vidrio templado para separación funcional y estética.',
    slug: 'divisiones',
    image: '/divisiones/divisiones1.jpg',
    features: ['Vidrio templado', 'Sistemas modulares', 'Fácil instalación', 'Diseño moderno'],
    icon: 'Square'
  },
  {
    id: 'aceros',
    title: 'Aceros Inoxidables',
    description: 'Trabajos especializados en acero inoxidable para aplicaciones comerciales e industriales.',
    slug: 'aceros',
    image: '/aceros/acero1.jpg',
    features: ['Acero inoxidable 316', 'Soldadura especializada', 'Acabados pulidos', 'Resistencia a la corrosión'],
    icon: 'Shield'
  },
  {
    id: 'espejos',
    title: 'Espejos y Cristales',
    description: 'Instalación de espejos decorativos y funcionales para diversos espacios comerciales y residenciales.',
    slug: 'espejos',
    image: '/espejos/espejos1.jpg',
    features: ['Espejos de seguridad', 'Instalación profesional', 'Diseño personalizado', 'Múltiples acabados'],
    icon: 'Circle'
  },
  {
    id: 'cubiertas',
    title: 'Cubiertas y Techos',
    description: 'Sistemas de cubiertas metálicas y estructuras para protección y estética arquitectónica.',
    slug: 'cubiertas',
    image: '/cubiertas/cubierta1.jpg',
    features: ['Lámina galvanizada', 'Aislante térmico', 'Sistemas de drenaje', 'Estructura metálica'],
    icon: 'Home'
  },
  {
    id: 'accesorios',
    title: 'Accesorios y Herrajes',
    description: 'Herrajes especializados y accesorios para sistemas de vidrio y aluminio de alta calidad.',
    slug: 'accesorios',
    image: '/accesorios/accesorios1.jpg',
    features: ['Herrajes de acero inoxidable', 'Sistemas de fijación', 'Accesorios decorativos', 'Instalación profesional'],
    icon: 'Wrench'
  },
  {
    id: 'pasamanos',
    title: 'Pasamanos y Barandales',
    description: 'Sistemas de seguridad y diseño en acero inoxidable y vidrio para escaleras y balcones.',
    slug: 'pasamanos',
    image: '/pasamanos/pasamanos.jpg',
    features: ['Acero inoxidable 316', 'Vidrio templado', 'Diseño de seguridad', 'Instalación certificada'],
    icon: 'Circle'
  }
]

const benefits = [
  {
    title: 'Más de 10 años de experiencia',
    description: 'Equipo especializado con amplia trayectoria en el sector',
    icon: Award
  },
  {
    title: 'Materiales de primera calidad',
    description: 'Utilizamos solo materiales certificados y de marcas reconocidas',
    icon: Star
  },
  {
    title: 'Instalación profesional',
    description: 'Técnicos certificados con experiencia en proyectos complejos',
    icon: Users
  },
  {
    title: 'Garantía total',
    description: 'Respaldamos nuestro trabajo con garantías completas',
    icon: CheckCircle
  }
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative">
        {/* Fondo Animado */}
        <ServicesHeroBackground />
        
        {/* Contenido */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Soluciones integrales en vidrios, aluminio y acero inoxidable para proyectos residenciales y comerciales en {COMPANY_INFO.city}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-brand hover:bg-brand-dark text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
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
                className="border-2 border-brand text-brand hover:bg-brand hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                asChild
              >
                <Link href="/portafolio" className="flex items-center gap-3">
                  <span>Ver nuestro trabajo</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <Section>
        <AnimatedSection>
          <div className="text-center mb-12">
            <AnimatedItem>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                ¿Por qué elegirnos?
              </h2>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Nuestro compromiso con la calidad y la excelencia nos ha posicionado como líderes en el sector
              </p>
            </AnimatedItem>
          </div>
          
          <Grid cols={4} gap="lg">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <AnimatedItem key={index} delay={0.1 * index}>
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                        <IconComponent className="h-8 w-8 text-brand" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedItem>
              )
            })}
          </Grid>
        </AnimatedSection>
      </Section>

      {/* Services Grid */}
      <Section className="bg-gray-50">
        <AnimatedSection>
          <div className="text-center mb-12">
            <AnimatedItem>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Nuestros Servicios Especializados
              </h2>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Cada servicio está diseñado para satisfacer las necesidades específicas de nuestros clientes
              </p>
            </AnimatedItem>
          </div>

          <Grid cols={3} gap="lg">
            {servicesData.map((service, index) => (
              <AnimatedItem key={service.id} delay={0.1 * index}>
                <Link href={`/servicios/${service.slug}`} className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-brand transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <span
                              key={idx}
                              className="bg-brand/10 text-brand text-xs px-2 py-1 rounded-full font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 2 && (
                            <span className="text-gray-400 text-xs px-2 py-1">
                              +{service.features.length - 2} más
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-brand font-medium group-hover:translate-x-1 transition-transform">
                          Ver detalles
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedItem>
            ))}
          </Grid>
        </AnimatedSection>
      </Section>

      {/* CTA Section */}
      <Section className="bg-brand text-white">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedItem>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para tu próximo proyecto?
              </h2>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <p className="text-xl mb-8 opacity-90">
                Contáctanos hoy mismo y recibe una cotización personalizada para tu proyecto. 
                Nuestro equipo de expertos está listo para ayudarte.
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
    </>
  )
}