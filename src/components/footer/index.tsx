import Link from 'next/link'

import { ActiveLink } from '@/components/active-link'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { Button } from '@/components/ui/button'
import { GitHubIcon } from '@/icons/github'
import { TwitterIcon } from '@/icons/twitter'
import { githubUrl, twitterUrl } from '@/lib/config'
import { cn } from '@/lib/utils'

import styles from './styles.module.css'

export function Footer() {
  return (
    <footer
      className={cn(
        'w-full py-4 border-t flex flex-col items-center',
        styles.footer
      )}
    >
      <div className='container px-4 sm:px-6 max-w-[1200px]'>
        <nav className='flex flex-row gap-8 justify-between items-center'>
          <div className='flex flex-row gap-8 items-center'>
            <ActiveLink href='/' className='link'>
              Home
            </ActiveLink>

            <ActiveLink href='/apply' className='link'>
              Apply
            </ActiveLink>

            <ActiveLink href='/faq' className='link'>
              FAQ
            </ActiveLink>
          </div>

          <div className='flex flex-row justify-end items-center gap-4'>
            <DarkModeToggle />

            <Button variant='outline' size='icon' asChild>
              <Link href={githubUrl} target='_blank' rel='noopener noreferrer'>
                <GitHubIcon className='w-4 h-4' />
              </Link>
            </Button>

            <Button variant='outline' size='icon' asChild>
              <Link href={twitterUrl} target='_blank' rel='noopener noreferrer'>
                <TwitterIcon className='w-4 h-4' />
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </footer>
  )
}
