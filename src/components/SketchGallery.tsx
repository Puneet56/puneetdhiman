'use client'

import { useEffect, useState } from 'react'
import { sketches, type SketchEntry } from '@/sketches'
import { SketchCanvas } from './SketchCanvas'

export function SketchGallery() {
  const [active, setActive] = useState<SketchEntry | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  const single = sketches.length === 1

  return (
    <>
      <div
        className={
          single
            ? 'mx-auto grid max-w-md gap-6'
            : 'grid gap-6 sm:grid-cols-2'
        }
      >
        {sketches.map((entry) => (
          <button
            key={entry.slug}
            type="button"
            onClick={() => setActive(entry)}
            className="group overflow-hidden rounded-lg border text-left shadow-sm transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="relative bg-black">
              <SketchCanvas
                sketch={entry.sketch}
                aspectRatio={single ? 1.2 : 0.62}
              />
              <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 text-xs text-white/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                Expand ↗
              </span>
            </div>
            <div className="p-5">
              <h3 className="mb-1 text-lg font-semibold">{entry.title}</h3>
              <p className="text-sm text-gray-500">{entry.description}</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-3xl flex-col overflow-hidden rounded-xl border bg-background shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b p-5">
              <div>
                <h3 className="text-xl font-semibold">{active.title}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {active.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="shrink-0 rounded-md border px-3 py-1 text-sm transition-colors hover:bg-accent"
              >
                Esc ✕
              </button>
            </div>
            <div className="bg-black">
              {/* key forces a fresh p5 instance per opened sketch */}
              <SketchCanvas
                key={active.slug}
                sketch={active.sketch}
                aspectRatio={0.66}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
