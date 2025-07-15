import Image from 'next/image'
import Link from 'next/link'

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

export default function PeoplePage() {
  return (
    <div className='min-h-screen px-4 py-16'>
      <div className='max-w-4xl mx-auto space-y-16'>
        {/* Header */}
        <div className='text-center space-y-4'>
          <h1 className='text-4xl md:text-5xl tracking-tight'>Team</h1>

          <p className='text-lg opacity-60'>
            Learn from builders who've done it.
          </p>
        </div>

        {/* Team Grid */}
        <div className='grid gap-16'>
          {people.map((person, index) => (
            <div key={index} className='group flex gap-8 items-start'>
              <div className='w-24 h-24 flex-shrink-0 overflow-hidden'>
                <Image
                  src={person.image}
                  alt={person.name}
                  width={96}
                  height={96}
                  className='object-cover shadow-sm cursor-pointer rounded-full grayscale-100 group-hover:grayscale-0'
                  priority
                />
              </div>

              <div className='space-y-3'>
                <h2 className='text-2xl'>{person.name}</h2>

                <p className='opacity-60 leading-relaxed'>
                  {person.description}
                </p>

                <div className='flex gap-4'>
                  {person.twitter && (
                    <a
                      href={person.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='opacity-60 hover:opacity-100 transition-opacity text-sm'
                    >
                      X
                    </a>
                  )}

                  {person.github && (
                    <a
                      href={person.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='opacity-60 hover:opacity-100 transition-opacity text-sm'
                    >
                      GitHub
                    </a>
                  )}

                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='opacity-60 hover:opacity-100 transition-opacity text-sm'
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What We Look For */}
        <div className='border-t border-[theme(--color-border)] pt-12'>
          <h2 className='text-2xl mb-8 text-center'>What We Look For?</h2>
          <div className='grid sm:grid-cols-2 gap-6'>
            <div>
              <h3 className='text-lg mb-3'>Technical Excellence</h3>
              <p className='opacity-60 leading-relaxed'>
                Strong engineering skills with the ability to build and ship
                products quickly.
              </p>
            </div>

            <div>
              <h3 className='text-lg mb-3'>Entrepreneurial Spirit</h3>
              <p className='opacity-60 leading-relaxed'>
                Track record of building projects, startups, or side projects.
                Bias for action.
              </p>
            </div>

            <div>
              <h3 className='text-lg mb-3'>Clear Vision</h3>
              <p className='opacity-60 leading-relaxed'>
                Know what you want to build and why. Have a plan for the month.
              </p>
            </div>

            <div>
              <h3 className='text-lg mb-3'>Growth Mindset</h3>
              <p className='opacity-60 leading-relaxed'>
                Open to feedback, eager to learn, and ready to help others
                succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Apply CTA */}
        <div className='text-center pt-8'>
          <p className='mb-6'>Ready to join us?</p>

          <Link
            href='/apply'
            className='inline-block px-8 py-3 bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity'
          >
            Apply
          </Link>
        </div>
      </div>
    </div>
  )
}
