import Link from 'next/link'

import { ActiveLink } from '@/components/active-link'
import { GitHubIcon } from '@/icons/github'
import { githubUrl } from '@/lib/config'
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
      <div className='container px-4 sm:px-6 max-w-1200px'>
        <nav className='flex flex-row gap-8 justify-center'>
          <ActiveLink href='/' className='link'>
            Home
          </ActiveLink>

          <ActiveLink href='/apply' className='link'>
            Apply
          </ActiveLink>

          <ActiveLink href='/faq' className='link'>
            FAQ
          </ActiveLink>

          <Link
            href={githubUrl}
            className='link whitespace-nowrap flex flex-row gap-2 items-center'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon className='w-4 h-4' />

            <span>GitHub</span>
          </Link>
        </nav>
      </div>
    </footer>
  )
}
