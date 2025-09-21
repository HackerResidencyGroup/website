'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { PhotoView } from 'react-photo-view'

import { HeroButton } from '@/components/hero-button'
import { RaycastAnimatedBackground } from '@/components/ui/raycast-animated-background'
// import { ParticleAnimation } from '@/components/particle-animation'
import Villa0 from '@/public/da-nang-villa/0.jpg'
import Villa1 from '@/public/da-nang-villa/1.jpg'
import Villa2 from '@/public/da-nang-villa/4.jpg'
import Villa3 from '@/public/da-nang-villa/8.jpg'

import { useAnimatedStoryText } from './animated-story-text'
import { HeroSection } from './hero-section'
import { LocationSection } from './location-section'
import { TeamSection } from './team-section'

export default function TheBestDamnLandingPageEver() {
  return (
    <>
      {/* <ParticleAnimation
        className='fixed top-0 left-0 bottom-0 right-0 opacity-50'
        particleSpeed={0.5}
      /> */}

      <RaycastAnimatedBackground />

      <HeroSection />

      <StorySectionIntro />

      <TeamSection />

      <StorySectionWhat />

      <StorySectionPricing />

      <StorySectionWhy />

      <LocationSection />

      <SponsorSection />

      {/* CTA section */}
      <section className='relative z-10 flex flex-col gap-8 pb-16 items-center'>
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

        <HeroButton heroVariant='orange'>
          <Link href='/apply'>Apply Now</Link>
        </HeroButton>
      </section>
    </>
  )
}

function StorySectionIntro() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative z-10 flex flex-col gap-10 mb-16'>
      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl flex flex-col gap-4'
      >
        <p>
          We're inviting 10 ambitious founders to come live and build with us
          for an entire month at a dope villa in SE Asia.
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
        The villa
      </h2>

      <h3
        ref={ref}
        className='text-center text-balance text-2xl leading-normal max-w-3xl flex flex-col gap-4'
      >
        <p>
          A stunning 10-bedroom villa with pool, workspace, and ocean views.
          Located 5 minutes from the beach and 15 minutes from the city center.
        </p>

        <p>Fully equipped for focused work.</p>
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl'>
        <PhotoView src={Villa0.src}>
          <Image
            src={Villa0.src}
            alt='Da Nang Villa'
            placeholder='blur'
            width={Villa0.width}
            height={Villa0.height}
            blurDataURL={Villa0.blurDataURL}
            className='rounded-sm shadow-sm cursor-pointer'
          />
        </PhotoView>

        <PhotoView src={Villa1.src}>
          <Image
            src={Villa1.src}
            alt='Da Nang Villa'
            placeholder='blur'
            width={Villa1.width}
            height={Villa1.height}
            blurDataURL={Villa1.blurDataURL}
            className='rounded-sm shadow-sm cursor-pointer'
          />
        </PhotoView>

        <PhotoView src={Villa2.src}>
          <Image
            src={Villa2.src}
            alt='Da Nang Villa'
            placeholder='blur'
            width={Villa2.width}
            height={Villa2.height}
            blurDataURL={Villa2.blurDataURL}
            className='rounded-sm shadow-sm cursor-pointer'
          />
        </PhotoView>

        <PhotoView src={Villa3.src}>
          <Image
            src={Villa3.src}
            alt='Da Nang Villa'
            placeholder='blur'
            width={Villa3.width}
            height={Villa3.height}
            blurDataURL={Villa3.blurDataURL}
            className='rounded-sm shadow-sm cursor-pointer'
          />
        </PhotoView>
      </div>
    </section>
  )
}

function StorySectionPricing() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  useAnimatedStoryText(ref)

  return (
    <section className='relative z-10 flex flex-col gap-12 mb-16'>
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
        className='text-center text-balance text-2xl leading-normal max-w-3xl flex flex-col gap-6'
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

function SponsorSection() {
  return (
    <section className='relative z-10 flex flex-col gap-12 mb-16 px-4'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        Sponsors
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-16 dark:hidden'>
        <Link href='https://coderabbit.ai' target='_blank'>
          <img
            src='/sponsors/coderabbit-light.svg'
            alt='CodeRabbit'
            className='w-full'
          />
        </Link>

        <Link href=' https://openrouter.ai/?referral=hrg' target='_blank'>
          <img
            src='/sponsors/openrouter-light.svg'
            alt='OpenRouter'
            className='w-full'
          />
        </Link>

        <Link href='https://n8n.io' target='_blank'>
          <img src='/sponsors/n8n-light.svg' alt='N8N' className='w-full' />
        </Link>
      </div>

      <div className='grid-cols-1 md:grid-cols-2 max-w-4xl gap-16 hidden dark:grid'>
        <Link href='https://coderabbit.ai' target='_blank'>
          <img
            src='/sponsors/coderabbit-dark.svg'
            alt='CodeRabbit'
            className='w-full'
          />
        </Link>

        <Link href='https://openrouter.ai/?referral=hrg' target='_blank'>
          <img
            src='/sponsors/openrouter-dark.svg'
            alt='OpenRouter'
            className='w-full'
          />
        </Link>

        <Link href='https://n8n.io' target='_blank'>
          <img src='/sponsors/n8n-dark.svg' alt='N8N' className='w-full' />
        </Link>
      </div>
    </section>
  )
}
