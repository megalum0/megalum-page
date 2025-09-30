'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Search, 
  Lightbulb, 
  PenTool, 
  Hammer, 
  CheckCircle,
  ArrowRight
} from 'lucide-react'

interface ProcessStep {
  number: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  details: string[]
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: Search,
    title: 'Análisis y Consultoría',
    description: 'Comprendemos profundamente tus necesidades y el contexto del proyecto.',
    details: [
      'Reunión inicial de requerimientos',
      'Análisis del sitio y condiciones',
      'Estudio de normativas aplicables',
      'Propuesta de concepto inicial'
    ]
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Conceptualización',
    description: 'Desarrollamos ideas innovadoras que materializan tu visión.',
    details: [
      'Desarrollo de conceptos creativos',
      'Estudios de alternativas',
      'Presentación de propuestas',
      'Refinamiento del concepto seleccionado'
    ]
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Diseño Técnico',
    description: 'Elaboramos la documentación técnica detallada para la ejecución.',
    details: [
      'Planos arquitectónicos detallados',
      'Especificaciones técnicas',
      'Cálculos estructurales',
      'Planos de instalaciones'
    ]
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Ejecución y Supervisión',
    description: 'Llevamos a cabo la construcción con supervisión especializada.',
    details: [
      'Coordinación de equipos de trabajo',
      'Supervisión de calidad',
      'Control de tiempos y costos',
      'Entrega final y documentación'
    ]
  }
]

export function DesignProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <section className="py-20 bg-white">
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
              Nuestro Proceso de Diseño
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un enfoque metodológico que garantiza resultados excepcionales en cada etapa del proyecto, 
              desde la concepción hasta la entrega final.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand via-brand/60 to-brand transform -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand/20 group"
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand to-brand-dark rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-brand/10 rounded-xl mb-6 mx-auto">
                    <step.icon className="h-6 w-6 text-brand" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-ink mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-brand mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-gray-50 rounded-full px-8 py-4">
              <span className="text-gray-600 font-medium">¿Interesado en conocer más sobre nuestro proceso?</span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-brand text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-dark transition-colors"
                >
                  Contactar
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
