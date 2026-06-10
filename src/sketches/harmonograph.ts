import type { Sketch, SketchProps } from '@p5-wrapper/react'

type CanvasProps = SketchProps & { width: number; height: number }

/**
 * A damped harmonograph: two pairs of decaying sinusoids trace looping,
 * spirograph-like curves. New random parameters each cycle, so it never
 * draws the same figure twice.
 */
export const harmonograph: Sketch<CanvasProps> = (p5) => {
  let w = 400
  let h = 400
  let t = 0
  let hue = 0

  let params = {
    a1: 0,
    a2: 0,
    f1: 0,
    f2: 0,
    f3: 0,
    f4: 0,
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    d: 0,
  }

  const randomize = () => {
    const base = p5.random(1.5, 3)
    params = {
      a1: 1,
      a2: 1,
      f1: base + p5.random(-0.02, 0.02),
      f2: base * p5.random(1.9, 2.1) + p5.random(-0.02, 0.02),
      f3: base + p5.random(-0.02, 0.02),
      f4: base * p5.random(0.9, 1.1) + p5.random(-0.02, 0.02),
      p1: p5.random(p5.TWO_PI),
      p2: p5.random(p5.TWO_PI),
      p3: p5.random(p5.TWO_PI),
      p4: p5.random(p5.TWO_PI),
      d: p5.random(0.0018, 0.004),
    }
    hue = p5.random(360)
    t = 0
    p5.background(232, 22, 6)
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
      randomize()
    }
  }

  p5.setup = () => {
    p5.createCanvas(w, h)
    p5.colorMode(p5.HSB, 360, 100, 100, 1)
    randomize()
  }

  const point = (tt: number) => {
    const { a1, a2, f1, f2, f3, f4, p1, p2, p3, p4, d } = params
    const decay = Math.exp(-d * tt)
    const scale = (Math.min(w, h) / 2) * 0.42
    const x =
      (a1 * Math.sin(tt * f1 * 0.01 + p1) +
        a2 * Math.sin(tt * f2 * 0.01 + p2)) *
      0.5
    const y =
      (a1 * Math.sin(tt * f3 * 0.01 + p3) +
        a2 * Math.sin(tt * f4 * 0.01 + p4)) *
      0.5
    return { x: w / 2 + x * scale * decay, y: h / 2 + y * scale * decay }
  }

  p5.draw = () => {
    p5.strokeWeight(1.4)
    const steps = 22
    for (let i = 0; i < steps; i++) {
      const a = point(t)
      const b = point(t + 1)
      p5.stroke((hue + t * 0.05) % 360, 65, 100, 0.85)
      p5.line(a.x, a.y, b.x, b.y)
      t += 1
    }

    // exp(-d*t) ~ done -> start a fresh figure
    if (Math.exp(-params.d * t) < 0.02) randomize()
  }
}
