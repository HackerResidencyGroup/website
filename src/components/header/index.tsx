import Link from 'next/link'

import { ActiveLink } from '@/components/active-link'
// import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { GitHubIcon } from '@/icons/github'
import { TwitterIcon } from '@/icons/twitter'
import { githubUrl, twitterUrl } from '@/lib/config'
import { cn } from '@/lib/utils'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={cn(styles.header, 'shadow-sm')}>
      <div className={styles.headerContent}>
        <Tooltip>
          <TooltipTrigger>
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
          </TooltipTrigger>

          <TooltipContent>
            <p>Made with 💕 by the Hacker Residency Group</p>
          </TooltipContent>
        </Tooltip>

        <div className='flex flex-row justify-end items-center h-full gap-8'>
          <ActiveLink href='/apply' className='link'>
            Apply
          </ActiveLink>

          <ActiveLink href='/faq' className='link'>
            FAQ
          </ActiveLink>

          <div className='flex flex-row justify-end items-center h-full gap-4'>
            {/* <DarkModeToggle /> */}

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
        </div>
      </div>
    </header>
  )
}
