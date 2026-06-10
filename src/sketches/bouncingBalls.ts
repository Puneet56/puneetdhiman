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

/**
 * "Satisfying" 2D physics: colourful balls fall under gravity, bounce off the
 * walls and occasionally multiply on impact, leaving glowing trails behind.
 */
export const bouncingBalls: Sketch<CanvasProps> = (p5) => {
  let w = 400
  let h = 400
  let balls: Ball[] = []

  const MAX = 240
  const GRAVITY = 0.28
  const RESTITUTION = 0.94

  const makeBall = (x: number, y: number, hue: number): Ball => ({
    x,
    y,
    vx: p5.random(-3.5, 3.5),
    vy: p5.random(-2, 1),
    r: p5.random(5, 11),
    hue,
  })

  const reset = () => {
    balls = [makeBall(w / 2, h / 3, p5.random(360))]
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
    p5.background(230, 25, 6)
    reset()
  }

  p5.draw = () => {
    // translucent fill instead of clear -> motion-blur trails
    p5.noStroke()
    p5.fill(230, 25, 6, 0.16)
    p5.rect(0, 0, w, h)

    for (const b of balls) {
      b.vy += GRAVITY
      b.x += b.vx
      b.y += b.vy

      let bounced = false
      if (b.x - b.r < 0) {
        b.x = b.r
        b.vx = Math.abs(b.vx) * RESTITUTION
        bounced = true
      } else if (b.x + b.r > w) {
        b.x = w - b.r
        b.vx = -Math.abs(b.vx) * RESTITUTION
        bounced = true
      }
      if (b.y - b.r < 0) {
        b.y = b.r
        b.vy = Math.abs(b.vy) * RESTITUTION
        bounced = true
      } else if (b.y + b.r > h) {
        b.y = h - b.r
        b.vy = -Math.abs(b.vy) * RESTITUTION
        b.vx *= 0.99
        bounced = true
      }

      if (bounced && balls.length < MAX && p5.random() < 0.04) {
        balls.push(makeBall(b.x, b.y, (b.hue + 47) % 360))
      }

      // soft glow
      p5.fill(b.hue, 85, 100, 0.22)
      p5.circle(b.x, b.y, b.r * 3.4)
      p5.fill(b.hue, 80, 100, 0.95)
      p5.circle(b.x, b.y, b.r * 2)
    }

    if (balls.length >= MAX) reset()

    p5.fill(0, 0, 100, 0.85)
    p5.textSize(13)
    p5.textAlign(p5.LEFT, p5.TOP)
    p5.text(`Balls: ${balls.length}`, 14, 12)
  }
}
