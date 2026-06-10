import type { Sketch, SketchProps } from '@p5-wrapper/react'

type CanvasProps = SketchProps & { width: number; height: number }

type Node = { x: number; y: number; vx: number; vy: number }

/**
 * Drifting nodes that link up with thin lines when they get close, and lean
 * towards the cursor — a living constellation / network graph.
 */
export const constellation: Sketch<CanvasProps> = (p5) => {
  let w = 400
  let h = 400
  let nodes: Node[] = []

  const LINK_DIST = 120
  const SPEED = 0.5

  const density = () => p5.constrain(Math.round((w * h) / 9000), 40, 130)

  const reset = () => {
    nodes = Array.from({ length: density() }, () => ({
      x: p5.random(w),
      y: p5.random(h),
      vx: p5.random(-SPEED, SPEED),
      vy: p5.random(-SPEED, SPEED),
    }))
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
    p5.background(230, 25, 6)

    const mouseInside =
      p5.mouseX > 0 && p5.mouseX < w && p5.mouseY > 0 && p5.mouseY < h

    for (const n of nodes) {
      if (mouseInside) {
        const dx = p5.mouseX - n.x
        const dy = p5.mouseY - n.y
        const d = Math.hypot(dx, dy)
        if (d < 160 && d > 1) {
          n.vx += (dx / d) * 0.04
          n.vy += (dy / d) * 0.04
        }
      }

      n.vx = p5.constrain(n.vx, -1.4, 1.4)
      n.vy = p5.constrain(n.vy, -1.4, 1.4)
      n.x += n.vx
      n.y += n.vy

      if (n.x < 0 || n.x > w) n.vx *= -1
      if (n.y < 0 || n.y > h) n.vy *= -1
      n.x = p5.constrain(n.x, 0, w)
      n.y = p5.constrain(n.y, 0, h)
    }

    // links
    p5.strokeWeight(1)
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i]
        const b = nodes[j]
        const d = Math.hypot(a.x - b.x, a.y - b.y)
        if (d < LINK_DIST) {
          const alpha = p5.map(d, 0, LINK_DIST, 0.5, 0)
          p5.stroke(265, 60, 100, alpha)
          p5.line(a.x, a.y, b.x, b.y)
        }
      }
    }

    // nodes
    p5.noStroke()
    for (const n of nodes) {
      p5.fill(280, 50, 100, 0.9)
      p5.circle(n.x, n.y, 3.2)
    }
  }
}
