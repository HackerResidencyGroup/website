import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

import { Circle } from './circle'

function lerp(a: number, b: number, d: number) {
  d = Math.max(0, Math.min(1, d))
  return a + d * (b - a)
}

export function ParticleAnimation({
  numParticles,
  lineWidth = 1.0,
  particleRadius = 1.0,
  particleSpeed = 1.0,
  interactive = false,
  color = {
    r: 158,
    g: 217,
    b: 249,
    a: 255
  },
  background = {
    r: 255,
    g: 255,
    b: 255,
    a: 0
  },
  className
}: {
  numParticles?: number
  lineWidth?: number
  particleRadius?: number
  particleSpeed?: number
  interactive?: boolean
  color?: {
    r: number
    g: number
    b: number
    a: number
  }
  background?: {
    r: number
    g: number
    b: number
    a: number
  }
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const tickRafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    let particles: Circle[] = []
    let width = canvasRef.current.offsetWidth
    let height = canvasRef.current.offsetHeight

    function update() {
      for (const particle of particles) {
        particle.update()
      }
    }

    function draw() {
      if (!canvasRef.current) return
      const canvas = canvasRef.current
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // clear background
      ctx.fillStyle = `rgba(${background.r}, ${background.g}, ${background.b}, ${background.a})`
      ctx.fillRect(0, 0, width, height)

      ctx.lineWidth = lineWidth

      for (const [i, particle] of particles.entries()) {
        const pi = particle!

        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${
          (color.a / 255.0) * 0.1
        })`
        ctx.beginPath()
        ctx.ellipse(
          pi.x,
          pi.y,
          pi.radius / 50,
          pi.radius / 50,
          0,
          0,
          2 * Math.PI
        )
        ctx.fill()

        for (let j = i + 1; j < particles.length; ++j) {
          const pj = particles[j]!

          if (pi.intersects(pj)) {
            const dist = Math.sqrt(
              (pi.x - pj.x) * (pi.x - pj.x) + (pi.y - pj.y) * (pi.y - pj.y)
            )
            const d = Math.max(0, Math.min(1, dist / 100.0))
            const a = 20 * d + 150 * (1.0 - d)

            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${
              (color.a * a) / (255.0 * 255.0)
            })`
            ctx.beginPath()
            ctx.moveTo(pi.x, pi.y)
            ctx.lineTo(pj.x, pj.y)
            ctx.stroke()
          }
        }
      }
    }

    function reset() {
      if (!canvasRef.current) return

      width = canvasRef.current.offsetWidth
      height = canvasRef.current.offsetHeight
      const numParticlesInferred =
        numParticles ?? lerp(100, 350, (width - 400) / 1000)

      // console.log({ width, height, numParticlesInferred })
      // const numMouseParticles = interactive
      //   ? Math.trunc(Math.max(5, Math.min(20, numParticlesInferred / 50)))
      //   : 0

      const createParticle = () =>
        new Circle({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: (10 + Math.random() * 60) * particleRadius,
          width,
          height,
          speed: 0.5 * particleSpeed
        })

      if (particles.length) {
        let max = numParticlesInferred

        if (numParticlesInferred > particles.length) {
          max = particles.length

          const diff = numParticlesInferred - particles.length
          for (let i = 0; i < diff; ++i) {
            particles.push(createParticle())
          }
        } else {
          particles = particles.slice(0, numParticlesInferred)
        }

        for (let i = 0; i < max; ++i) {
          const p = particles[i]
          if (!p) continue
          p.x = (p.x * width) / p.width
          p.y = (p.y * height) / p.height
          p.width = width
          p.height = height
        }
      } else {
        for (let i = 0; i < numParticlesInferred; ++i) {
          particles.push(createParticle())
        }
      }
    }

    function tick() {
      update()
      draw()

      tickRafRef.current = requestAnimationFrame(tick)
    }

    reset()
    tick()

    window.addEventListener('resize', reset)

    return () => {
      if (tickRafRef.current) {
        cancelAnimationFrame(tickRafRef.current)
      }

      window.removeEventListener('resize', reset)
    }
  }, [
    canvasRef,
    interactive,
    numParticles,
    lineWidth,
    particleRadius,
    particleSpeed,
    color,
    background
  ])

  return <canvas ref={canvasRef} className={cn('w-full h-full', className)} />
}
