'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from 'motion/react'
import { type RefObject, useRef } from 'react'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

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
  const splitRef = useRef<SplitType | null>(null)
  const ctxRef = useRef<gsap.Context | null>(null)
  const isInView = useInView(ref)

  // There was a weird bug on mobile where the scroll trigger offsets would
  // sometimes be off, which is why we're refreshing the animation whenever
  // the target ref comes into or out of the viewport.
  useGSAP(
    () => {
      if (!ref.current) return

      function refreshAnimation(chars: HTMLElement[] | null) {
        ctxRef.current?.revert()

        if (!chars || chars.length === 0) return

        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              scrub: true,
              trigger: ref.current,
              start: scrollStart,
              end: scrollEnd
            }
          })

          tl.from(chars, {
            autoAlpha: fadedValue,
            stagger: staggerValue,
            ease: 'linear'
          })
        })

        ctxRef.current = ctx
        return ctx
      }

      // Clean up previous split if exists
      if (splitRef.current) {
        splitRef.current.revert()
      }

      // Create new split
      splitRef.current = new SplitType(ref.current, {
        types: 'words,chars'
      })

      refreshAnimation(splitRef.current.chars)

      return () => {
        ctxRef.current?.revert()
        splitRef.current?.revert()
        ctxRef.current = null
        splitRef.current = null
      }
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
