'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

import { cn } from '@/lib/utils'

const demoImages = [
  { src: '/demo-day/Demo1.jpg', alt: 'Demo day presentation' },
  { src: '/demo-day/Demo2.jpg', alt: 'Demo day audience' },
  { src: '/demo-day/Demo3.jpg', alt: 'Demo day networking' },
  { src: '/demo-day/Demo4.jpg', alt: 'Demo day celebration' }
]

export function DemoDaySection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className='relative z-10 flex flex-col items-center justify-center gap-12 py-24 md:py-32 px-4'>
      <h2 className='text-center text-balance text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl'>
        Culminating in a private demo day
      </h2>
      <p className='text-center text-muted-foreground text-lg md:text-xl max-w-2xl'>
        Share your work to an exclusive audience of investors, founders, and
        industry leaders.
      </p>

      <PhotoProvider maskOpacity={0.6} bannerVisible={false}>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full'>
          {demoImages.map((image, index) => (
            <PhotoView key={image.src} src={image.src}>
              <motion.div
                className='relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-100 cursor-pointer'
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                animate={{
                  scale: hovered === index ? 1.05 : 1,
                  opacity: hovered !== null && hovered !== index ? 0.7 : 1
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes='(max-width: 768px) 50vw, 25vw'
                  quality={90}
                  className={cn(
                    'object-cover transition-transform duration-700 ease-out',
                    hovered === index && 'scale-110'
                  )}
                />
              </motion.div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  )
}
