'use client'

import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import Image from 'next/image'
import raf from 'raf'
import { useEffect, useRef } from 'react'

import HeroImage from '@/public/da-nang-villa/hero.jpg'

gsap.registerPlugin(ScrollTrigger, Flip)

export function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const wrapperRef2 = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef<HTMLDivElement | null>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const resizeRafRef = useRef<number | null>(null)

  useEffect(() => {
    function initFlipOnScroll() {
      if (!wrapperRef.current || !wrapperRef2.current || !targetRef.current) {
        return
      }

      const wrapperElements = [wrapperRef.current, wrapperRef2.current]
      const targetEl = targetRef.current

      function flipTimeline() {
        if (tlRef.current) {
          tlRef.current.kill()
          gsap.set(targetEl, { clearProps: 'all' })
        }

        // Use the first and last wrapper elements for the scroll trigger.
        tlRef.current = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperElements[0],
            start: 'center center',
            // eslint-disable-next-line unicorn/prefer-at
            endTrigger: wrapperElements[wrapperElements.length - 1],
            end: 'center center',
            scrub: 0.25
          }
        })

        // Loop through each wrapper element.
        for (const [index, element] of wrapperElements.entries()) {
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
            tlRef.current.add(
              Flip.fit(targetEl, nextWrapperEl, {
                duration: offset,
                ease: 'none'
              }) as any
            )
          }
        }
      }

      window.addEventListener('resize', () => {
        if (resizeRafRef.current) {
          raf.cancel(resizeRafRef.current)
        }

        resizeRafRef.current = raf(flipTimeline)
      })

      flipTimeline()
    }

    // Initialize Scaling Elements on Scroll (GSAP Flip)
    initFlipOnScroll()
  }, [wrapperRef, wrapperRef2, targetRef])

  return (
    <section className='relative z-10 flex flex-col gap-10 mb-0 md:mb-16'>
      <div className='relative overflow-hidden w-full max-w-7xl'>
        <div className='relative min-h-[70vh] md:min-h-[100vh] flex flex-col items-center justify-center'>
          <motion.h1
            className='text-center text-balance text-4xl md:text-6xl font-semibold max-w-3xl leading-normal mb-4 p-4 bg-transparent'
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
              duration: 0.4,
              scale: { type: 'tween', visualDuration: 0.4 }
            }}
          >
            November 2025
          </motion.p>

          <motion.div
            className='block md:hidden'
            initial={{ opacity: 0.5, scale: 0, translateY: -30 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
              scale: { type: 'tween', visualDuration: 0.4 }
            }}
          >
            <Image
              src={HeroImage}
              alt='Da Nang Villa'
              className='w-full h-auto origin-top rounded-sm shadow-md'
              placeholder='blur'
              priority={true}
              width={HeroImage.width}
              height={HeroImage.height}
              blurDataURL={HeroImage.blurDataURL}
            />
          </motion.div>

          <div className='hidden md:block relative w-[20em] h-[20em]'>
            <div className='aspect-[1280/853]' />

            <div
              ref={wrapperRef}
              className='absolute top-0 left-0 w-full h-full'
            >
              <div
                ref={targetRef}
                className='absolute top-0 left-0 w-full h-full isolate will-change-transform transform-[translateY(0)] flex flex-col items-center justify-center'
              >
                <Image
                  src={HeroImage}
                  alt='Da Nang Villa'
                  className='w-full h-auto origin-top rounded-sm shadow-md'
                  placeholder='blur'
                  priority={true}
                  width={HeroImage.width}
                  height={HeroImage.height}
                  blurDataURL={HeroImage.blurDataURL}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='hidden md:flex relative flex-col items-center justify-center'>
          <div className='relative w-full'>
            <div className='aspect-[1280/853]' />

            <div
              ref={wrapperRef2}
              className='absolute top-0 left-0 w-full h-full'
            />

            <div className='w-full text-center text-sm italic pt-8 text-muted-foreground'>
              (this is the actual villa you'll be staying in)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
