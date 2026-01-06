'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { ActiveLink } from '@/components/active-link'
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

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Change header style after scrolling past ~80% of viewport height (hero section)
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className='mx-auto max-w-[1200px] px-4 py-3 flex flex-row justify-between items-center'>
        <Tooltip>
          <TooltipTrigger>
            <ActiveLink className='select-none' href='/'>
              <img
                src={scrolled ? '/hrg-logo-light.svg' : '/hrg-logo-dark.svg'}
                alt='HRG'
                className='w-[130px] transition-opacity duration-300'
              />
            </ActiveLink>
          </TooltipTrigger>

          <TooltipContent>
            <p>Hacker Residency Group</p>
          </TooltipContent>
        </Tooltip>

        <div className='flex flex-row justify-end items-center h-full gap-8'>
          <ActiveLink
            href='/apply'
            className={cn(
              'font-medium transition-colors',
              scrolled
                ? 'text-foreground hover:text-foreground/80'
                : 'text-white hover:text-white/80'
            )}
          >
            Apply
          </ActiveLink>

          <ActiveLink
            href='/faq'
            className={cn(
              'font-medium transition-colors',
              scrolled
                ? 'text-foreground hover:text-foreground/80'
                : 'text-white hover:text-white/80'
            )}
          >
            FAQ
          </ActiveLink>

          <div className='flex flex-row justify-end items-center h-full gap-2'>
            <Button
              variant='ghost'
              size='icon'
              asChild
              className={cn(
                'transition-colors',
                scrolled
                  ? 'text-foreground hover:bg-muted'
                  : 'text-white hover:bg-white/10'
              )}
            >
              <Link href={githubUrl} target='_blank' rel='noopener noreferrer'>
                <GitHubIcon className='w-4 h-4' />
              </Link>
            </Button>

            <Button
              variant='ghost'
              size='icon'
              asChild
              className={cn(
                'transition-colors',
                scrolled
                  ? 'text-foreground hover:bg-muted'
                  : 'text-white hover:bg-white/10'
              )}
            >
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
