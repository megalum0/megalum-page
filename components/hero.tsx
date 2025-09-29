'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from './button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_INFO } from '@/lib/constants'

export function Hero() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Fondo Animado */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente de fondo base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        
        {/* Círculos flotantes animados */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/30 rounded-full animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-32 w-32 h-32 bg-indigo-200/40 rounded-full animate-bounce" 
             style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-purple-200/35 rounded-full animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-300/25 rounded-full animate-bounce" 
             style={{ animationDuration: '7s', animationDelay: '0.5s' }} />
        
        {/* Elementos más pequeños */}
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-300/20 rounded-full animate-pulse" 
             style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-300/30 rounded-full animate-bounce" 
             style={{ animationDuration: '4s', animationDelay: '2.5s' }} />
        
        {/* Puntos pequeños */}
        <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-blue-400/40 rounded-full animate-ping" 
             style={{ animationDuration: '2s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-indigo-400/50 rounded-full animate-ping" 
             style={{ animationDuration: '3s', animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-ink mb-8"
          >
            <Sparkles className="h-4 w-4 text-brand" />
            Especialistas en {COMPANY_INFO.city}
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={titleVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink mb-8 leading-tight"
          >
            Soluciones en{' '}
            <span className="gradient-text">Aluminio</span>,{' '}
            <span className="gradient-text">Vidrio</span> y{' '}
            <span className="text-ink">Acero</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {COMPANY_INFO.slogan}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              className="btn-primary text-lg px-8 py-4 h-auto font-semibold group"
              asChild
            >
              <Link href="/contacto">
                <span className="flex items-center gap-2">
                  Cotizar ahora
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="btn-outline text-lg px-8 py-4 h-auto font-semibold group"
              asChild
            >
              <Link href="/portafolio">
                <span className="flex items-center gap-2">
                  Ver portafolio
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-brand mb-2">10+</div>
              <div className="text-gray-500">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand mb-2">500+</div>
              <div className="text-gray-500">Proyectos completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand mb-2">100%</div>
              <div className="text-gray-500">Clientes satisfechos</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-brand/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-brand rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
