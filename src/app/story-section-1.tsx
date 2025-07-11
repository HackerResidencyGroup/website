'use client'

import { useRef } from 'react'

import { useAnimatedStoryText } from './animated-story-text'

export function StorySection1() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative flex flex-col gap-16 mb-16'>
      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl'
      >
        And the best part is it's 100% free.
        <br />
        You only need to pay for your flights. We cover the luxury villa, food,
        laundry, and a personal assistant for the month.
      </h3>
    </section>
  )
}
