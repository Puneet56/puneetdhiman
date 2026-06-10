import type { Sketch, SketchProps } from '@p5-wrapper/react'

type CanvasProps = SketchProps & { width: number; height: number }

type Particle = { x: number; y: number; hue: number }

/**
 * Perlin-noise flow field: hundreds of particles glide along an invisible
 * vector field that slowly evolves over time, painting silky ribbons.
 */
export const flowField: Sketch<CanvasProps> = (p5) => {
  let w = 400
  let h = 400
  let particles: Particle[] = []
  let t = 0

  const COUNT = 650
  const SPEED = 1.7
  const NOISE_SCALE = 0.0065

  const spawn = (): Particle => ({
    x: p5.random(w),
    y: p5.random(h),
    hue: p5.random(190, 320),
  })

  const reset = () => {
    particles = Array.from({ length: COUNT }, spawn)
    p5.background(245, 35, 7)
  }

  p5.updateWithProps = (props) => {
    let resized = false
    if (typeof props.width === 'number' && props.width > 0 && props.width !== w) {
      w = props.width
      resized = true
    }
    if (typeof props.height === 'number' && props.height > 0 && props.height !== h) {
      h = props.height
      resized = true
    }
    if (resized && p5.width) {
      p5.resizeCanvas(w, h)
      reset()
    }
  }

  p5.setup = () => {
    p5.createCanvas(w, h)
    p5.colorMode(p5.HSB, 360, 100, 100, 1)
    reset()
  }

  p5.draw = () => {
    p5.noStroke()
    p5.fill(245, 35, 7, 0.045)
    p5.rect(0, 0, w, h)

    for (const pt of particles) {
      const angle =
        p5.noise(pt.x * NOISE_SCALE, pt.y * NOISE_SCALE, t) * Math.PI * 4
      pt.x += Math.cos(angle) * SPEED
      pt.y += Math.sin(angle) * SPEED

      if (pt.x < 0 || pt.x > w || pt.y < 0 || pt.y > h) {
        pt.x = p5.random(w)
        pt.y = p5.random(h)
      }

      p5.fill(pt.hue, 70, 100, 0.55)
      p5.circle(pt.x, pt.y, 2.2)
    }

    t += 0.0025
  }
}
