import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maxim Gagiev — Full-Stack Developer & Founder',
  description: 'Building digital solutions that drive business growth. Founder of MYG Media. €300K+ revenue, 112+ clients.',
  openGraph: {
    title: 'Maxim Gagiev — Full-Stack Developer & Founder',
    description: 'Building digital solutions that drive business growth.',
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  )
}
