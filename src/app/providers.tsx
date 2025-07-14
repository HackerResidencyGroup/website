'use client'

import { PhotoProvider } from 'react-photo-view'

import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      disableTransitionOnChange
    >
      <PhotoProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </PhotoProvider>
    </ThemeProvider>
  )
}
