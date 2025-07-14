'use client'
import createGlobe from 'cobe'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'
import { useSpring } from 'react-spring'

import { useAnimatedStoryText } from './animated-story-text'

export function LocationSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark'
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001
    }
  }))

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    const devicePixelRatio = window.devicePixelRatio
    const phi = 2.8
    let width = 0

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio,
      width: width * devicePixelRatio,
      height: width * devicePixelRatio,
      phi,
      theta: 0.3,
      dark: isDarkMode ? 0 : 1,
      diffuse: 3,
      mapSamples: 16_000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: isDarkMode ? [1.2, 1.2, 1.2] : [0.2, 0.2, 0.2],
      markers: [{ location: [16.0545, 108.0717], size: 0.1 }],
      onRender: (state) => {
        // This prevents rotation while dragging
        // if (!pointerInteracting.current) {
        //   // Called on every animation frame.
        //   // `state` will be an empty object, return updated params.
        //   phi += 0.005
        // }

        state.phi = phi + r.get()
        state.width = width * devicePixelRatio
        state.height = width * devicePixelRatio
        // console.log(state.phi)
      }
    })

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = '1'
      }
    })

    return () => {
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [canvasRef, r, isDarkMode])

  return (
    <section className='relative flex flex-col gap-12 mb-16'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        Why Vietnam?
      </h2>

      <h3
        ref={ref}
        className='text-center text-pretty text-2xl leading-normal max-w-3xl'
      >
        Da Nang, Vietnam is a beautiful city right on the beach that's super
        accessible and relatively cheap. We chose it for our first batch because{' '}
        <Link href='https://x.com/tdinh_me' target='_blank' className='link'>
          Tony
        </Link>{' '}
        and{' '}
        <Link
          href='https://x.com/dayonefoundry'
          target='_blank'
          className='link'
        >
          David
        </Link>{' '}
        both happen to live there. 😉 But it's also legit one of the best cities
        in the world for digital nomads.
      </h3>

      <canvas
        ref={canvasRef}
        className='w-full aspect-square max-w-md cursor-grab active:cursor-grabbing opacity-0 transition-opacity duration-1000 ease-out contain-layout'
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current
        }}
        onPointerUp={() => {
          pointerInteracting.current = null
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current) {
            const delta = e.clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            void api.start({ r: delta / 100 })
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            void api.start({ r: delta / 100 })
          }
        }}
      />
    </section>
  )
}
