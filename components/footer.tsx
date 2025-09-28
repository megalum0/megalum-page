import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Logo } from './logo'
import { COMPANY_INFO } from '@/lib/constants'
import { generateWhatsAppURL } from '@/lib/utils'

export function Footer() {
  const whatsappMessage = `Hola, me interesa cotizar sus servicios de vidrios y aluminio.`
  const whatsappUrl = generateWhatsAppURL(COMPANY_INFO.whatsapp, whatsappMessage)

  return (
    <footer className="bg-ink text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="md" showText={true} />
            <p className="text-gray-300 text-sm leading-relaxed">
              {COMPANY_INFO.slogan}
            </p>
            <p className="text-gray-300 text-sm">
              {COMPANY_INFO.city}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <nav className="space-y-2">
              <Link href="/servicios" className="block text-gray-300 hover:text-white transition-colors">
                Servicios
              </Link>
              <Link href="/portafolio" className="block text-gray-300 hover:text-white transition-colors">
                Portafolio
              </Link>
              <Link href="/quienes-somos" className="block text-gray-300 hover:text-white transition-colors">
                Quiénes Somos
              </Link>
              <Link href="/contacto" className="block text-gray-300 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <nav className="space-y-2">
              <Link href="/servicios/ventaneria" className="block text-gray-300 hover:text-white transition-colors">
                Ventanería
              </Link>
              <Link href="/servicios/puertas" className="block text-gray-300 hover:text-white transition-colors">
                Puertas
              </Link>
              <Link href="/servicios/fachadas" className="block text-gray-300 hover:text-white transition-colors">
                Fachadas
              </Link>
              <Link href="/servicios/divisiones" className="block text-gray-300 hover:text-white transition-colors">
                Divisiones
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand" />
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand" />
                <span className="text-gray-300 text-sm">
                  {COMPANY_INFO.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-brand" />
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} {COMPANY_INFO.fullName}. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/politica-privacidad" className="text-gray-300 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos-condiciones" className="text-gray-300 hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
