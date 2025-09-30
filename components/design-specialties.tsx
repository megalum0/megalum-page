'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Building2, 
  Home, 
  Factory, 
  ShoppingBag, 
  GraduationCap, 
  Stethoscope,
  Plane,
  Briefcase,
  ArrowRight
} from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'

interface Specialty {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  projects: string[]
  color: string
}

const specialties: Specialty[] = [
  {
    icon: Building2,
    title: 'Edificios Corporativos',
    description: 'Diseños modernos y funcionales para oficinas y centros empresariales.',
    projects: ['Fachadas de vidrio', 'Divisiones de oficina', 'Accesos corporativos'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Home,
    title: 'Proyectos Residenciales',
    description: 'Soluciones personalizadas para hogares modernos y espacios privados.',
    projects: ['Ventanería residencial', 'Puertas de acceso', 'Balcones y terrazas'],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Factory,
    title: 'Instalaciones Industriales',
    description: 'Diseños especializados para entornos industriales y de producción.',
    projects: ['Estructuras metálicas', 'Sistemas de seguridad', 'Cubiertas industriales'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: ShoppingBag,
    title: 'Centros Comerciales',
    description: 'Espacios comerciales atractivos y funcionales para el retail moderno.',
    projects: ['Fachadas comerciales', 'Divisiones de tiendas', 'Pasamanos y barandales'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: GraduationCap,
    title: 'Instituciones Educativas',
    description: 'Ambientes seguros y funcionales para el aprendizaje y desarrollo.',
    projects: ['Divisiones de aulas', 'Sistemas de seguridad', 'Espacios comunes'],
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Stethoscope,
    title: 'Centros de Salud',
    description: 'Diseños especializados para instalaciones médicas y hospitalarias.',
    projects: ['Divisiones sanitarias', 'Sistemas de higiene', 'Accesos controlados'],
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Plane,
    title: 'Infraestructura Aeroportuaria',
    description: 'Soluciones especializadas para terminales y aeropuertos.',
    projects: ['Fachadas estructurales', 'Sistemas de seguridad', 'Divisiones de control'],
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Briefcase,
    title: 'Proyectos Especializados',
    description: 'Diseños únicos para proyectos con requerimientos específicos.',
    projects: ['Soluciones personalizadas', 'Tecnología avanzada', 'Materiales especiales'],
    color: 'from-gray-600 to-gray-700'
  }
]

export function DesignSpecialties() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
              Especialidades de Diseño
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Líderes en el diseño especializado para diversos sectores, adaptando nuestras soluciones 
              a las necesidades específicas de cada industria.
            </p>
          </motion.div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand/20 h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${specialty.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <specialty.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-ink mb-3 group-hover:text-brand transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {specialty.description}
                  </p>

                  {/* Projects */}
                  <div className="space-y-1">
                    {specialty.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full mr-2 flex-shrink-0" />
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand mb-2">10+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand mb-2">500+</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand mb-2">15+</div>
              <div className="text-gray-600">Especialidades</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand mb-2">100%</div>
              <div className="text-gray-600">Satisfacción del Cliente</div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-ink mb-4">
                ¿Tienes un proyecto especializado?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Nuestro equipo de diseño está preparado para enfrentar cualquier desafío y 
                crear soluciones innovadoras para tu sector específico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand hover:bg-brand-dark text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contacto">
                    <span className="flex items-center gap-2">
                      Consultar Proyecto
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-brand text-brand hover:bg-brand hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/portafolio">
                    <span className="flex items-center gap-2">
                      Ver Especialidades
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
