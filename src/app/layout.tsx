import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Puneet Dhiman | Full Stack Developer',
  description: 'Full Stack Developer & Programming Enthusiast. Building modern web applications and tools that solve real-world problems.',
  keywords: ['Full Stack Developer', 'Web Development', 'Programming', 'Software Engineer', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Go'],
  authors: [{ name: 'Puneet Dhiman' }],
  creator: 'Puneet Dhiman',
  publisher: 'Puneet Dhiman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://puneetdhiman.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Puneet Dhiman | Full Stack Developer',
    description: 'Full Stack Developer & Programming Enthusiast. Building modern web applications and tools that solve real-world problems.',
    url: 'https://puneetdhiman.com',
    siteName: 'Puneet Dhiman',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puneet Dhiman | Full Stack Developer',
    description: 'Full Stack Developer & Programming Enthusiast. Building modern web applications and tools that solve real-world problems.',
    creator: '@Puneet56',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
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
