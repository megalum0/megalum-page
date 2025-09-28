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
    <section className="hero-bg min-h-screen flex items-center justify-center relative">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-brand/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-aluminum/20 rounded-full blur-lg"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-brand/15 rounded-full blur-md"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
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
