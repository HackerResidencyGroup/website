'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useInView } from 'motion/react'
import { type RefObject, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

export function useAnimatedStoryText(
  ref: RefObject<HTMLHeadingElement | null>,
  {
    scrollStart = 'top 70%',
    scrollEnd = 'center 30%',
    fadedValue = 0.2,
    staggerValue = 0.1
  }: {
    scrollStart?: string
    scrollEnd?: string
    fadedValue?: number
    staggerValue?: number
  } = {}
) {
  const animationRef = useRef<any | null>(null)
  const isInView = useInView(ref)

  useGSAP(
    () => {
      if (!ref.current) return
      animationRef.current?.revert()

      // Ensure fonts are loaded before splitting
      const split = new SplitText(ref.current, {
        type: 'words, chars',
        autoSplit: true,
        onSplit(self) {
          const ctx = gsap.context(() => {
            const tl = gsap.timeline({
              scrollTrigger: {
                scrub: true,
                trigger: ref.current,
                start: scrollStart,
                end: scrollEnd
              }
            })

            tl.from(self.chars, {
              autoAlpha: fadedValue,
              stagger: staggerValue,
              ease: 'linear'
            })
          })

          // return our animations so GSAP can clean them up when onSplit fires
          return ctx
        }
      })

      animationRef.current = split
      return () => split.revert()
    },
    {
      scope: ref,
      dependencies: [
        ref,
        scrollStart,
        scrollEnd,
        fadedValue,
        staggerValue,
        isInView
      ]
    }
  )
}
