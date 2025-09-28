import { COMPANY_INFO } from './constants'

export const defaultSEO = {
  title: `${COMPANY_INFO.fullName} - ${COMPANY_INFO.slogan}`,
  description: `Especialistas en vidrios, aluminio y acero inoxidable en ${COMPANY_INFO.city}. ${COMPANY_INFO.slogan}`,
  keywords: [
    'vidrios',
    'aluminio',
    'acero inoxidable',
    'ventanería',
    'puertas',
    'fachadas',
    'Ibagué',
    'Tolima',
    'Colombia',
    'Megalum Center',
  ],
  openGraph: {
    title: `${COMPANY_INFO.fullName} - ${COMPANY_INFO.slogan}`,
    description: `Especialistas en vidrios, aluminio y acero inoxidable en ${COMPANY_INFO.city}. ${COMPANY_INFO.slogan}`,
    type: 'website',
    locale: 'es_CO',
    siteName: COMPANY_INFO.fullName,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: COMPANY_INFO.fullName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.fullName} - ${COMPANY_INFO.slogan}`,
    description: `Especialistas en vidrios, aluminio y acero inoxidable en ${COMPANY_INFO.city}. ${COMPANY_INFO.slogan}`,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
}

export function generatePageSEO(
  title: string,
  description: string,
  path: string = ''
) {
  const fullTitle = `${title} | ${COMPANY_INFO.fullName}`
  const fullDescription = `${description} - ${COMPANY_INFO.slogan}`

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      type: 'website',
      locale: 'es_CO',
      siteName: COMPANY_INFO.fullName,
      url: `https://megalumcenter.com${path}`,
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: ['/images/og-image.jpg'],
    },
  }
}
