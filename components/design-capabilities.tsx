'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Palette, 
  Ruler, 
  Lightbulb, 
  Building, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'

interface DesignCapability {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
}

const capabilities: DesignCapability[] = [
  {
    icon: Palette,
    title: 'Diseño Conceptual',
    description: 'Desarrollamos conceptos innovadores que transforman ideas en realidad arquitectónica.',
    features: [
      'Conceptualización inicial',
      'Estudios de viabilidad',
      'Propuestas creativas',
      'Análisis de materiales'
    ]
  },
  {
    icon: Ruler,
    title: 'Diseño Técnico',
    description: 'Planos detallados y especificaciones técnicas precisas para cada proyecto.',
    features: [
      'Planos arquitectónicos',
      'Especificaciones técnicas',
      'Cálculos estructurales',
      'Documentación completa'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Innovación y Tecnología',
    description: 'Incorporamos las últimas tendencias y tecnologías en nuestros diseños.',
    features: [
      'Tecnología BIM',
      'Diseño sostenible',
      'Automatización',
      'Eficiencia energética'
    ]
  },
  {
    icon: Building,
    title: 'Proyectos Integrales',
    description: 'Manejamos proyectos desde la concepción hasta la ejecución final.',
    features: [
      'Diseño arquitectónico',
      'Coordinación multidisciplinaria',
      'Gestión de proyectos',
      'Supervisión de obra'
    ]
  }
]

export function DesignCapabilities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
              Capacidades de Diseño
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos pioneros en el diseño arquitectónico especializado en vidrio, aluminio y acero inoxidable, 
              ofreciendo soluciones innovadoras que transforman espacios.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand/20"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-brand/10 rounded-xl mb-6">
                  <capability.icon className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-brand mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-brand to-brand-dark rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                ¿Listo para transformar tu proyecto?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Consulta nuestros servicios de diseño y descubre cómo podemos hacer realidad tu visión.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-brand hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contacto">
                    <span className="flex items-center gap-2">
                      Solicitar Diseño
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/portafolio">
                    <span className="flex items-center gap-2">
                      Ver Proyectos
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
