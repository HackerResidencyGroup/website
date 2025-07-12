import { TallyForm } from './tally-form'

export default function ApplicationPage() {
  return (
    <section className='w-full flex flex-col gap-8 max-w-3xl'>
      <h2 className='text-center text-balance font-semibold text-3xl font-heading'>
        Application Form
      </h2>

      <TallyForm />
    </section>
  )
}
