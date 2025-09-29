import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppFAB } from '@/components/whatsapp-fab'
import { defaultSEO } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...defaultSEO,
  metadataBase: new URL('https://megalumcenter.com'),
  manifest: '/manifest.json',
  icons: {
    icon: '/logoico.ico',
    shortcut: '/logoico.ico',
    apple: '/logoico.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8E1B2B' },
    { media: '(prefers-color-scheme: dark)', color: '#6F1522' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  )
}
