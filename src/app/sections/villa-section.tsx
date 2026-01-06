'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

import { cn } from '@/lib/utils'

const villaCards = [
  {
    title: 'Pool & Outdoor Space',
    description: 'Infinity pool overlooking the beach',
    src: '/da-nang-villa/legos/HRG2.png'
  },
  {
    title: 'Private Living Spaces',
    description: 'Your own sanctuary to rest and recharge',
    src: '/da-nang-villa/legos/HRG3.png'
  },
  {
    title: 'Private en-suite Bathrooms',
    description: 'Modern amenities for your comfort',
    src: '/da-nang-villa/legos/HRG4.png'
  },
  {
    title: 'Shared Community Spaces',
    description: 'Where ideas and friendships form',
    src: '/da-nang-villa/legos/HRG5.png'
  }
]

export function VillaSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className='relative z-10 flex flex-col gap-12 py-16 md:py-24 px-4 w-full'>
      <h2 className='text-center text-balance text-3xl md:text-4xl font-semibold tracking-tight'>
        Where you'll live and work
      </h2>

      <p className='text-center text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto'>
        A stunning beachside villa in Da Nang, Vietnam.
      </p>

      <div className='flex items-center justify-center gap-8 md:gap-16'>
        <div className='text-center'>
          <span className='block text-4xl md:text-5xl font-bold text-foreground'>
            14
          </span>
          <span className='text-sm md:text-base text-muted-foreground uppercase tracking-widest'>
            Bedrooms
          </span>
        </div>
        <div className='w-px h-12 bg-border' />
        <div className='text-center'>
          <span className='block text-4xl md:text-5xl font-bold text-foreground'>
            18
          </span>
          <span className='text-sm md:text-base text-muted-foreground uppercase tracking-widest'>
            Bathrooms
          </span>
        </div>
      </div>

      <PhotoProvider maskOpacity={0.6} bannerVisible={false}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto w-full'>
          {villaCards.map((card, index) => (
            <PhotoView key={card.title} src={card.src}>
              <motion.div
                className={cn(
                  'relative rounded-2xl overflow-hidden h-72 md:h-[28rem] bg-gray-100 cursor-pointer',
                  'transition-all duration-500 ease-out'
                )}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                animate={{
                  scale: hovered === index ? 1.02 : 1,
                  opacity: hovered !== null && hovered !== index ? 0.6 : 1
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  quality={90}
                  className={cn(
                    'object-cover transition-transform duration-700 ease-out',
                    hovered === index && 'scale-110'
                  )}
                />

                {/* Gradient overlay */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent',
                    'transition-opacity duration-300',
                    hovered === index ? 'opacity-100' : 'opacity-0'
                  )}
                />

                {/* Content */}
                <div
                  className={cn(
                    'absolute bottom-0 left-0 right-0 p-6 text-white',
                    'transition-all duration-300 ease-out',
                    hovered === index
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  )}
                >
                  <h3 className='text-xl md:text-2xl font-semibold mb-1'>
                    {card.title}
                  </h3>
                  <p className='text-white/80 text-sm md:text-base'>
                    {card.description}
                  </p>
                </div>
              </motion.div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  )
}
