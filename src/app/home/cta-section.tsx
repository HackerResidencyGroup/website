'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

import { HeroButton } from '@/components/hero-button'
// import { twitterUrl } from '@/lib/config'

export function CTASection() {
  return (
    <>
      {/* CTA section */}
      <section className='relative z-10 flex flex-col gap-8 pb-16 items-center'>
        <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
          Sounds cool, right?
        </h2>

        {/* <motion.h3
          className='text-center text-balance text-2xl leading-normal max-w-3xl'
          initial={{ opacity: 0.5, scale: 0, translateY: -30 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{
            duration: 0.15,
            scale: { type: 'tween', visualDuration: 0.15 }
          }}
        >
          Applications are now closed for our November 2025 batch in Vietnam,
          but follow us on X for updates on the next batch!
        </motion.h3>

        <HeroButton heroVariant='red'>
          <Link href={twitterUrl} target='_blank' rel='noopener noreferrer'>
            Follow the journey on X
          </Link>
        </HeroButton> */}

        {/* <motion.h3
          className='text-center text-balance text-2xl leading-normal max-w-3xl'
          initial={{ opacity: 0.5, scale: 0, translateY: -30 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{
            duration: 0.15,
            scale: { type: 'tween', visualDuration: 0.15 }
          }}
        >
          Join the waitlist for the next batch coming April 2026 which we'll be
          announcing soon!
        </motion.h3>

        <HeroButton heroVariant='red'>
          <Link href='/apply'>Get notified for the next batch</Link>
        </HeroButton> */}

        <motion.h3
          className='text-center text-balance text-2xl leading-normal max-w-3xl'
          initial={{ opacity: 0.5, scale: 0, translateY: -30 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{
            duration: 0.15,
            scale: { type: 'tween', visualDuration: 0.15 }
          }}
        >
          Apply to come build with us!
        </motion.h3>

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
          April 21st – June 1st, 2026
        </motion.p>

        <HeroButton heroVariant='orange'>
          <Link href='/apply'>Apply Now</Link>
        </HeroButton>
      </section>
    </>
  )
}
