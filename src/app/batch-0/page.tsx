'use client'

import Link from 'next/link'
import random from 'random'

import { Card } from '@/components/card'
import { HeroButton } from '@/components/hero-button'
import { RaycastAnimatedBackground } from '@/components/ui/raycast-animated-background'
import { WorldMap } from '@/components/ui/world-map'
import { cn } from '@/lib/utils'

const dots: Array<{
  start: { lat: number; lng: number; label?: string }
  end: { lat: number; lng: number; label?: string }
}> = random.shuffle([
  {
    start: { lat: 40.741_895, lng: -73.989_308 },
    end: { lat: 16.0544, lng: 108.2022 }
  },

  {
    start: { lat: 37.779_258_8, lng: -122.419_328_6 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 47.218_637_1, lng: -1.554_136_2 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 36.566_982_269_287_11, lng: 126.978_233_337_402_34 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 51.507_445_6, lng: -0.127_765_3 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 48.208_353_7, lng: 16.372_504_2 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 10.775_525_4, lng: 106.702_104_7 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 55.686_724_3, lng: 12.570_072_4 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 49.260_872_4, lng: -123.113_952 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: -8.650_619_3, lng: 115.136_500_7 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 15.300_454_3, lng: 74.085_513_4 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 33.875_062_9, lng: 35.843_409 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 38.725_177_6, lng: -105.607_716 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 13.752_493_8, lng: 100.493_508_9 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 21.028_333_4, lng: 105.854_041 },
    end: { lat: 16.0544, lng: 108.2022 }
  },
  {
    start: { lat: 6.269_732_4, lng: -75.602_559_7 },
    end: { lat: 16.0544, lng: 108.2022 }
  }
])

export default function Batch0Page() {
  return (
    <>
      <RaycastAnimatedBackground />

      <section className='relative z-10 w-full flex flex-col gap-8 max-w-3xl flex-1 justify-center '>
        <h2 className='text-center text-balance font-semibold text-3xl font-heading'>
          HRG Batch 0
        </h2>

        <div className='flex flex-col gap-2'>
          <p className='text-center text-pretty text-md leading-normal'>
            Da Nang, Vietnam
          </p>

          <p className='text-center text-pretty text-sm italic leading-normal'>
            November 1st – 30th, 2025
          </p>
        </div>

        <Card className='w-full'>
          <WorldMap dots={dots} />
        </Card>

        <HeroButton heroVariant='red'>
          <Link href='/'>stack.pop();</Link>
        </HeroButton>

        <SponsorSection />
      </section>
    </>
  )
}

function SponsorSection() {
  return (
    <section className='relative z-10 flex flex-col gap-12 mb-16 px-4'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        Sponsors
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-16 dark:hidden'>
        <Sponsor
          href='https://coderabbit.ai?from=hrg'
          src='/sponsors/coderabbit-light.svg'
          alt='CodeRabbit'
        />

        <Sponsor
          href=' https://openrouter.ai?referral=hrg'
          src='/sponsors/openrouter-light.svg'
          alt='OpenRouter'
        />

        <Sponsor
          href='https://n8n.io?from=hrg'
          src='/sponsors/n8n-light.svg'
          alt='N8N'
        />

        <Sponsor
          href='https://www.datahouse.com?from=hrg'
          src='/sponsors/datahouse-light.png'
          alt='Datahouse'
        />

        <Sponsor
          href='https://parallel.ai?from=hrg'
          src='/sponsors/parallel-light.svg'
          alt='Parallel.ai'
        />

        <Sponsor
          href='https://stainless.com?from=hrg'
          src='/sponsors/stainless-light.png'
          alt='Stainless'
        />

        <Sponsor
          href='https://cognition.ai?from=hrg'
          src='/sponsors/cognition-light.svg'
          alt='Cognition'
        />

        <Sponsor
          href='https://www.createanything.com/?via=HRG'
          src='/sponsors/anything-light.svg'
          alt='Anything'
        />

        <Sponsor
          href='https://exa.ai?from=hrg'
          src='/sponsors/exa-light.svg'
          alt='Exa'
          className='max-h-16'
        />
      </div>

      <div className='grid-cols-1 md:grid-cols-2 items-center max-w-4xl gap-16 hidden dark:grid'>
        <Sponsor
          href='https://coderabbit.ai?from=hrg'
          src='/sponsors/coderabbit-dark.svg'
          alt='CodeRabbit'
        />

        <Sponsor
          href=' https://openrouter.ai?referral=hrg'
          src='/sponsors/openrouter-dark.svg'
          alt='OpenRouter'
        />

        <Sponsor
          href='https://n8n.io?from=hrg'
          src='/sponsors/n8n-dark.svg'
          alt='N8N'
        />

        <Sponsor
          href='https://www.datahouse.com?from=hrg'
          src='/sponsors/datahouse-dark.png'
          alt='Datahouse'
        />

        <Sponsor
          href='https://parallel.ai?from=hrg'
          src='/sponsors/parallel-dark.svg'
          alt='Parallel.ai'
        />

        <Sponsor
          href='https://stainless.com?from=hrg'
          src='/sponsors/stainless-dark.png'
          alt='Stainless'
        />

        <Sponsor
          href='https://cognition.ai?from=hrg'
          src='/sponsors/cognition-dark.png'
          alt='Cognition'
        />

        <Sponsor
          href='https://www.createanything.com/?via=HRG'
          src='/sponsors/anything-dark.svg'
          alt='Anything'
        />

        <Sponsor
          href='https://exa.ai?from=hrg'
          src='/sponsors/exa-dark.svg'
          alt='Exa'
          className='max-h-16'
        />
      </div>
    </section>
  )
}

function Sponsor({
  href,
  src,
  alt,
  className
}: {
  href: string
  src: string
  alt: string
  className?: string
}) {
  return (
    <Link href={href} target='_blank'>
      <img src={src} alt={alt} className={cn('w-full max-h-24', className)} />
    </Link>
  )
}
