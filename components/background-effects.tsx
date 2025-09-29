'use client'

interface BackgroundEffectsProps {
  variant?: 'hero' | 'services' | 'contact' | 'portfolio'
}

export function BackgroundEffects({ variant = 'hero' }: BackgroundEffectsProps) {
  return (
    <>
      {/* Floating circles with different sizes and positions */}
      <div 
        className="absolute w-32 h-32 bg-red-900/5 rounded-full blur-xl animate-bounce"
        style={{
          top: '10%',
          left: '10%',
          animationDuration: '6s',
          animationDelay: '0s'
        }}
      />
      <div 
        className="absolute w-24 h-24 bg-gray-400/10 rounded-full blur-lg animate-bounce"
        style={{
          top: '20%',
          right: '15%',
          animationDuration: '8s',
          animationDelay: '2s'
        }}
      />
      <div 
        className="absolute w-20 h-20 bg-red-900/8 rounded-full blur-md animate-bounce"
        style={{
          bottom: '30%',
          left: '25%',
          animationDuration: '10s',
          animationDelay: '4s'
        }}
      />
      <div 
        className="absolute w-16 h-16 bg-gray-400/15 rounded-full blur-sm animate-bounce"
        style={{
          bottom: '15%',
          right: '30%',
          animationDuration: '7s',
          animationDelay: '1s'
        }}
      />
      
      {/* Additional floating elements */}
      <div 
        className="absolute w-12 h-12 bg-red-900/6 rounded-full blur-md animate-bounce"
        style={{
          top: '40%',
          left: '60%',
          animationDuration: '9s',
          animationDelay: '3s'
        }}
      />
      <div 
        className="absolute w-8 h-8 bg-gray-400/12 rounded-full blur-sm animate-bounce"
        style={{
          top: '60%',
          right: '40%',
          animationDuration: '5s',
          animationDelay: '2.5s'
        }}
      />
      
      {/* Small dots */}
      <div 
        className="absolute w-2 h-2 bg-red-900/20 rounded-full animate-pulse"
        style={{
          top: '50%',
          left: '25%',
          animationDuration: '3s'
        }}
      />
      <div 
        className="absolute w-1 h-1 bg-gray-400/30 rounded-full animate-pulse"
        style={{
          top: '35%',
          right: '35%',
          animationDuration: '4s',
          animationDelay: '1s'
        }}
      />
      <div 
        className="absolute w-1.5 h-1.5 bg-red-900/15 rounded-full animate-pulse"
        style={{
          bottom: '50%',
          right: '25%',
          animationDuration: '2.5s',
          animationDelay: '2s'
        }}
      />
      
      {/* Gradient overlays based on variant */}
      {variant === 'services' && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-red-900/10 to-red-900/5" />
      )}
      {variant === 'contact' && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/80 to-gray-50/90" />
      )}
      {variant === 'portfolio' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-white/85" />
      )}
    </>
  )
}
