'use client'

import { motion } from 'motion/react'

import { DotsSection } from '@/components/dots-section'
import { HeroButton } from '@/components/hero-button'

import { HeroSection } from './hero-section'
import { StorySection0 } from './story-section-0'
import { StorySection1 } from './story-section-1'
import { StorySection2 } from './story-section-2'
import { TeamSection } from './team-section'

export default function TheBestDamnLandingPageEver() {
  return (
    <>
      <HeroSection />

      <StorySection0 />

      <TeamSection />

      <StorySection1 />

      <StorySection2 />

      {/* CTA section */}
      <DotsSection className='flex flex-col gap-12 mb-16 items-center'>
        <motion.h2
          className='text-center text-balance leading-snug md:leading-none text-3xl font-heading'
          initial={{ opacity: 0.5, scale: 0, translateY: -30 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{
            duration: 0.25,
            scale: { type: 'tween', visualDuration: 0.25 }
          }}
        >
          Sound cool?
          <br />
          Come build with us!
        </motion.h2>

        <motion.p
          className='text-center text-pretty text-md leading-normal italic'
          initial={{ opacity: 0, scale: 0, translateY: -20 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.25,
            scale: { type: 'tween', visualDuration: 0.25 }
          }}
        >
          November 1st – 30th, 2025
        </motion.p>

        <HeroButton className='h-full'>
          <motion.div
            initial={{ opacity: 0, scale: 0, translateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.25,
              scale: { type: 'tween', visualDuration: 0.25 }
            }}
          >
            Applications Coming Soon
          </motion.div>
        </HeroButton>
      </DotsSection>
    </>
  )
}
