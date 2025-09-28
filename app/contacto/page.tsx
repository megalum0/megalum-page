import { Metadata } from 'next'
import { Section } from '@/components/section'
import { Button } from '@/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card'
import { generatePageSEO } from '@/lib/seo'
import { COMPANY_INFO } from '@/lib/constants'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { generateWhatsAppURL } from '@/lib/utils'

export const metadata: Metadata = generatePageSEO(
  'Contacto',
  'Contáctanos para cotizar tu proyecto en vidrios, aluminio y acero inoxidable',
  '/contacto'
)

export default function ContactoPage() {
  const whatsappMessage = `Hola, me interesa cotizar sus servicios de vidrios y aluminio.`
  const whatsappUrl = generateWhatsAppURL(COMPANY_INFO.whatsapp, whatsappMessage)

  return (
    <Section>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
          Contáctanos
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          Estamos listos para ayudarte con tu proyecto. Contáctanos y recibe una 
          cotización personalizada sin compromiso.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Información de contacto</CardTitle>
              <CardDescription>
                Estamos disponibles para atenderte de lunes a viernes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <Phone className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Teléfono</h3>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-gray-500 hover:text-brand transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <Mail className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Email</h3>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-gray-500 hover:text-brand transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <MapPin className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Dirección</h3>
                  <p className="text-gray-500">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <Clock className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Horarios</h3>
                  <p className="text-gray-500">
                    Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                    Sábados: 8:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>WhatsApp</CardTitle>
              <CardDescription>
                Escríbenos directamente por WhatsApp para una respuesta más rápida
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full bg-green-500 hover:bg-green-600" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chatear por WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Placeholder */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Solicitar cotización</CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="+57 300 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-ink mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="ventaneria">Ventanería</option>
                    <option value="puertas">Puertas</option>
                    <option value="fachadas">Fachadas</option>
                    <option value="divisiones">Divisiones</option>
                    <option value="escaleras">Escaleras</option>
                    <option value="barandas">Barandas</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <Button size="lg" className="w-full">
                  Enviar solicitud
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}
