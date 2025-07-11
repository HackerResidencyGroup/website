'use client'

import Image, { type ImageProps } from 'next/image'
import HeroImage from '@/public/da-nang-villa/hero.jpg'
import { forwardRef, useCallback, useEffect, useState } from 'react'
import gsap from 'gsap'
import raf from 'raf'
import { motion } from 'motion/react'

import ScrollTrigger from 'gsap/ScrollTrigger'
import Flip from 'gsap/Flip'
import SplitText from 'gsap/SplitText'

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    return <Image {...props} ref={ref} />
  }
)

const MotionImage = motion(ExoticImage)

export function HeroSection() {
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip, SplitText)

    if (isTransitioning) {
      return
    }

    function initFlipOnScroll() {
      const wrapperElements = document.querySelectorAll(
        "[data-flip-element='wrapper']"
      )
      const targetEl = document.querySelector("[data-flip-element='target']")

      let tl: gsap.core.Timeline
      let resizeRaf: ReturnType<typeof raf>

      function flipTimeline() {
        if (tl) {
          tl.kill()
          gsap.set(targetEl, { clearProps: 'all' })
        }

        // Use the first and last wrapper elements for the scroll trigger.
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperElements[0],
            start: 'center center',
            endTrigger: wrapperElements[wrapperElements.length - 1],
            end: 'center center',
            scrub: 0.25
          }
        })

        // Loop through each wrapper element.
        wrapperElements.forEach((element, index: number) => {
          const nextIndex = index + 1

          if (nextIndex < wrapperElements.length) {
            const nextWrapperEl = wrapperElements[nextIndex]! as HTMLElement
            // Calculate vertical center positions relative to the document.
            const nextRect = nextWrapperEl.getBoundingClientRect()
            const thisRect = element.getBoundingClientRect()
            const nextDistance =
              nextRect.top + window.pageYOffset + nextWrapperEl.offsetHeight / 2
            const thisDistance =
              thisRect.top +
              window.pageYOffset +
              (element as HTMLElement).offsetHeight / 2
            const offset = nextDistance - thisDistance

            // Add the Flip.fit tween to the timeline.
            tl.add(
              Flip.fit(targetEl, nextWrapperEl, {
                duration: offset,
                ease: 'none'
              }) as any
            )
          }
        })
      }

      window.addEventListener('resize', () => {
        raf.cancel(resizeRaf)
        resizeRaf = raf(flipTimeline)
      })

      flipTimeline()
    }

    // Initialize Scaling Elements on Scroll (GSAP Flip)
    initFlipOnScroll()
  }, [isTransitioning])

  useEffect(() => {
    if (!isTransitioning) {
      return
    }

    setTimeout(() => {
      setIsTransitioning(false)
    }, 410)
  }, [isTransitioning])

  return (
    <section className='relative flex flex-col gap-10 mb-16'>
      <div className='relative overflow-hidden w-full max-w-7xl'>
        <div className='relative min-h-[100vh] flex flex-col items-center justify-center'>
          <motion.h1
            className='text-center text-balance text-4xl md:text-6xl font-semibold max-w-3xl leading-normal mb-4'
            initial={{ opacity: 0.5, scale: 0, translateY: -30 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
              scale: { type: 'tween', visualDuration: 0.4 }
            }}
          >
            <span>An Experimental</span> <br />
            <span className='bg-foreground text-background px-2 md:px-4 py-2 rounded-md'>
              Hacker Residency
            </span>{' '}
            <br />
            <span>in Da Nang, Vietnam</span>
          </motion.h1>

          <motion.p
            className='text-center text-pretty text-md leading-normal mb-16 italic'
            initial={{ opacity: 0, scale: 0, translateY: -20 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.4,
              scale: { type: 'tween', visualDuration: 0.4 }
            }}
          >
            November 2025
          </motion.p>

          <div className='relative w-[20em] h-[20em]'>
            <div className='aspect-[1280/853]' />

            <motion.div
              data-flip-element='wrapper'
              className='absolute top-0 left-0 w-full h-full'
              initial={{ opacity: 0.5, scale: 0, translateY: -30 }}
              animate={{ opacity: 1, scale: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
                scale: { type: 'tween', visualDuration: 0.4 }
              }}
            >
              <div
                data-flip-element='target'
                className='absolute top-0 left-0 w-full h-full isolate will-change-transform transform-[translateX(0)_rotate(0.001deg)] flex flex-col items-center justify-center'
              >
                <MotionImage
                  src={HeroImage}
                  alt='Da Nang Villa'
                  className='w-full h-auto origin-top rounded-sm shadow-md object-cover'
                  placeholder='blur'
                  priority={true}
                  width={HeroImage.width}
                  height={HeroImage.height}
                  blurDataURL={HeroImage.blurDataURL}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className='relative flex flex-col items-center justify-center'>
          <div className='relative w-full'>
            <div className='aspect-[1280/853]' />

            <motion.div
              data-flip-element='wrapper'
              className='absolute top-0 left-0 w-full h-full'
              initial={{ opacity: 0.5, scale: 0, translateY: -30 }}
              animate={{ opacity: 1, scale: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
                scale: { type: 'tween', visualDuration: 0.4 }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
