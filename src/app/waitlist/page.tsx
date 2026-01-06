import type { Metadata } from 'next'

import { TallyForm } from '@/components/tally-form'

export const metadata: Metadata = {
  title: 'Apply for Batch 1.0 | HRG'
}

export default function WaitlistPage() {
  return (
    <section className='relative z-10 w-full flex flex-col gap-8 max-w-3xl flex-1 justify-center'>
      <h2 className='text-center text-balance font-semibold text-3xl font-heading'>
        Apply for Batch 1.0
      </h2>

      <p className='text-center text-muted-foreground text-lg'>
        Join 10 ambitious founders for 6 weeks in Southeast Asia.
      </p>

      <TallyForm tallyId='kddyr1' title='Apply for Batch 1.0' />
    </section>
  )
}
