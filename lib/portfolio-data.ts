export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  images: string[]
  featured: boolean
  year?: string
  location?: string
  materials?: string[]
}

export interface PortfolioCategory {
  id: string
  name: string
  description: string
  icon: string
  count: number
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: 'aceros',
    name: 'Aceros Inoxidables',
    description: 'Trabajos especializados en acero inoxidable para aplicaciones comerciales e industriales',
    icon: 'Shield',
    count: 10
  },
  {
    id: 'divisiones',
    name: 'Divisiones de Vidrio',
    description: 'Divisiones modernas en vidrio templado y aluminio para oficinas y espacios comerciales',
    icon: 'Square',
    count: 9
  },
  {
    id: 'cubiertas',
    name: 'Cubiertas y Techos',
    description: 'Sistemas de cubiertas metálicas y estructuras para protección y estética',
    icon: 'Home',
    count: 7
  },
  {
    id: 'puertas',
    name: 'Puertas Especializadas',
    description: 'Puertas de vidrio, aluminio y acero para acceso controlado y diseño moderno',
    icon: 'DoorOpen',
    count: 6
  },
  {
    id: 'espejos',
    name: 'Espejos y Cristales',
    description: 'Instalación de espejos decorativos y funcionales para diversos espacios',
    icon: 'Circle',
    count: 6
  },
  {
    id: 'fachadas',
    name: 'Fachadas Comerciales',
    description: 'Sistemas de fachada en vidrio y aluminio para edificios corporativos',
    icon: 'Building',
    count: 4
  },
  {
    id: 'ventaneria-edificios',
    name: 'Ventanería Edificios',
    description: 'Sistemas de ventanas para edificios comerciales y residenciales',
    icon: 'Window',
    count: 4
  },
  {
    id: 'accesorios',
    name: 'Accesorios y Herrajes',
    description: 'Herrajes especializados y accesorios para sistemas de vidrio y aluminio',
    icon: 'Wrench',
    count: 4
  },
  {
    id: 'pasamanos',
    name: 'Pasamanos y Barandales',
    description: 'Sistemas de seguridad y diseño en acero inoxidable y vidrio',
    icon: 'Circle',
    count: 3
  },
  {
    id: 'ventaneria',
    name: 'Ventanería Residencial',
    description: 'Ventanas y sistemas de apertura para hogares y espacios residenciales',
    icon: 'Home',
    count: 2
  },
  {
    id: 'balcones',
    name: 'Balcones y Terrazas',
    description: 'Sistemas de protección y diseño para balcones y áreas exteriores',
    icon: 'Sun',
    count: 1
  },
  {
    id: 'portones',
    name: 'Portones Automáticos',
    description: 'Sistemas de acceso automatizado para vehículos y peatones',
    icon: 'Car',
    count: 1
  },
  {
    id: 'ceramica-aluminio',
    name: 'Cerámica y Aluminio',
    description: 'Trabajos especializados combinando cerámica y sistemas de aluminio',
    icon: 'Layers',
    count: 1
  },
  {
    id: 'estructuras-livianas',
    name: 'Estructuras Livianas',
    description: 'Estructuras metálicas livianas para diversos tipos de construcción',
    icon: 'Grid3X3',
    count: 1
  }
]

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Aceros Inoxidables
  {
    id: 'acero-1',
    title: 'Sistema de Acero Inoxidable Comercial',
    description: 'Instalación completa de sistemas en acero inoxidable para centro comercial',
    category: 'aceros',
    images: ['/aceros/acero1.jpg', '/aceros/acero2.jpg'],
    featured: true,
    year: '2024',
    materials: ['Acero Inoxidable 316', 'Vidrio Templado']
  },
  {
    id: 'acero-2',
    title: 'Barandales de Seguridad Industrial',
    description: 'Sistemas de protección en acero inoxidable para planta industrial',
    category: 'aceros',
    images: ['/aceros/acero3.jpg', '/aceros/acero4.jpg'],
    featured: false,
    year: '2024',
    materials: ['Acero Inoxidable 304']
  },
  {
    id: 'acero-3',
    title: 'Estructuras de Acero Arquitectónico',
    description: 'Elementos estructurales y decorativos en acero inoxidable',
    category: 'aceros',
    images: ['/aceros/acero5.jpg', '/aceros/acero6.jpg'],
    featured: true,
    year: '2023',
    materials: ['Acero Inoxidable 316', 'Acero Inoxidable 304']
  },
  {
    id: 'acero-4',
    title: 'Sistemas de Acero para Restaurantes',
    description: 'Instalaciones especializadas para cocinas y áreas de servicio',
    category: 'aceros',
    images: ['/aceros/acero7.jpg', '/aceros/acero8.jpg'],
    featured: false,
    year: '2023',
    materials: ['Acero Inoxidable 316']
  },
  {
    id: 'acero-5',
    title: 'Acero Inoxidable Residencial',
    description: 'Aplicaciones de acero inoxidable en proyectos residenciales de lujo',
    category: 'aceros',
    images: ['/aceros/acero9.jpg', '/aceros/acero10.jpg'],
    featured: false,
    year: '2023',
    materials: ['Acero Inoxidable 304']
  },

  // Divisiones de Vidrio
  {
    id: 'division-1',
    title: 'Divisiones de Oficina Moderna',
    description: 'Sistema de divisiones en vidrio templado para oficinas corporativas',
    category: 'divisiones',
    images: ['/divisiones/divisiones1.jpg', '/divisiones/divisiones2.jpg'],
    featured: true,
    year: '2024',
    materials: ['Vidrio Templado', 'Aluminio Anodizado']
  },
  {
    id: 'division-2',
    title: 'Divisiones Comerciales',
    description: 'Separación de espacios comerciales con sistemas de vidrio',
    category: 'divisiones',
    images: ['/divisiones/divisiones3.jpg', '/divisiones/divisiones4.jpg'],
    featured: false,
    year: '2024',
    materials: ['Vidrio Laminado', 'Aluminio']
  },
  {
    id: 'division-3',
    title: 'Divisiones Residenciales',
    description: 'Separación de ambientes en hogares con vidrio decorativo',
    category: 'divisiones',
    images: ['/divisiones/divisiones5.jpg', '/divisiones/divisiones6.jpg'],
    featured: false,
    year: '2023',
    materials: ['Vidrio Templado', 'Vidrio Decorativo']
  },
  {
    id: 'division-4',
    title: 'Divisiones de Seguridad',
    description: 'Sistemas de división con vidrio de seguridad para bancos',
    category: 'divisiones',
    images: ['/divisiones/divisiones7.jpg', '/divisiones/divisiones8.jpg'],
    featured: true,
    year: '2023',
    materials: ['Vidrio Blindado', 'Aluminio Reforzado']
  },
  {
    id: 'division-5',
    title: 'Divisiones Decorativas',
    description: 'Elementos decorativos en vidrio para espacios comerciales',
    category: 'divisiones',
    images: ['/divisiones/divisiones9.jpg'],
    featured: false,
    year: '2023',
    materials: ['Vidrio Serigrafiado', 'Aluminio']
  },

  // Cubiertas y Techos
  {
    id: 'cubierta-1',
    title: 'Cubierta Metálica Industrial',
    description: 'Sistema de cubierta metálica para nave industrial',
    category: 'cubiertas',
    images: ['/cubiertas/cubierta1.jpg', '/cubiertas/cubierta2.jpg'],
    featured: true,
    year: '2024',
    materials: ['Lámina Galvanizada', 'Estructura Metálica']
  },
  {
    id: 'cubierta-2',
    title: 'Cubierta Residencial',
    description: 'Cubierta metálica para vivienda unifamiliar',
    category: 'cubiertas',
    images: ['/cubiertas/cubierta3.jpg', '/cubiertas/cubierta4.jpg'],
    featured: false,
    year: '2024',
    materials: ['Lámina de Aluminio', 'Aislante Térmico']
  },
  {
    id: 'cubierta-3',
    title: 'Cubierta Comercial',
    description: 'Sistema de cubierta para centro comercial',
    category: 'cubiertas',
    images: ['/cubiertas/cubierta5.jpg', '/cubiertas/cubierta6.jpg'],
    featured: false,
    year: '2023',
    materials: ['Lámina de Acero', 'Sistema de Drenaje']
  },
  {
    id: 'cubierta-4',
    title: 'Cubierta de Policarbonato',
    description: 'Cubierta translúcida en policarbonato para iluminación natural',
    category: 'cubiertas',
    images: ['/cubiertas/cubierta7.jpg'],
    featured: false,
    year: '2023',
    materials: ['Policarbonato', 'Aluminio']
  },

  // Puertas Especializadas
  {
    id: 'puerta-1',
    title: 'Puertas de Vidrio Corporativas',
    description: 'Sistema de puertas automáticas en vidrio para edificio corporativo',
    category: 'puertas',
    images: ['/puertas/puertas1.jpg', '/puertas/puertas2.jpg'],
    featured: true,
    year: '2024',
    materials: ['Vidrio Templado', 'Sistema Automático']
  },
  {
    id: 'puerta-2',
    title: 'Puertas de Seguridad',
    description: 'Puertas de acceso controlado con sistemas de seguridad',
    category: 'puertas',
    images: ['/puertas/puertas3.jpg', '/puertas/puertas4.jpg'],
    featured: false,
    year: '2024',
    materials: ['Acero Inoxidable', 'Vidrio Blindado']
  },
  {
    id: 'puerta-3',
    title: 'Puertas Residenciales',
    description: 'Puertas de vidrio y aluminio para hogares modernos',
    category: 'puertas',
    images: ['/puertas/puertas5.jpg', '/puertas/puertas6.jpg'],
    featured: false,
    year: '2023',
    materials: ['Vidrio Templado', 'Aluminio Anodizado']
  },

  // Espejos y Cristales
  {
    id: 'espejo-1',
    title: 'Espejos Decorativos Comerciales',
    description: 'Instalación de espejos decorativos para centro comercial',
    category: 'espejos',
    images: ['/espejos/espejos1.jpg', '/espejos/espejos2.jpg'],
    featured: true,
    year: '2024',
    materials: ['Espejo de Seguridad', 'Aluminio']
  },
  {
    id: 'espejo-2',
    title: 'Espejos de Baño Residenciales',
    description: 'Espejos con iluminación LED para baños residenciales',
    category: 'espejos',
    images: ['/espejos/espejos3.jpg', '/espejos/espejos4.jpg'],
    featured: false,
    year: '2024',
    materials: ['Espejo de Seguridad', 'LED']
  },
  {
    id: 'espejo-3',
    title: 'Espejos de Gimnasio',
    description: 'Instalación de espejos de seguridad para gimnasio',
    category: 'espejos',
    images: ['/espejos/espejos5.jpg', '/espejos/espejos6.jpg'],
    featured: false,
    year: '2023',
    materials: ['Espejo de Seguridad', 'Sistema de Fijación']
  },

  // Fachadas Comerciales
  {
    id: 'fachada-1',
    title: 'Fachada de Vidrio Corporativa',
    description: 'Sistema de fachada en vidrio para edificio corporativo',
    category: 'fachadas',
    images: ['/fachadas/fachadas1.jpg', '/fachadas/fachadas2.jpg'],
    featured: true,
    year: '2024',
    materials: ['Vidrio Templado', 'Aluminio Estructural']
  },
  {
    id: 'fachada-2',
    title: 'Fachada Mixta Comercial',
    description: 'Fachada combinando vidrio y aluminio para centro comercial',
    category: 'fachadas',
    images: ['/fachadas/fachadas3.jpg', '/fachadas/fachadas4.jpg'],
    featured: false,
    year: '2023',
    materials: ['Vidrio Laminado', 'Aluminio', 'Acero']
  },

  // Ventanería Edificios
  {
    id: 'ventana-edificio-1',
    title: 'Ventanería Edificio Residencial',
    description: 'Sistema de ventanas para edificio residencial de apartamentos',
    category: 'ventaneria-edificios',
    images: ['/ventaneria edificios/edificios1.jpg', '/ventaneria edificios/edificios2.jpg'],
    featured: true,
    year: '2024',
    materials: ['Vidrio Doble Acristalamiento', 'Aluminio']
  },
  {
    id: 'ventana-edificio-2',
    title: 'Ventanería Edificio Comercial',
    description: 'Ventanas para edificio de oficinas comerciales',
    category: 'ventaneria-edificios',
    images: ['/ventaneria edificios/edificios3.jpg', '/ventaneria edificios/edificios4.jpg'],
    featured: false,
    year: '2023',
    materials: ['Vidrio Templado', 'Aluminio Estructural']
  },

  // Accesorios y Herrajes
  {
    id: 'accesorio-1',
    title: 'Herrajes Especializados',
    description: 'Instalación de herrajes especializados para sistemas de vidrio',
    category: 'accesorios',
    images: ['/accesorios/accesorios1.jpg', '/accesorios/accesorios2.jpg'],
    featured: true,
    year: '2024',
    materials: ['Acero Inoxidable', 'Aluminio']
  },
  {
    id: 'accesorio-2',
    title: 'Accesorios Decorativos',
    description: 'Elementos decorativos y funcionales para proyectos residenciales',
    category: 'accesorios',
    images: ['/accesorios/accesorios3.jpg', '/accesorios/accesorios4.jpg'],
    featured: false,
    year: '2023',
    materials: ['Acero Inoxidable', 'Vidrio']
  },

  // Pasamanos y Barandales
  {
    id: 'pasamano-1',
    title: 'Pasamanos de Seguridad',
    description: 'Sistemas de pasamanos en acero inoxidable para edificios',
    category: 'pasamanos',
    images: ['/pasamanos/pasamanos.jpg', '/pasamanos/pasamanos2.jpg'],
    featured: true,
    year: '2024',
    materials: ['Acero Inoxidable 316', 'Vidrio Templado']
  },
  {
    id: 'pasamano-2',
    title: 'Barandales Residenciales',
    description: 'Barandales decorativos para balcones y escaleras residenciales',
    category: 'pasamanos',
    images: ['/pasamanos/pasamanos3.jpg'],
    featured: false,
    year: '2023',
    materials: ['Acero Inoxidable 304']
  },

  // Ventanería Residencial
  {
    id: 'ventana-residencial-1',
    title: 'Ventanería Residencial Moderna',
    description: 'Sistema de ventanas para vivienda unifamiliar moderna',
    category: 'ventaneria',
    images: ['/Ventaneria/ventaneria1.jpg', '/Ventaneria/ventaneria2.jpg'],
    featured: true,
    year: '2024',
    materials: ['Vidrio Doble Acristalamiento', 'Aluminio']
  },

  // Balcones
  {
    id: 'balcon-1',
    title: 'Sistema de Balcón Residencial',
    description: 'Protección y diseño para balcón residencial',
    category: 'balcones',
    images: ['/balcones/balcones1.jpg'],
    featured: false,
    year: '2023',
    materials: ['Vidrio Templado', 'Aluminio']
  },

  // Portones
  {
    id: 'porton-1',
    title: 'Portón Automático Residencial',
    description: 'Sistema de portón automático para acceso vehicular',
    category: 'portones',
    images: ['/portones/porton1.jpg'],
    featured: false,
    year: '2023',
    materials: ['Acero Galvanizado', 'Sistema Automático']
  },

  // Cerámica y Aluminio
  {
    id: 'ceramica-1',
    title: 'Sistema Mixto Cerámica-Aluminio',
    description: 'Trabajo especializado combinando cerámica y sistemas de aluminio',
    category: 'ceramica-aluminio',
    images: ['/ceramica aluminio/ceramica1.jpg'],
    featured: false,
    year: '2023',
    materials: ['Cerámica', 'Aluminio', 'Adhesivos Especializados']
  },

  // Estructuras Livianas
  {
    id: 'estructura-1',
    title: 'Estructura Metálica Liviana',
    description: 'Estructura metálica liviana para construcción comercial',
    category: 'estructuras-livianas',
    images: ['/estructuras livianas/estructura1.jpg'],
    featured: false,
    year: '2023',
    materials: ['Acero Estructural', 'Lámina Metálica']
  }
]

export const getPortfolioByCategory = (categoryId: string): PortfolioItem[] => {
  return PORTFOLIO_ITEMS.filter(item => item.category === categoryId)
}

export const getFeaturedPortfolio = (): PortfolioItem[] => {
  return PORTFOLIO_ITEMS.filter(item => item.featured)
}

export const getPortfolioCategory = (categoryId: string): PortfolioCategory | undefined => {
  return PORTFOLIO_CATEGORIES.find(category => category.id === categoryId)
}
