'use client'

export function ServicesHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradiente de fondo base */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50" />
      
      {/* Círculos flotantes animados */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-red-200/30 rounded-full animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute top-40 right-32 w-32 h-32 bg-orange-200/40 rounded-full animate-bounce" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-yellow-200/35 rounded-full animate-pulse" 
           style={{ animationDuration: '5s', animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-red-300/25 rounded-full animate-bounce" 
           style={{ animationDuration: '7s', animationDelay: '0.5s' }} />
      
      {/* Elementos más pequeños */}
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300/20 rounded-full animate-pulse" 
           style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-yellow-300/30 rounded-full animate-bounce" 
           style={{ animationDuration: '4s', animationDelay: '2.5s' }} />
      
      {/* Puntos pequeños */}
      <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-red-400/40 rounded-full animate-ping" 
           style={{ animationDuration: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-orange-400/50 rounded-full animate-ping" 
           style={{ animationDuration: '3s', animationDelay: '1s' }} />
    </div>
  )
}
