import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Puneet Dhiman',
  description: 'Portfolio of Puneet Dhiman',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
