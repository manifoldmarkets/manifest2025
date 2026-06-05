import {
  Bungee_Shade,
  Cinzel,
  Cinzel_Decorative,
  Cormorant_Garamond,
  Libre_Baskerville,
  Outfit,
} from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

// Outfit & Bungee Shade are only used by the legacy /2025 page, so don't preload.
const outfit = Outfit({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  preload: false,
})
const bungeeShade = Bungee_Shade({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  preload: false,
})
const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})
const cinzelDecorative = Cinzel_Decorative({
  variable: '--font-cinzel-decorative',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
})
const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})
const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manifest 2026',
  description: 'A festival for prediction markets & the future. June 12-14, 2026 · Berkeley, CA.',
  icons: {
    icon: '/manifold-logo.ico',
  },
  openGraph: {
    title: 'Manifest 2026',
    description: 'A festival for prediction markets & the future. June 12-14, 2026 · Berkeley, CA.',
    images: [
      {
        url: '/images/2026/rainbow-orb-preview.png',
        width: 1600,
        height: 900,
        alt: 'Manifest 2026 - A festival for prediction markets & the future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manifest 2026',
    description: 'A festival for prediction markets & the future. June 12-14, 2026 · Berkeley, CA.',
    images: ['/images/2026/rainbow-orb-preview.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${bungeeShade.variable} ${cinzel.variable} ${cinzelDecorative.variable} ${libreBaskerville.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
