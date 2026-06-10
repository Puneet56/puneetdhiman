'use client'

import type { Sketch } from '@p5-wrapper/react'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

// p5 touches `window` on import, so keep it strictly client-side.
const P5Canvas = dynamic(
  () => import('@p5-wrapper/react').then((m) => m.P5Canvas),
  { ssr: false },
)

interface SketchCanvasProps {
  sketch: Sketch
  /** height / width ratio of the canvas (default square) */
  aspectRatio?: number
  className?: string
}

export function SketchCanvas({
  sketch,
  aspectRatio = 1,
  className,
}: SketchCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null,
  )

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const measure = () => {
      const width = Math.floor(el.clientWidth)
      if (width > 0) {
        setSize({ width, height: Math.round(width * aspectRatio) })
      }
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [aspectRatio])

  return (
    <div ref={containerRef} className={className}>
      {size && (
        <P5Canvas sketch={sketch} width={size.width} height={size.height} />
      )}
    </div>
  )
}
