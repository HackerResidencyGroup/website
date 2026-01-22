'use client'

import createGlobe from 'cobe'
import { useEffect, useRef, useState } from 'react'
import { useSpring } from 'react-spring'

import { useTheme } from '@/app/hooks/use-theme'
import { cn } from '@/lib/utils'

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark'
  const [isMounted, setIsMounted] = useState(false)

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001
    }
  }))

  // Set mounted state after initial render
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Don't run on server or before mount
    if (globalThis.window === undefined || !isMounted) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    // Use requestAnimationFrame to ensure canvas is fully rendered
    const initGlobe = () => {
      const width = canvas.offsetWidth

      // Don't create globe if canvas has no size yet
      if (width === 0) {
        // Retry on next frame
        requestAnimationFrame(initGlobe)
        return
      }

      // Check if canvas can create a WebGL context
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) {
        console.warn('WebGL not supported, globe will not be rendered')
        return
      }

      const devicePixelRatio = window.devicePixelRatio || 1
      const phi = 2.8

      try {
        globeRef.current = createGlobe(canvas, {
          devicePixelRatio,
          width: width * devicePixelRatio,
          height: width * devicePixelRatio,
          phi,
          theta: 0.3,
          dark: 0,
          diffuse: 3,
          mapSamples: 16_000,
          mapBrightness: 1.2,
          baseColor: [1, 1, 1],
          markerColor: [251 / 255, 100 / 255, 21 / 255],
          glowColor: [1, 1, 1],
          markers: [{ location: [16.0545, 108.0717], size: 0.1 }],
          onRender: (state) => {
            state.phi = phi + r.get()
            state.width = canvas.offsetWidth * devicePixelRatio
            state.height = canvas.offsetWidth * devicePixelRatio
          }
        })

        // Fade in the canvas
        setTimeout(() => {
          if (canvas) {
            canvas.style.opacity = '1'
          }
        }, 100)
      } catch (err) {
        console.warn('Failed to create globe:', err)
      }
    }

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(initGlobe)
    }, 100)

    const onResize = () => {
      // Globe handles resize internally via onRender
    }

    window.addEventListener('resize', onResize)

    return () => {
      clearTimeout(timeoutId)
      if (globeRef.current) {
        globeRef.current.destroy()
        globeRef.current = null
      }
      window.removeEventListener('resize', onResize)
    }
  }, [isMounted, r, isDarkMode])

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        'w-full aspect-square max-w-md cursor-grab active:cursor-grabbing opacity-0 transition-opacity duration-1000 ease-out contain-layout',
        className
      )}
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
  )
}
