'use client'

import Link from 'next/link'

import { BlurFade } from '@/components/ui/blur-fade'
import { ShimmerButton } from '@/components/ui/shimmer-button'

export function CTASection() {
  return (
    <section className='relative z-10 flex flex-col items-center justify-center gap-8 py-24 md:py-32 px-4'>
      <BlurFade delay={0.1} inView>
        <h2 className='text-center text-balance text-3xl md:text-4xl font-semibold tracking-tight'>
          Ready to build something great?
        </h2>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <p className='text-center text-muted-foreground text-lg max-w-md'>
          Join 10 ambitious founders for 6 weeks of focused building in
          Southeast Asia.
        </p>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <Link href='/apply'>
          <ShimmerButton className='shadow-lg'>
            <span className='text-center text-sm md:text-base font-medium tracking-tight whitespace-pre-wrap text-white'>
              Apply Now
            </span>
          </ShimmerButton>
        </Link>
      </BlurFade>
    </section>
  )
}
