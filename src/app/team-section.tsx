import Image from 'next/image'
import Link from 'next/link'

import { GitHubIcon } from '@/icons/github'
import { LinkedInIcon } from '@/icons/linkedin'
import { TwitterIcon } from '@/icons/twitter'
import David from '@/public/people/david.jpg'
import Phuc from '@/public/people/phuc.jpg'
import Tony from '@/public/people/tony.jpg'
import Travis from '@/public/people/travis.jpg'

const people = [
  {
    name: 'Travis Fischer',
    image: Travis,
    url: 'https://x.com/transitive_bs',
    twitter: 'https://x.com/transitive_bs',
    github: 'https://github.com/transitive-bullshit',
    linkedin: 'https://linkedin.com/in/fisch2',
    description: (
      <>
        Founder of{' '}
        <Link href='https://agentic.so' target='_blank' className='link'>
          Agentic
        </Link>
        . 2 exits. Prev{' '}
        <Link href='https://hf0.com' target='_blank' className='link'>
          HF0
        </Link>
        , Microsoft Research, and Amazon.
      </>
    )
  },
  {
    name: 'Tony Dinh',
    image: Tony,
    url: 'https://x.com/tdinh_me',
    twitter: 'https://x.com/tdinh_me',
    github: 'https://github.com/trungdq88',
    linkedin: 'https://www.linkedin.com/in/tdinh-me/',
    description: (
      <>
        Making over $1M ARR solo while building{' '}
        <Link href='https://typingmind.com' target='_blank' className='link'>
          typingmind.com
        </Link>{' '}
        and{' '}
        <Link href='https://devutils.com' target='_blank' className='link'>
          devutils.com
        </Link>
        .
      </>
    )
  },
  {
    name: 'Minh-Phuc Tran',
    image: Phuc,
    url: 'https://x.com/phuctm97',
    twitter: 'https://x.com/phuctm97',
    github: 'https://github.com/phuctm97',
    linkedin: 'https://www.linkedin.com/in/phuctm97/',
    description: (
      <>
        Built 8 startups in 12 months • Sold 3/8 startups • Building{' '}
        <Link href='https://modelfetch.com' target='_blank' className='link'>
          modelfetch.com
        </Link>
        ,{' '}
        <Link href='https://pdfvector.com' target='_blank' className='link'>
          pdfvector.com
        </Link>
        ,{' '}
        <Link href='https://filefaker.com' target='_blank' className='link'>
          filefaker.com
        </Link>
        ,{' '}
        <Link href='https://sparknamer.com' target='_blank' className='link'>
          sparknamer.com
        </Link>
        ,{' '}
        <Link href='https://hey-menu.com' target='_blank' className='link'>
          hey-menu.com
        </Link>
        , and a secret startup 🤫.
      </>
    )
  },
  {
    name: 'David Park',
    image: David,
    url: 'https://x.com/dayonefoundry',
    twitter: 'https://x.com/dayonefoundry',
    github: 'https://github.com/davidvypark',
    linkedin: 'https://www.linkedin.com/in/david-park-69587844/',
    description: (
      <>
        Built Raya & Kippo and then 120 other apps you&apos;ve never heard of
        because they failed.{' '}
        <Link
          href='https://www.nomadsocial.app'
          target='_blank'
          className='link'
        >
          Nomad Social
        </Link>{' '}
        now live on iOS and Android.
      </>
    )
  }
]

export function TeamSection() {
  return (
    <section className='relative z-10 flex flex-col gap-16 mb-16' id='team'>
      <h2 className='text-center text-balance text-4xl font-semibold leading-normal max-w-3xl'>
        Led by world-class hackers
      </h2>

      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4'>
        {people.map((person) => (
          <div
            key={person.name}
            className='group justify-self-center w-full grid grid-cols-1 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-w-xs'
          >
            <div className='grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5'>
              <div className='rounded-3xl bg-card p-6 shadow-2xl ring-1 ring-black/5 flex flex-col gap-4 color-card-foreground items-center'>
                <Link
                  href={person.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={person.image.width}
                    height={person.image.height}
                    blurDataURL={person.image.blurDataURL}
                    placeholder='blur'
                    className='rounded-full w-24 h-24 border-2 border-muted-foreground hover:border-foreground shadow-sm'
                  />
                </Link>

                <h3 className='text-center text-balance text-xl font-semibold leading-normal max-w-3xl'>
                  {person.name}
                </h3>

                <div className='flex flex-row gap-4 items-center'>
                  <Link
                    href={person.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-card-foreground transition-colors'
                  >
                    <TwitterIcon className='w-4 h-4' />
                  </Link>

                  {person.github && (
                    <Link
                      href={person.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-card-foreground transition-colors'
                    >
                      <GitHubIcon className='w-4 h-4' />
                    </Link>
                  )}

                  {person.linkedin && (
                    <Link
                      href={person.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-card-foreground transition-colors'
                    >
                      <LinkedInIcon className='w-4 h-4' />
                    </Link>
                  )}
                </div>

                <p className='text-center text-pretty text-sm leading-normal'>
                  {person.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
