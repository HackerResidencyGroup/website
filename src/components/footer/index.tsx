import Link from 'next/link'

import { ActiveLink } from '@/components/active-link'
import { GitHubIcon } from '@/icons/github'
import { TwitterIcon } from '@/icons/twitter'
import { copyright, githubUrl, twitterUrl } from '@/lib/config'

export function Footer() {
  return (
    <footer className='w-full pt-12 pb-4 border-t flex flex-col items-center'>
      <div className='container px-4 sm:px-6 max-w-1200px'>
        <div className='flex flex-col sm:grid sm:grid-cols-2 gap-8'>
          <div className='flex flex-col sm:items-center'>
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold'>Platform</h3>

              <nav className='flex flex-col space-y-2'>
                <div>
                  <ActiveLink href='/' className='link'>
                    Home
                  </ActiveLink>
                </div>

                <div>
                  <ActiveLink href='/about' className='link'>
                    About
                  </ActiveLink>
                </div>
              </nav>
            </div>
          </div>

          <div className='flex flex-col sm:items-center gap-4'>
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold'>Social</h3>

              <nav className='flex flex-col gap-4'>
                <Link
                  href={twitterUrl}
                  className='flex items-center space-x-2'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <TwitterIcon className='h-4 w-4' />

                  <span>Twitter</span>
                </Link>

                <Link
                  href={githubUrl}
                  className='flex items-center space-x-2'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHubIcon className='h-4 w-4' />

                  <span>GitHub</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground'>
          <span>{copyright}</span>
        </div>
      </div>
    </footer>
  )
}
