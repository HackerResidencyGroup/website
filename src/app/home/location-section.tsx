'use client'

import { useRef } from 'react'

import { Globe } from '@/components/globe'

import { useAnimatedStoryText } from './animated-story-text'

export function LocationSection() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative z-10 flex flex-col gap-12 mb-16'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        Why Vietnam?
      </h2>

      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl flex flex-col gap-4'
      >
        <p>
          Da Nang, Vietnam is legitimately one of the best digital nomad cities
          in the world.
        </p>

        <p>
          Beautiful beaches, delicious food, perfect weather, and a vibrant
          local culture.
        </p>

        <p>
          It's the perfect place to lock in and make 6 months of progress on
          your startup in 6 weeks!
        </p>
      </h3>

      <Globe />
    </section>
  )
}
