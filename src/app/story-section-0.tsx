'use client'

import { useRef } from 'react'

import { useAnimatedStoryText } from './animated-story-text'

export function StorySection0() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative flex flex-col gap-10 mb-16'>
      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl'
      >
        Imagine spending a month in a dope villa in SE Asia. <br />
        Surrounded by 10 world-class hackers who're serious about taking their
        startups to the next level...
      </h3>
    </section>
  )
}
