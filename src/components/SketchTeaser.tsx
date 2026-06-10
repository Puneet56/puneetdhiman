'use client'

import Link from 'next/link'
import { featuredSketch } from '@/sketches'
import { SketchCanvas } from './SketchCanvas'

export function SketchTeaser() {
  return (
    <Link
      href="/sketches"
      className="group block overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
    >
      <div className="grid md:grid-cols-2">
        <div className="bg-black">
          <SketchCanvas sketch={featuredSketch.sketch} aspectRatio={0.7} />
        </div>
        <div className="flex flex-col justify-center p-8">
          <span className="mb-2 font-mono text-sm text-gray-500">p5.js</span>
          <h3 className="mb-3 text-2xl font-semibold">
            Live, interactive sketches
          </h3>
          <p className="mb-6 text-gray-600">
            Generative art, physics toys and flow fields — running right in your
            browser. Have a play.
          </p>
          <span className="font-medium text-blue-600 transition-transform group-hover:translate-x-1">
            Explore the gallery →
          </span>
        </div>
      </div>
    </Link>
  )
}
