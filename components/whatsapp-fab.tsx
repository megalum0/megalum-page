'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY_INFO } from '@/lib/constants'
import { generateWhatsAppURL } from '@/lib/utils'

export function WhatsAppFAB() {
  const message = `Hola, me interesa cotizar sus servicios de vidrios y aluminio.`
  const whatsappUrl = generateWhatsAppURL(COMPANY_INFO.whatsapp, message)

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  )
}
