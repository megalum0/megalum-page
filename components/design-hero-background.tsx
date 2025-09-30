'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function DesignHeroBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/10" />
      
      {/* Animated Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-brand/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-brand/10 rounded-full"
        animate={{
          y: [-20, 20, -20],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-brand/30 rotate-45"
        animate={{
          rotate: [45, 405],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-br from-brand/20 to-transparent rounded-lg"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/3 left-1/5 w-2 h-2 bg-brand/40 rounded-full"
        animate={{
          y: [-30, 30, -30],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/4 w-3 h-3 bg-brand/30 rounded-full"
        animate={{
          y: [20, -20, 20],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-brand/50 rounded-full"
        animate={{
          y: [-25, 25, -25],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Design Elements */}
      <motion.div
        className="absolute top-16 right-16 w-8 h-8 border-l-2 border-t-2 border-brand/30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-16 w-6 h-6 border-r-2 border-b-2 border-brand/25"
        animate={{
          rotate: [0, 90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
