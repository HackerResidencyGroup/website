'use client'

import Image, { type StaticImageData } from 'next/image'
import { useRef } from 'react'
import { PhotoView } from 'react-photo-view'

import { Card } from '@/components/card'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import Villa0 from '@/public/da-nang-villa-legos/0.jpg'
import Villa1 from '@/public/da-nang-villa-legos/1.jpg'
import Villa2 from '@/public/da-nang-villa-legos/6.jpg'
import Villa3 from '@/public/da-nang-villa-legos/7.jpg'

import { useAnimatedStoryText } from './home/animated-story-text'
import { CTASection } from './home/cta-section'
import { HeroSection } from './home/hero-section'
import { LocationSection } from './home/location-section'
import { TeamSection } from './home/team-section'

export default function TheBestDamnLandingPageEver() {
  return (
    <>
      <AnimatedGradientBackground />

      <HeroSection />

      <StorySectionIntro />

      <TeamSection />

      <StorySectionWhat />

      <StorySectionPricing />

      <StorySectionWhy />

      <LocationSection />

      <CTASection />
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
          for 6 weeks at a dope villa in SE Asia.
        </p>

        <p>
          April 21<span className='text-sm align-super'>st</span> – May 31
          <span className='text-sm align-super'>st</span>, 2026
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
          A stunning 12-bedroom villa with pool, workspace, and ocean views.
        </p>

        <p>Fully equipped for focused work.</p>
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl'>
        <FeaturedPhoto image={Villa0} />
        <FeaturedPhoto image={Villa1} />
        <FeaturedPhoto image={Villa2} />
        <FeaturedPhoto image={Villa3} />
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
        <p>We don't take any equity or rev share.</p>

        <p>You only need to pay for your flights.</p>

        <p>
          We cover the villa, food, laundry, a professional videographer, and
          even your very own personal assistant for the month.
        </p>

        <p>
          And at the end of the batch, we optionally invest up to $100k in
          funding for the top teams.
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

function FeaturedPhoto({
  image,
  alt = 'Da Nang Villa'
}: {
  image: StaticImageData
  alt?: string
}) {
  return (
    <Card>
      <PhotoView src={image.src}>
        <Image
          src={image.src}
          alt={alt}
          placeholder='blur'
          width={image.width}
          height={image.height}
          blurDataURL={image.blurDataURL}
          className='rounded-3xl shadow-sm cursor-pointer'
        />
      </PhotoView>
    </Card>
  )
}
