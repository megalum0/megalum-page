import { Section } from '@/components/section'
import { Grid } from '@/components/grid'
import { Button } from '@/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card'
import { Testimonial } from '@/components/testimonial'
import { Hero } from '@/components/hero'
import { ServicesCarousel } from '@/components/services-carousel'
import { AnimatedSection, AnimatedItem } from '@/components/animated-section'
import { COMPANY_INFO, DIFFERENTIALS, TESTIMONIALS } from '@/lib/constants'
import { Shield, Users, CheckCircle, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const iconMap = {
  Shield,
  Users,
  CheckCircle,
  Wrench,
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Differentials Section */}
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
                Más de 10 años de experiencia brindando soluciones de calidad en {COMPANY_INFO.city}
              </p>
            </AnimatedItem>
          </div>
          <Grid cols={4} gap="lg">
            {DIFFERENTIALS.map((differential, index) => {
              const IconComponent = iconMap[differential.icon as keyof typeof iconMap]
              return (
                <AnimatedItem key={index} delay={0.1 * index}>
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
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
                </AnimatedItem>
              )
            })}
          </Grid>
        </AnimatedSection>
      </Section>

      {/* Services Section */}
      <Section className="bg-gray-50">
        <AnimatedSection>
          <div className="text-center mb-12">
            <AnimatedItem>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Nuestros Servicios
              </h2>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Especialistas en vidrios, aluminio y acero inoxidable para proyectos residenciales y comerciales
              </p>
            </AnimatedItem>
          </div>
          <AnimatedItem delay={0.4}>
            <ServicesCarousel />
          </AnimatedItem>
          <AnimatedItem delay={0.6}>
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-brand hover:bg-brand-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                asChild
              >
                <Link href="/servicios" className="flex items-center gap-3">
                  <span>Ver todos los servicios</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </Section>


      {/* Testimonials Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>
        <Grid cols={3} gap="lg">
          {TESTIMONIALS.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section className="bg-brand text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos hoy mismo y recibe una cotización personalizada para tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contacto">Solicitar cotización</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand" asChild>
              <Link href="tel:+573001234567">Llamar ahora</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
