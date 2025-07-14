'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { useRef } from 'react'

import { DotsSection } from '@/components/dots-section'
import { HeroButton } from '@/components/hero-button'

import { useAnimatedStoryText } from './animated-story-text'
import { HeroSection } from './hero-section'
import { LocationSection } from './location-section'
import { TeamSection } from './team-section'

export default function TheBestDamnLandingPageEver() {
  return (
    <>
      <HeroSection />

      <StorySectionIntro />

      <TeamSection />

      <StorySectionWhat />

      <StorySectionPricing />

      <StorySectionWhy />

      <LocationSection />

      {/* CTA section */}
      <DotsSection className='flex flex-col gap-12 pb-16 items-center'>
        <motion.h2
          className='text-center text-balance text-3xl font-heading leading-relaxed'
          initial={{ opacity: 0.5, scale: 0, translateY: -30 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{
            duration: 0.15,
            scale: { type: 'tween', visualDuration: 0.15 }
          }}
        >
          Sounds cool?
          <br />
          Apply to come build with us!
        </motion.h2>

        <motion.p
          className='text-center text-pretty text-md leading-normal italic'
          initial={{ opacity: 0, scale: 0, translateY: -20 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.15,
            scale: { type: 'tween', visualDuration: 0.15 }
          }}
        >
          November 1st – 30th, 2025
        </motion.p>

        <HeroButton>
          <Link href='/apply'>Apply Now</Link>
        </HeroButton>
      </DotsSection>
    </>
  )
}

function StorySectionIntro() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative flex flex-col gap-10 mb-16'>
      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl flex flex-col gap-4'
      >
        <p>
          We're inviting 10 ambitious founders to come live and build with us
          for an entire month at a dope villa in SE Asia.
        </p>

        <p>
          If you're an experienced developer / founder / hacker and are looking
          to take your startup game to the next level in style, this program's
          for you.
        </p>

        <p>
          November 1<span className='text-sm align-super'>st</span> – 30
          <span className='text-sm align-super'>th</span>, 2025.
        </p>
      </h3>
    </section>
  )
}

function StorySectionWhat() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative flex flex-col gap-12 mb-16'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        A new type of residency
      </h2>

      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl flex flex-col gap-4'
      >
        <p>
          This is a new type of experimental hacker residency – inspired by{' '}
          <Link
            href='https://x.com/HF0'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            HF0
          </Link>{' '}
          – and our first batch will be this November in Vietnam.
        </p>

        <p>
          We'll provide mentorship, weekly demos to push the pace, and a mini
          demo day at the end of the month.
        </p>

        <p>
          We'll also take care of all the daily stuff like
          food/laundry/cleaning, so you can focus exclusively on building cool
          shit.
        </p>
      </h3>
    </section>
  )
}

function StorySectionPricing() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative flex flex-col gap-12 mb-16'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        And the best part is it's 100% free
      </h2>

      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl flex flex-col gap-4'
      >
        <p>We don't take any equity or revenue share.</p>

        <p>You only need to pay for your flights.</p>

        <p>
          We cover the villa, food, laundry, a professional videographer, and
          even your very own personal assistant for the month.
        </p>
      </h3>
    </section>
  )
}

function StorySectionWhy() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative flex flex-col gap-12 mb-16'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        Wait, why are we doing this <span className='italic'>for free</span>?
      </h2>

      <h3
        ref={ref}
        className='text-center text-pretty text-2xl leading-normal max-w-3xl flex flex-col gap-6'
      >
        <p>We're doing this as an experiment with a few goals in mind:</p>

        <div className='flex flex-col gap-4'>
          <p>1. Shine an spotlight on the indie hacker lifestyle 🔥</p>

          <p>
            2. Build a new type of international dev community focused on more
            ambitious digital nomads
          </p>

          <p>3. Make friends, vibe, and learn from each other! 🤙</p>
        </div>
      </h3>
    </section>
  )
}
