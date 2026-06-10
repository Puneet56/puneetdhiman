import type { Sketch } from '@p5-wrapper/react'
import { bouncingBalls } from './bouncingBalls'

export type SketchEntry = {
  slug: string
  title: string
  description: string
  sketch: Sketch
}

export const sketches: SketchEntry[] = [
  {
    slug: 'bouncing-balls',
    title: 'Bouncing Balls',
    description:
      'A satisfying 2D physics toy — colourful balls fall under gravity, leave glowing streaks and multiply on every bounce off the walls, floor and pegs.',
    sketch: bouncingBalls as Sketch,
  },
]

export const featuredSketch = sketches[0]
