'use client'

import Image from 'next/image'
import Link from 'next/link'

import { BlurFade } from '@/components/ui/blur-fade'

export function HeroSection() {
  return (
    <section className='relative z-10 flex flex-col items-center justify-center min-h-screen gap-6 px-4'>
      {/* Background Images - Split top/bottom */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        {/* Top half */}
        <div className='absolute inset-x-0 top-0 h-1/2'>
          <Image
            src='/da-nang-villa/hero.jpg'
            alt='Villa exterior'
            fill
            priority
            className='object-cover object-center'
          />
        </div>
        {/* Bottom half */}
        <div className='absolute inset-x-0 bottom-0 h-1/2'>
          <Image
            src='/da-nang-villa/legos/HRG0.jpg'
            alt='Villa interior'
            fill
            priority
            className='object-cover object-center'
          />
        </div>
        {/* Overlay for text readability */}
        <div className='absolute inset-0 bg-black/50' />
      </div>

      <BlurFade delay={0.05}>
        <span className='text-center text-7xl md:text-9xl font-bold tracking-tighter text-white'>
          HRG
        </span>
      </BlurFade>

      <BlurFade delay={0.15}>
        <h1 className='text-center text-balance text-3xl md:text-5xl font-medium tracking-tight leading-[1.2] text-white/90'>
          A residency for ambitious hackers
        </h1>
      </BlurFade>

      <BlurFade delay={0.25}>
        <p className='text-center text-white/70 text-lg md:text-xl max-w-md'>
          Applications now open for batch 1.0 starting in April 2026
        </p>
      </BlurFade>

      <BlurFade delay={0.35}>
        <Link
          href='/apply'
          className='mt-4 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-white rounded-full shadow-xl hover:bg-white/90 transition-all hover:scale-105'
        >
          Apply Now
        </Link>
      </BlurFade>
    </section>
  )
}
