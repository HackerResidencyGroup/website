import Link from 'next/link'

import { ActiveLink } from '@/components/active-link'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { moreInfoUrl } from '@/lib/config'
import { cn } from '@/lib/utils'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={cn(styles.header, 'shadow-sm')}>
      <div className={styles.headerContent}>
        <ActiveLink className='select-none' href='/'>
          <img
            src='/hrg-logo-light.svg'
            alt='HRG'
            className='w-[130px] dark:hidden'
          />
          <img
            src='/hrg-logo-dark.svg'
            alt='HRG'
            className='w-[130px] hidden dark:block'
          />
        </ActiveLink>

        <div className='flex justify-end items-center h-full gap-4'>
          <Link
            href={moreInfoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='link whitespace-nowrap'
          >
            More Info
          </Link>

          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
