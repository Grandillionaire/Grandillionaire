import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Maxim Gagiev',
  description: 'Full-Stack Developer & Founder. Building digital solutions that matter.',
  openGraph: {
    title: 'Maxim Gagiev',
    description: 'Full-Stack Developer & Founder',
    url: 'https://grandillionaire.vercel.app',
    siteName: 'Maxim Gagiev',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>{children}</body>
    </html>
  )
}
