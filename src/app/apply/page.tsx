import type { Metadata } from 'next'

import { TallyForm } from '@/components/tally-form'
import { RaycastAnimatedBackground } from '@/components/ui/raycast-animated-background'

export const metadata: Metadata = {
  title: 'HRG S26 Application'
}

const tallyId = 'J9dRbd'

export default function ApplyPage() {
  return (
    <>
      <RaycastAnimatedBackground />

      <section className='relative z-10 w-full flex flex-col gap-8 max-w-3xl flex-1 justify-center '>
        <h2 className='text-center text-balance font-semibold text-3xl font-heading'>
          HRG 2026 Application
        </h2>

        <TallyForm tallyId={tallyId} title='HRG 2026 Application' />
      </section>
    </>
  )
}
