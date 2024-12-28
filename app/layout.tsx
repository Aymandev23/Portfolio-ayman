import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Digital Agency', 'Web Design', 'Web Development', 'UI/UX', 'Branding'],
  authors: [{ name: 'Eclipso Studio' }],
  creator: 'Eclipso Studio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.eclipsostudio.com',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: 'https://www.eclipsostudio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eclipso Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['https://www.eclipsostudio.com/twitter-image.jpg'],
    creator: '@eclipsostudio',
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: 'https://www.eclipsostudio.com/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://www.eclipsostudio.com" />
      </head>
      <body className={`${spaceGrotesk.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

