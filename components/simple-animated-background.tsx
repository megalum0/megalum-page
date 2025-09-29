'use client'

interface SimpleAnimatedBackgroundProps {
  variant?: 'hero' | 'services' | 'contact' | 'portfolio'
  className?: string
}

export function SimpleAnimatedBackground({ variant = 'hero', className = '' }: SimpleAnimatedBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
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
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-brand/6 rounded-full blur-md animate-float-medium" />
        <div className="absolute top-2/3 right-1/4 w-8 h-8 bg-aluminum/12 rounded-full blur-sm animate-float-fast" />
        <div className="absolute bottom-1/3 left-1/2 w-14 h-14 bg-brand/4 rounded-full blur-lg animate-float-slow" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgba(142,27,43,0.3)_1px,transparent_0)] bg-[length:20px_20px]" />
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/10 to-transparent animate-shimmer" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-aluminum/10 to-transparent animate-shimmer" style={{ animationDelay: '2s' }} />
        
        {/* Floating dots */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-brand/20 rounded-full animate-pulse-gentle" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-aluminum/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/2 right-1/4 w-1.5 h-1.5 bg-brand/15 rounded-full animate-pulse-gentle" style={{ animationDelay: '2s' }} />
        
        {/* Additional floating elements with different animations */}
        <div className="absolute top-1/4 right-1/5 w-3 h-3 bg-brand/8 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-aluminum/12 rounded-full animate-float-medium" />
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-brand/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '3s' }} />
      </div>
    </div>
  )
}
