'use client'

import { useEffect, useState } from 'react'
import { UnicornScene } from 'unicornstudio-react/next'

import { useTheme } from '@/app/hooks/use-theme'
import { cn } from '@/lib/utils'

export const useWindowSize = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: globalThis.window !== undefined ? window.innerWidth : 0,
    height: globalThis.window !== undefined ? window.innerHeight : 0
  })

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
      return
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [isMounted])

  return windowSize
}

export function AnimatedGradientBackground({
  className
}: {
  className?: string
} = {}) {
  const { width, height } = useWindowSize()
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark'

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
      return
    }
  }, [isMounted])

  if (!isMounted) {
    return null
  }

  return (
    <div
      className={cn(
        'fixed top-0 left-0 bottom-0 right-0 flex flex-col items-center opacity-80',
        className
      )}
    >
      <UnicornScene
        production={true}
        jsonFilePath={`/animations/gradient-${isDarkMode ? 'dark' : 'light'}.json`}
        width={width}
        height={height}
      />
    </div>
  )
}
