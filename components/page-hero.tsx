'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from './button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface PageHeroProps {
  title: string
  subtitle: string
  variant?: 'hero' | 'services' | 'contact' | 'portfolio'
  showButtons?: boolean
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
}

export function PageHero({
  title,
  subtitle,
  variant = 'hero',
  showButtons = true,
  primaryButtonText = 'Solicitar cotización',
  primaryButtonHref = '/contacto',
  secondaryButtonText = 'Ver más',
  secondaryButtonHref = '/servicios',
  className = ''
}: PageHeroProps) {
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

  const getBackgroundClass = () => {
    switch (variant) {
      case 'services':
        return 'bg-gradient-to-br from-brand/5 via-brand/10 to-brand/5'
      case 'contact':
        return 'bg-gradient-to-br from-gray-50/90 via-white/80 to-gray-50/90'
      case 'portfolio':
        return 'bg-gradient-to-br from-white/85 via-white/75 to-white/85'
      default:
        return 'bg-gradient-to-br from-white/90 via-white/80 to-white/90'
    }
  }

  return (
    <section className={`min-h-[70vh] flex items-center justify-center relative ${getBackgroundClass()} ${className}`}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          {showButtons && (
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-brand hover:bg-brand-dark text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href={primaryButtonHref}>
                  <span className="flex items-center gap-2">
                    {primaryButtonText}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand text-brand hover:bg-brand hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href={secondaryButtonHref}>
                  <span className="flex items-center gap-2">
                    {secondaryButtonText}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

