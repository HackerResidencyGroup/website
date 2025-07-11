import Link from 'next/link'

import { DotsSection } from '@/components/dots-section'
import { HeroButton } from '@/components/hero-button'
import { Button } from '@/components/ui/button'
import { moreInfoUrl } from '@/lib/config'

import { HeroSection } from './hero-section'
import { StorySection0 } from './story-section-0'
import { StorySection1 } from './story-section-1'
import { TeamSection } from './team-section'

export default function TheBestDamnLandingPageEver() {
  return (
    <>
      <HeroSection />

      <StorySection0 />

      <TeamSection />

      <StorySection1 />

      {/* CTA section */}
      <DotsSection className='flex flex-col gap-12 mb-16'>
        <h2 className='text-center text-balance leading-snug md:leading-none text-3xl font-heading'>
          Come build with us!
        </h2>

        <div className='flex justify-center items-center gap-4 sm:gap-8'>
          <HeroButton asChild className='h-full' disabled>
            <Link href='/marketplace'>Applications Coming Soon</Link>
          </HeroButton>

          <Button variant='outline' asChild className='h-full py-[9px]'>
            <Link href={moreInfoUrl}>More Info</Link>
          </Button>
        </div>
      </DotsSection>
    </>
  )
}
