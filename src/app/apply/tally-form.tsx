'use client'

import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  let Tally: any
}

export function TallyForm() {
  useEffect(() => {
    const load = () => {
      // Load Tally embeds
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds()
        return
      }

      // Fallback if window.Tally is not available
      for (const iframeEl of document.querySelectorAll<HTMLIFrameElement>(
        'iframe[data-tally-src]:not([src])'
      )) {
        iframeEl.src = iframeEl.dataset.tallySrc!
      }
    }

    // If Tally is already loaded, load the embeds
    if (typeof Tally !== 'undefined') {
      load()
      return
    }
  }, [])

  return (
    <>
      <iframe
        data-tally-src='https://tally.so/embed/nGEE0L?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
        loading='lazy'
        width='100%'
        height='2622'
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        className='w-full dark:rounded-lg dark:shadow-lg p-4 dark:bg-white'
        title='Da Nang Hacker Residency'
      />

      <Script
        src='https://tally.so/widgets/embed.js'
        onLoad={() => Tally.loadEmbeds()}
      />
    </>
  )
}
