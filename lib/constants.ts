export const COMPANY_INFO = {
  name: 'Megalum Center S.A.S.',
  fullName: 'Vidrios y Aluminios Megalum Center S.A.S.',
  slogan: 'Soluciones en aluminio, vidrio templado y acero inoxidable con calidad y cumplimiento.',
  city: 'Ibagué, Tolima, Colombia',
  phone: '+57 300 123 4567',
  email: 'info@megalumcenter.com',
  whatsapp: '573001234567',
  address: 'Calle 123 #45-67, Ibagué, Tolima',
}

export const SERVICES = [
  {
    id: 'ventaneria',
    title: 'Ventanería',
    description: 'Ventanas de aluminio y vidrio templado para hogares y oficinas.',
    slug: 'ventaneria',
  },
  {
    id: 'puertas',
    title: 'Puertas',
    description: 'Puertas de aluminio, vidrio y acero inoxidable de alta calidad.',
    slug: 'puertas',
  },
  {
    id: 'fachadas',
    title: 'Fachadas',
    description: 'Sistemas de fachadas en vidrio y aluminio para edificios.',
    slug: 'fachadas',
  },
  {
    id: 'divisiones',
    title: 'Divisiones',
    description: 'Divisiones de oficina y espacios con vidrio templado.',
    slug: 'divisiones',
  },
  {
    id: 'escaleras',
    title: 'Escaleras',
    description: 'Escaleras de acero inoxidable y vidrio templado.',
    slug: 'escaleras',
  },
  {
    id: 'barandas',
    title: 'Barandas',
    description: 'Barandas de acero inoxidable para balcones y terrazas.',
    slug: 'barandas',
  },
]

export const DIFFERENTIALS = [
  {
    title: 'Calidad Garantizada',
    description: 'Materiales de primera calidad con certificaciones internacionales.',
    icon: 'Shield',
  },
  {
    title: 'Instalación Profesional',
    description: 'Equipo técnico especializado con más de 10 años de experiencia.',
    icon: 'Users',
  },
  {
    title: 'Cumplimiento Total',
    description: 'Cumplimos con todas las normativas de construcción vigentes.',
    icon: 'CheckCircle',
  },
  {
    title: 'Servicio Post-Venta',
    description: 'Mantenimiento y soporte técnico después de la instalación.',
    icon: 'Wrench',
  },
]

export const TESTIMONIALS = [
  {
    name: 'María González',
    company: 'Constructora Tolima',
    content: 'Excelente calidad en los materiales y muy profesional el equipo de instalación. Recomendados 100%.',
    rating: 5,
  },
  {
    name: 'Carlos Rodríguez',
    company: 'Arquitecto Independiente',
    content: 'Megalum Center siempre cumple con los tiempos y la calidad esperada. Son nuestros proveedores de confianza.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    company: 'Propietaria Residencial',
    content: 'Las ventanas que instalaron en mi casa son perfectas. Muy buena atención al cliente y precios justos.',
    rating: 5,
  },
]

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Portafolio', href: '/portafolio' },
  { name: 'Quiénes Somos', href: '/quienes-somos' },
  { name: 'Contacto', href: '/contacto' },
]

// Re-export portfolio data from portfolio-data.ts
export { 
  PORTFOLIO_CATEGORIES, 
  PORTFOLIO_ITEMS, 
  getPortfolioByCategory, 
  getFeaturedPortfolio, 
  getPortfolioCategory 
} from './portfolio-data'