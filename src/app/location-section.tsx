'use client'

import Link from 'next/link'
import { useRef } from 'react'

import { Globe } from '@/components/globe'

import { useAnimatedStoryText } from './animated-story-text'

export function LocationSection() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative flex flex-col gap-12 mb-16'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        Why Vietnam?
      </h2>

      <h3
        ref={ref}
        className='text-center text-pretty text-2xl leading-normal max-w-3xl'
      >
        Da Nang, Vietnam is a beautiful city right on the beach that's super
        accessible and relatively cheap. We chose it for our first batch because{' '}
        <Link href='https://x.com/tdinh_me' target='_blank' className='link'>
          Tony
        </Link>{' '}
        and{' '}
        <Link
          href='https://x.com/dayonefoundry'
          target='_blank'
          className='link'
        >
          David
        </Link>{' '}
        both happen to live there. 😉 But it's also legit one of the best cities
        in the world for digital nomads.
      </h3>

      <Globe />
    </section>
  )
}
