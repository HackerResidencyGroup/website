import { DotBackground } from '@/components/ui/dot-background'

import { CTASection } from './sections/cta-section'
import { DemoDaySection } from './sections/demo-day-section'
import { HeroSection } from './sections/hero-section'
import { PitchSection } from './sections/pitch-section'
import { TeamSection } from './sections/team-section'
import { TestimonialsSection } from './sections/testimonials-section'
import { VillaSection } from './sections/villa-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DotBackground className='flex flex-col items-center'>
        <PitchSection />
        <TeamSection />
        <VillaSection />
        <DemoDaySection />
        <TestimonialsSection />
        <CTASection />
      </DotBackground>
    </>
  )
}
