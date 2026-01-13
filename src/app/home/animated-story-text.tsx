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
  const splitRef = useRef<any | null>(null)
  const ctxRef = useRef<any | null>(null)
  const isInView = useInView(ref)

  // There was a weird bug on mobile where the scroll trigger offsets would
  // sometimes be off, which is why we're refreshing the animation whenever
  // the target ref comes into or out of the viewport.
  useGSAP(
    () => {
      if (!ref.current) return

      function refreshAnimation(splitText: SplitText) {
        ctxRef.current?.revert()

        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              scrub: true,
              trigger: ref.current,
              start: scrollStart,
              end: scrollEnd
            }
          })

          tl.from(splitText.chars, {
            autoAlpha: fadedValue,
            stagger: staggerValue,
            ease: 'linear'
          })
        })

        ctxRef.current = ctx
        return ctx
      }

      if (splitRef.current) {
        refreshAnimation(splitRef.current)
      } else {
        splitRef.current = new SplitText(ref.current, {
          type: 'words, chars',
          autoSplit: true,
          onSplit(self) {
            refreshAnimation(self)
          }
        })
      }

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
