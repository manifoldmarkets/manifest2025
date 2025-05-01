import { Bungee_Shade, DM_Sans, Outfit } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

// const dmSans = DM_Sans({
//   variable: '--font-body',
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// })
const outfit = Outfit({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const bungeeShade = Bungee_Shade({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Manifest 2025',
  description: 'A festival for forecasting, markets, AI, and novel ideas. June 6-8, 2025 in Berkeley, California.',
  icons: {
    icon: '/manifold-logo.ico',
  },
  openGraph: {
    title: 'Manifest 2025',
    description: 'A festival for forecasting, markets, AI, and novel ideas. June 6-8, 2025 in Berkeley, California.',
    images: [
      {
        url: '/images/gallery/1.jpg',
        width: 1800,
        height: 1200,
        alt: 'Manifest 2025 - A festival for forecasting, markets, and novel ideas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manifest 2025',
    description: 'A festival for forecasting, markets, AI, and novel ideas. June 6-8, 2025 in Berkeley, California.',
    images: ['/images/gallery/1.jpg'],
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
        className={`${outfit.variable} ${bungeeShade.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
