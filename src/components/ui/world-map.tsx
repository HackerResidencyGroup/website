'use client'

import DottedMap from 'dotted-map'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string }
    end: { lat: number; lng: number; label?: string }
  }>
  lineColor?: string
  className?: string
}

const projectPoint = (lat: number, lng: number) => {
  // Equirectangular projection for world map
  // X: longitude maps linearly from -180° to +180° across width of 800
  const x = (lng + 180) * (800 / 360)

  // Y: latitude mapping adjusted for typical world map bounds
  // Most world maps show approximately 85°N to -60°S (145° range)
  // instead of full -90° to +90° (180° range)
  const latRange = 145 // degrees
  const topLat = 85 // northern bound
  const y = (topLat - lat) * (400 / latRange)

  return { x, y }
}

const createCurvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number }
) => {
  const midX = (start.x + end.x) / 2
  const midY = Math.min(start.y, end.y) - 50
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
}

const map = new DottedMap({ height: 100, grid: 'diagonal' })
const svgMap = map.getSVG({
  radius: 0.22,
  color: '#00000040',
  shape: 'circle',
  backgroundColor: 'white'
})

export function WorldMap({
  dots = [],
  lineColor = '#0ea5e9',
  className
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div
      className={cn(
        'w-full aspect-[2/1] rounded-3xl font-sans bg-white p-2',
        className
      )}
    >
      <div className='relative h-full w-full'>
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className='h-full w-full mask-[linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none overflow-hidden'
          alt='world map'
          width='1600'
          height='800'
          draggable={false}
        />

        {isMounted && (
          <svg
            ref={svgRef}
            viewBox='0 0 800 400'
            className='w-full h-full absolute inset-0 pointer-events-none select-none'
          >
            {dots.map((dot, i) => {
              const startPoint = projectPoint(dot.start.lat, dot.start.lng)
              const endPoint = projectPoint(dot.end.lat, dot.end.lng)

              return (
                <g key={`path-group-${i}`}>
                  <motion.path
                    d={createCurvedPath(startPoint, endPoint)}
                    fill='none'
                    stroke='url(#path-gradient)'
                    strokeWidth='1'
                    initial={{
                      pathLength: 0
                    }}
                    animate={{
                      pathLength: 1
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.25 * i,
                      ease: 'easeOut'
                    }}
                    key={`start-upper-${i}`}
                  ></motion.path>
                </g>
              )
            })}

            <defs>
              <linearGradient
                id='path-gradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop offset='0%' stopColor='white' stopOpacity='0' />
                <stop offset='5%' stopColor={lineColor} stopOpacity='1' />
                <stop offset='95%' stopColor={lineColor} stopOpacity='1' />
                <stop offset='100%' stopColor='white' stopOpacity='0' />
              </linearGradient>
            </defs>

            {dots.map((dot, i) => (
              <g key={`points-group-${i}`}>
                <g key={`start-${i}`}>
                  <circle
                    cx={projectPoint(dot.start.lat, dot.start.lng).x}
                    cy={projectPoint(dot.start.lat, dot.start.lng).y}
                    r='2'
                    fill={lineColor}
                  />
                  <circle
                    cx={projectPoint(dot.start.lat, dot.start.lng).x}
                    cy={projectPoint(dot.start.lat, dot.start.lng).y}
                    r='2'
                    fill={lineColor}
                    opacity='0.5'
                  >
                    <animate
                      attributeName='r'
                      from='2'
                      to='8'
                      dur='1.5s'
                      begin='0s'
                      repeatCount='indefinite'
                    />
                    <animate
                      attributeName='opacity'
                      from='0.5'
                      to='0'
                      dur='1.5s'
                      begin='0s'
                      repeatCount='indefinite'
                    />
                  </circle>
                </g>

                <g key={`end-${i}`}>
                  <circle
                    cx={projectPoint(dot.end.lat, dot.end.lng).x}
                    cy={projectPoint(dot.end.lat, dot.end.lng).y}
                    r='2'
                    fill={lineColor}
                  />
                  <circle
                    cx={projectPoint(dot.end.lat, dot.end.lng).x}
                    cy={projectPoint(dot.end.lat, dot.end.lng).y}
                    r='2'
                    fill={lineColor}
                    opacity='0.5'
                  >
                    <animate
                      attributeName='r'
                      from='2'
                      to='8'
                      dur='1.5s'
                      begin='0s'
                      repeatCount='indefinite'
                    />
                    <animate
                      attributeName='opacity'
                      from='0.5'
                      to='0'
                      dur='1.5s'
                      begin='0s'
                      repeatCount='indefinite'
                    />
                  </circle>
                </g>
              </g>
            ))}
          </svg>
        )}
      </div>
    </div>
  )
}
