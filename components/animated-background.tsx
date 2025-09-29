'use client'

import { useCallback, useEffect, useState } from 'react'
import { loadSlim } from '@tsparticles/slim'
import Particles from '@tsparticles/react'
import type { Container, Engine } from '@tsparticles/engine'

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'services' | 'contact' | 'portfolio'
  className?: string
}

export function AnimatedBackground({ variant = 'hero', className = '' }: AnimatedBackgroundProps) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    if (!init) {
      loadSlim().then((engine) => {
        setInit(true)
      })
    }
  }, [init])

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Particles loaded callback
  }, [])

  const getParticleConfig = () => {
    const baseConfig = {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ['#8E1B2B', '#6F1522', '#BFC6CE', '#7A7A7A'],
        },
        links: {
          color: '#8E1B2B',
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }

    switch (variant) {
      case 'hero':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              ...baseConfig.particles.number,
              value: 100,
            },
            move: {
              ...baseConfig.particles.move,
              speed: 1.5,
            },
            links: {
              ...baseConfig.particles.links,
              opacity: 0.3,
            },
          },
        }
      case 'services':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: {
              value: ['#8E1B2B', '#6F1522', '#BFC6CE'],
            },
            number: {
              ...baseConfig.particles.number,
              value: 60,
            },
            move: {
              ...baseConfig.particles.move,
              speed: 0.8,
            },
          },
        }
      case 'contact':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: {
              value: ['#8E1B2B', '#BFC6CE', '#7A7A7A'],
            },
            number: {
              ...baseConfig.particles.number,
              value: 50,
            },
            move: {
              ...baseConfig.particles.move,
              speed: 0.5,
            },
            links: {
              ...baseConfig.particles.links,
              opacity: 0.1,
            },
          },
        }
      case 'portfolio':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            color: {
              value: ['#8E1B2B', '#6F1522', '#BFC6CE', '#7A7A7A'],
            },
            number: {
              ...baseConfig.particles.number,
              value: 70,
            },
            move: {
              ...baseConfig.particles.move,
              speed: 1.2,
            },
            links: {
              ...baseConfig.particles.links,
              opacity: 0.25,
            },
          },
        }
      default:
        return baseConfig
    }
  }

  if (!init) {
    return null
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={getParticleConfig()}
        className="w-full h-full"
      />
      
      {/* Gradient overlays for different variants */}
      <div className={`absolute inset-0 ${
        variant === 'hero' 
          ? 'bg-gradient-to-br from-white/90 via-white/80 to-white/90' 
          : variant === 'services'
          ? 'bg-gradient-to-br from-brand/5 via-brand/10 to-brand/5'
          : variant === 'contact'
          ? 'bg-gradient-to-br from-gray-50/90 via-white/80 to-gray-50/90'
          : 'bg-gradient-to-br from-white/85 via-white/75 to-white/85'
      }`} />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand/5 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-aluminum/10 rounded-full blur-lg animate-float-medium" />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-brand/8 rounded-full blur-md animate-float-fast" />
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-aluminum/15 rounded-full blur-sm animate-float-slow" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgba(142,27,43,0.3)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>
    </div>
  )
}

