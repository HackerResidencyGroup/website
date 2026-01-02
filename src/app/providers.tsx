'use client'

import { PhotoProvider } from 'react-photo-view'

import { TooltipProvider } from '@/components/ui/tooltip'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PhotoProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </PhotoProvider>
  )
}
