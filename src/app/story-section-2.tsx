'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'

import { useAnimatedStoryText } from './animated-story-text'

export function StorySection2() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative flex flex-col gap-16 mb-16'>
      <motion.h2
        className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'
        initial={{ opacity: 0.5, scale: 0, translateY: -30 }}
        whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{
          duration: 0.25,
          scale: { type: 'tween', visualDuration: 0.25 }
        }}
      >
        Wait, why the hell are we doing this{' '}
        <span className='italic'>for free</span>?
      </motion.h2>

      <h3
        ref={ref}
        className='text-center text-pretty text-2xl leading-normal max-w-3xl'
      >
        We're doing this as an experiment to shine a spotlight on the indie
        hacker lifestyle while building a new type of international developer
        community. We're not charging for the residency because we want to
        attract the absolute best developers around the world regardless of your
        financial situation.
      </h3>
    </section>
  )
}
