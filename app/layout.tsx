import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '@/src/context/ThemeContext'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jonnylutz.com'),
  title: 'Jonathan Lutz · Portfolio',
  description:
    'Jonathan Lutz — front-end engineer at AWS (IoT Console). Agentic software development, React, TypeScript, and production-quality UI.',
  openGraph: {
    type: 'website',
    title: 'Jonathan Lutz · Front-End Engineer Portfolio',
    description:
      'Front-end engineer at AWS working on IoT Console. Specializing in React, TypeScript, and agentic software development.',
    url: 'https://www.jonnylutz.com',
    siteName: 'Jonathan Lutz Portfolio',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonathan Lutz · Front-End Engineer Portfolio',
    description:
      'Front-end engineer at AWS working on IoT Console. Specializing in React, TypeScript, and agentic software development.',
    images: ['/og-image.png'],
  },
  authors: [{ name: 'Jonathan Lutz' }],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.jonnylutz.com' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
