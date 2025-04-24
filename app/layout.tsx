import { DM_Sans, Outfit } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const outfit = Outfit({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: '700',
})

export const metadata: Metadata = {
  title: 'Manifest',
  description: 'A festival for forecasting, markets, AI, and novel ideas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
