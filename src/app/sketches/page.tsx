import type { Metadata } from 'next'
import Link from 'next/link'
import { SketchGallery } from '@/components/SketchGallery'

export const metadata: Metadata = {
  title: 'Sketches | Puneet Dhiman',
  description:
    'Interactive creative-coding sketches built with p5.js — generative art, physics toys and flow fields by Puneet Dhiman.',
  alternates: {
    canonical: '/sketches',
  },
  openGraph: {
    title: 'Sketches | Puneet Dhiman',
    description:
      'Interactive creative-coding sketches built with p5.js — generative art, physics toys and flow fields.',
    url: 'https://puneetdhiman.com/sketches',
    siteName: 'Puneet Dhiman',
    locale: 'en_US',
    type: 'website',
  },
}

export default function SketchesPage() {
  return (
    <main className="container mx-auto py-4">
      <Link
        href="/"
        className="inline-block font-mono text-sm text-gray-500 transition-colors hover:text-foreground"
      >
        ← Back home
      </Link>

      <div className="mt-16 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold lg:text-5xl">Sketches</h1>
        <p className="text-lg text-gray-600">
          A playground of interactive creative-coding experiments built with{' '}
          <Link
            href="https://p5js.org"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            p5.js
          </Link>
          . Each one runs live in your browser — click any sketch to expand it.
        </p>
      </div>

      <section className="mt-16 mb-24">
        <SketchGallery />
      </section>
    </main>
  )
}
