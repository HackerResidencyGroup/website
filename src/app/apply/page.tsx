import { RaycastAnimatedBackground } from '@/components/ui/raycast-animated-background'

import { TallyForm } from './tally-form'

export default function ApplicationPage() {
  return (
    <>
      <RaycastAnimatedBackground />

      <section className='relative z-10 w-full flex flex-col gap-8 max-w-3xl flex-1 min-h-full justify-center md:justify-start'>
        <h2 className='text-center text-balance font-semibold text-3xl font-heading'>
          Application Form
        </h2>

        <TallyForm />
      </section>
    </>
  )
}
