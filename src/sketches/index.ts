import type { Sketch } from '@p5-wrapper/react'
import { bouncingBalls } from './bouncingBalls'
import { constellation } from './constellation'
import { flowField } from './flowField'
import { harmonograph } from './harmonograph'

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
      'A satisfying 2D physics toy — colourful balls fall, bounce and multiply on impact, trailing light as they go.',
    sketch: bouncingBalls as Sketch,
  },
  {
    slug: 'flow-field',
    title: 'Flow Field',
    description:
      'Hundreds of particles drift along an evolving Perlin-noise vector field, painting silky ribbons of colour.',
    sketch: flowField as Sketch,
  },
  {
    slug: 'constellation',
    title: 'Constellation',
    description:
      'Drifting nodes link up when they get close and lean towards your cursor — a living network graph.',
    sketch: constellation as Sketch,
  },
  {
    slug: 'harmonograph',
    title: 'Harmonograph',
    description:
      'Decaying sinusoids trace looping spirograph curves, reseeding with new parameters every cycle.',
    sketch: harmonograph as Sketch,
  },
]

export const featuredSketch = sketches[0]
