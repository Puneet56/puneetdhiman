import type { Sketch, SketchProps } from '@p5-wrapper/react'

type CanvasProps = SketchProps & { width: number; height: number }

type Ball = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hue: number
}

// short vertical bar obstacles, positioned as fractions of the canvas
type PegSpec = { fx: number; fy: number }
const PEG_SPECS: PegSpec[] = [
  { fx: 0.94, fy: 0.09 },
  { fx: 0.92, fy: 0.34 },
  { fx: 0.27, fy: 0.16 },
  { fx: 0.08, fy: 0.6 },
  { fx: 0.09, fy: 0.76 },
  { fx: 0.62, fy: 0.5 },
]

type Peg = { left: number; right: number; top: number; bottom: number }

const clamp = (v: number, lo: number, hi: number) =>
  v < lo ? lo : v > hi ? hi : v

/**
 * "Satisfying 2D" — colourful balls fall under gravity, leave motion-blur
 * streaks and multiply on every bounce off the walls, floor and the little
 * peg obstacles. Recreated from the reference video.
 */
export const bouncingBalls: Sketch<CanvasProps> = (p5) => {
  let w = 400
  let h = 400
  let floorY = 370
  let balls: Ball[] = []
  let pegs: Peg[] = []

  const CAP = 1100
  const GRAVITY = 0.22
  const REST = 0.99

  const makeBall = (x: number, y: number, hue: number): Ball => ({
    x,
    y,
    vx: p5.random(-2.6, 2.6),
    vy: p5.random(-2, 1),
    r: p5.random(5, 8),
    hue,
  })

  const buildPegs = () => {
    const halfH = Math.max(24, h * 0.055)
    const halfW = Math.max(2, w * 0.006)
    pegs = PEG_SPECS.map(({ fx, fy }) => {
      const cx = fx * w
      const cy = fy * h
      return {
        left: cx - halfW,
        right: cx + halfW,
        top: cy - halfH,
        bottom: cy + halfH,
      }
    })
  }

  const reset = () => {
    balls = [makeBall(w * 0.18, h * 0.15, p5.random(360))]
  }

  const layout = () => {
    floorY = h - Math.max(30, h * 0.07)
    buildPegs()
  }

  // circle-vs-rectangle resolution; returns true on contact
  const hitPeg = (b: Ball, peg: Peg): boolean => {
    const cx = clamp(b.x, peg.left, peg.right)
    const cy = clamp(b.y, peg.top, peg.bottom)
    let dx = b.x - cx
    let dy = b.y - cy
    const d2 = dx * dx + dy * dy
    if (d2 >= b.r * b.r) return false

    let d = Math.sqrt(d2)
    if (d < 0.0001) {
      // centre inside the bar: push out sideways
      dx = b.x < (peg.left + peg.right) / 2 ? -1 : 1
      dy = 0
      d = 1
    }
    const nx = dx / d
    const ny = dy / d
    const overlap = b.r - d
    b.x += nx * overlap
    b.y += ny * overlap
    const vdot = b.vx * nx + b.vy * ny
    b.vx = (b.vx - 2 * vdot * nx) * REST
    b.vy = (b.vy - 2 * vdot * ny) * REST
    return true
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
      layout()
      reset()
    }
  }

  p5.setup = () => {
    p5.createCanvas(w, h)
    p5.colorMode(p5.HSB, 360, 100, 100, 1)
    layout()
    p5.background(208, 10, 84)
    reset()
  }

  p5.draw = () => {
    // translucent wash -> motion-blur trails
    p5.noStroke()
    p5.fill(208, 10, 84, 0.34)
    p5.rect(0, 0, w, h)

    const newborns: Ball[] = []

    for (const b of balls) {
      b.vy += GRAVITY
      b.x += b.vx
      b.y += b.vy

      let bounced = false

      if (b.x - b.r < 0) {
        b.x = b.r
        b.vx = Math.abs(b.vx) * REST
        bounced = true
      } else if (b.x + b.r > w) {
        b.x = w - b.r
        b.vx = -Math.abs(b.vx) * REST
        bounced = true
      }
      if (b.y - b.r < 0) {
        b.y = b.r
        b.vy = Math.abs(b.vy) * REST
        bounced = true
      } else if (b.y + b.r > floorY) {
        b.y = floorY - b.r
        b.vy = -Math.abs(b.vy) * REST
        bounced = true
      }

      for (const peg of pegs) {
        if (hitPeg(b, peg)) bounced = true
      }

      if (bounced && balls.length + newborns.length < CAP) {
        newborns.push(makeBall(b.x, b.y, (b.hue + 53) % 360))
      }

      // glow + core
      p5.fill(b.hue, 85, 96, 0.25)
      p5.circle(b.x, b.y, b.r * 3)
      p5.fill(b.hue, 85, 96)
      p5.circle(b.x, b.y, b.r * 2)
    }

    balls.push(...newborns)
    if (balls.length >= CAP) reset()

    // pegs
    p5.noStroke()
    p5.fill(70, 35, 28)
    for (const peg of pegs) {
      p5.rect(
        peg.left,
        peg.top,
        peg.right - peg.left,
        peg.bottom - peg.top,
        2,
      )
    }

    // floor line
    p5.stroke(70, 35, 30)
    p5.strokeWeight(2)
    p5.line(0, floorY, w, floorY)

    // counter
    p5.noStroke()
    p5.fill(0, 0, 18)
    p5.textStyle(p5.BOLD)
    p5.textSize(Math.max(13, h * 0.03))
    p5.textAlign(p5.CENTER, p5.CENTER)
    p5.text(`Balls: ${balls.length}`, w / 2, (floorY + h) / 2)
  }
}
