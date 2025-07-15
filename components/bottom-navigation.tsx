'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Location', href: '/location' },
  { name: 'Team', href: '/team' },
  { name: 'FAQ', href: '/faq' }
]

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-t'>
      <div className='max-w-screen-md mx-auto px-4'>
        <ul className='flex justify-around py-4'>
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm transition-opacity',
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
