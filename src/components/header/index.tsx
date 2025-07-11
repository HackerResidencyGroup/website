import { ActiveLink } from '@/components/active-link'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
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
          <ActiveLink href='/about' className='link whitespace-nowrap'>
            About
          </ActiveLink>

          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
