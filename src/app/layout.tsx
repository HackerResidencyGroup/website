import './globals.css'
import 'react-notion-x/src/styles.css'
// Notion style overrides should come after the react-notion-x styles
import './notion.css'
import 'react-photo-view/dist/react-photo-view.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Geist } from 'next/font/google'
import { Toaster } from 'sonner'

import { Bootstrap } from '@/components/bootstrap'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import * as config from '@/lib/config'

import Providers from './providers'

const geist = Geist({
  variable: '--font-geist',
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
      <body className={`${geist.variable} antialiased`}>
        <Providers>
          <div className='relative w-full min-h-[100vh] flex flex-col items-center'>
            <Header />

            <main className='relative w-full flex-1 flex flex-col items-center gap-16 md:gap-32 pt-8 pb-16 px-2 overflow-hidden'>
              {children}
            </main>

            <Toaster richColors duration={5000} />
            <Footer />
          </div>

          <Analytics />
          <Bootstrap />
        </Providers>
      </body>
    </html>
  )
}
