import { Viewport } from 'next'

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
