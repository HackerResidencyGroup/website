'use client'

import Script from 'next/script'

declare global {
  let Tally: { loadEmbeds(): void }
}

export default function ApplyPage() {
  return (
    <div className='w-full min-h-screen py-16'>
      <div className='flex flex-col items-center gap-8'>
        <h1 className='text-center text-4xl md:text-5xl tracking-tight'>
          Application Form
        </h1>

        {/* Tally Form Embed */}
        <div className='w-full flex flex-col items-center max-w-3xl'>
          <iframe
            data-tally-src='https://tally.so/embed/nGEE0L?alignLeft=1&hideTitle=1&dynamicHeight=1'
            width='100%'
            height='2622'
            className='w-full dark:rounded-xl dark:shadow-lg p-8 dark:bg-white overflow-hidden'
            title='Apply to the Da Nang Hacker Residency'
          />

          <Script
            src='https://tally.so/widgets/embed.js'
            onLoad={() => Tally.loadEmbeds()}
          />
        </div>
      </div>
    </div>
  )
}
