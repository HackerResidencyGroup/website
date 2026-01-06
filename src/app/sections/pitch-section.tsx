'use client'

import { useRef } from 'react'

import { useAnimatedStoryText } from '../animated-story-text'

const offerings = [
  'Private 5-star bedroom with ensuite bathroom',
  'Private workstation',
  'Meals catered three times a day',
  'Full service cleaning and laundry services',
  'Group outings and dinners',
  'Mentorship and support from world-class founders',
  'The most productive and transformative six weeks of your life'
]

export function PitchSection() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative z-10 flex flex-col items-center justify-center gap-12 py-16 md:py-24 px-4'>
      <h2
        ref={ref}
        className='text-center text-balance text-2xl md:text-3xl leading-relaxed max-w-3xl text-foreground'
      >
        We're inviting 10 ambitious founders to come live and build with us for
        6 weeks in Southeast Asia.
      </h2>

      <div className='flex flex-col gap-4 max-w-xl'>
        {offerings.map((offering) => (
          <div key={offering} className='flex items-start gap-3'>
            <span className='text-primary mt-1'>✓</span>
            <span className='text-lg text-muted-foreground'>{offering}</span>
          </div>
        ))}
      </div>

      <p className='text-center text-3xl md:text-4xl font-bold text-foreground'>
        All for{' '}
        <span className='relative inline-block'>
          FREE
          <span className='absolute -bottom-1 left-0 w-full h-2 bg-primary rounded-full' />
        </span>
        .
      </p>
    </section>
  )
}
