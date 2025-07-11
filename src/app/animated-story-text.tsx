'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { type RefObject, useEffect } from 'react'

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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText)

    function initSplitOnScroll() {
      if (!ref.current) return

      new SplitText(ref.current, {
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
    }

    initSplitOnScroll()
  }, [ref, scrollStart, scrollEnd, fadedValue, staggerValue])
}
