import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
