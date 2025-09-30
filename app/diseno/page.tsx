import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { DesignHeroBackground } from '@/components/design-hero-background'
import { DesignCapabilities } from '@/components/design-capabilities'
import { DesignProcess } from '@/components/design-process'
import { DesignSpecialties } from '@/components/design-specialties'
import { AnimatedSection, AnimatedItem } from '@/components/animated-section'
import { Button } from '@/components/button'
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  ArrowRight,
  Lightbulb,
  Ruler,
  Palette
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generatePageSEO(
  'Diseño Arquitectónico',
  'Líderes en diseño arquitectónico especializado en vidrio, aluminio y acero inoxidable. Transformamos ideas en proyectos excepcionales con innovación y experiencia.',
  '/diseno'
)

export default function DesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <DesignHeroBackground />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink mb-8 leading-tight">
              Diseño
              <span className="block text-brand">Arquitectónico</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-600 mt-4">
                Líderes y Pioneros en Soluciones Innovadoras
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transformamos ideas en realidad arquitectónica con diseños innovadores y técnicamente superiores. 
              Somos pioneros en el diseño especializado de vidrio, aluminio y acero inoxidable.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-brand hover:bg-brand-dark text-white px-10 py-5 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contacto">
                  <span className="flex items-center gap-3">
                    Solicitar Diseño
                    <ArrowRight className="h-6 w-6" />
                  </span>
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand text-brand hover:bg-brand hover:text-white px-10 py-5 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/portafolio">
                  <span className="flex items-center gap-3">
                    Ver Proyectos
                    <ArrowRight className="h-6 w-6" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <Section className="bg-white">
        <AnimatedSection className="text-center mb-16">
          <AnimatedItem>
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
              Liderazgo en Diseño Arquitectónico
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Con más de 10 años de experiencia, hemos consolidado nuestra posición como líderes 
              y pioneros en el diseño arquitectónico especializado en materiales modernos.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedItem delay={0.1}>
            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-brand/10 rounded-xl mb-4 mx-auto">
                <Award className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">Excelencia Reconocida</h3>
              <p className="text-gray-600">
                Premios y reconocimientos por la calidad de nuestros diseños y proyectos.
              </p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.2}>
            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-brand/10 rounded-xl mb-4 mx-auto">
                <Users className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">Equipo Especializado</h3>
              <p className="text-gray-600">
                Profesionales altamente capacitados en diseño arquitectónico y construcción.
              </p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.3}>
            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-brand/10 rounded-xl mb-4 mx-auto">
                <Lightbulb className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">Innovación Constante</h3>
              <p className="text-gray-600">
                Incorporamos las últimas tendencias y tecnologías en nuestros diseños.
              </p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.4}>
            <div className="text-center p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-brand/10 rounded-xl mb-4 mx-auto">
                <Shield className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Materiales de primera calidad y cumplimiento de todas las normativas.
              </p>
            </div>
          </AnimatedItem>
        </div>
      </Section>

      {/* Why Choose Our Design Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <AnimatedItem>
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
                ¿Por qué elegir nuestro diseño?
              </h2>
            </AnimatedItem>
            <AnimatedItem delay={0.1}>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Somos pioneros en el diseño arquitectónico especializado, combinando creatividad, 
                innovación y experiencia técnica para crear soluciones únicas que superan las expectativas.
              </p>
            </AnimatedItem>

            <div className="space-y-6">
              <AnimatedItem delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand/10 rounded-lg flex-shrink-0">
                    <Ruler className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-2">Precisión Técnica</h3>
                    <p className="text-gray-600">
                      Diseños técnicamente precisos con especificaciones detalladas para cada proyecto.
                    </p>
                  </div>
                </div>
              </AnimatedItem>

              <AnimatedItem delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand/10 rounded-lg flex-shrink-0">
                    <Palette className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-2">Creatividad Única</h3>
                    <p className="text-gray-600">
                      Cada diseño es único, adaptado a las necesidades específicas y visión del cliente.
                    </p>
                  </div>
                </div>
              </AnimatedItem>

              <AnimatedItem delay={0.4}>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand/10 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-2">Cumplimiento de Plazos</h3>
                    <p className="text-gray-600">
                      Entregamos diseños en tiempo y forma, respetando los cronogramas del proyecto.
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand/10 to-brand/5 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-brand mb-4">500+</div>
                  <div className="text-xl text-gray-600 mb-6">Proyectos Diseñados</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="font-bold text-ink">15+</div>
                      <div className="text-gray-600">Años de experiencia</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="font-bold text-ink">100%</div>
                      <div className="text-gray-600">Clientes satisfechos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Design Capabilities */}
      <DesignCapabilities />

      {/* Design Process */}
      <DesignProcess />

      {/* Design Specialties */}
      <DesignSpecialties />

      {/* Final CTA Section */}
      <Section className="bg-gradient-to-r from-brand to-brand-dark">
        <AnimatedSection className="text-center text-white">
          <AnimatedItem>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para crear algo extraordinario?
            </h2>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Nuestro equipo de diseño está preparado para transformar tu visión en una realidad arquitectónica 
              excepcional. Contáctanos y descubre las infinitas posibilidades.
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand hover:bg-gray-100 px-10 py-5 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contacto">
                  <span className="flex items-center gap-3">
                    Solicitar Consultoría
                    <ArrowRight className="h-6 w-6" />
                  </span>
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-brand px-10 py-5 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/portafolio">
                  <span className="flex items-center gap-3">
                    Ver Nuestro Trabajo
                    <ArrowRight className="h-6 w-6" />
                  </span>
                </Link>
              </Button>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </Section>
    </>
  )
}
