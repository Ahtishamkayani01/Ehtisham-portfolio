import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
})

export const metadata: Metadata = {
  title: 'Ehtisham Nawaz Kiani | Senior Frontend Engineer',
  description: 'Senior Frontend Engineer with 5+ years building responsive, scalable, high-performance web applications with React.js, Next.js and TypeScript.',
  keywords: ['Senior Frontend Engineer', 'Frontend Developer', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Web Developer'],
  authors: [{ name: 'Ehtisham Nawaz Kiani' }],
  openGraph: {
    title: 'Ehtisham Nawaz Kiani | Senior Frontend Engineer',
    description: 'Senior Frontend Engineer with 5+ years building responsive, scalable web applications with React.js, Next.js and TypeScript.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

// Browser UI (mobile address bar) picks up the paper colour.
export const viewport: Viewport = {
  themeColor: '#efeae0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrument.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
