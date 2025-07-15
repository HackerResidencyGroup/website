import './globals.css'
import 'react-notion-x/src/styles.css'
// Notion style overrides should come after the react-notion-x styles
import './notion.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'

import { AnimatedBackground } from '@/components/animated-background'
import { Bootstrap } from '@/components/bootstrap'
import { BottomNavigation } from '@/components/bottom-navigation'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import * as config from '@/lib/config'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  authors: config.authors,
  metadataBase: new URL(config.prodUrl),
  keywords: config.keywords,
  openGraph: {
    title: config.title,
    description: config.description,
    siteName: config.title,
    locale: 'en_US',
    type: 'website',
    url: config.prodUrl
  },
  twitter: {
    card: 'summary_large_image',
    creator: `@${config.authorTwitterUsername}`,
    title: config.title,
    description: config.description
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <div className='relative z-0 w-full'>
            <Header />
            <main className='min-h-screen pb-20 w-full flex flex-col items-center gap-8'>
              {children}
            </main>
            <BottomNavigation />
          </div>

          <Analytics />
          <Bootstrap />
        </ThemeProvider>
      </body>
    </html>
  )
}
