'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { cn } from '@/lib/utils'

type Testimonial = {
  quote: string
  name: string
  designation: string
  src: string
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
  className
}: {
  testimonials: Testimonial[]
  autoplay?: boolean
  className?: string
}) {
  const [active, setActive] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Generate stable rotation values for each testimonial
  const rotations = useMemo(
    () => testimonials.map((_, i) => ((i * 7) % 21) - 10),
    [testimonials]
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const isActive = (index: number) => index === active

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay, handleNext])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={cn(
        'mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12',
        className
      )}
    >
      <div className='relative grid grid-cols-1 gap-20 md:grid-cols-2'>
        <div>
          <div className='relative h-80 w-full'>
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index]
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotations[index],
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations[index]
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut'
                  }}
                  className='absolute inset-0 origin-bottom'
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className='h-full w-full rounded-3xl object-cover object-center'
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className='flex flex-col justify-between py-4'>
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <h3 className='text-2xl font-bold text-foreground'>
              {testimonials[active].name}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {testimonials[active].designation}
            </p>
            <motion.p className='mt-8 text-lg text-muted-foreground'>
              {testimonials[active].quote.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    delay: 0.02 * index
                  }}
                  className='inline-block'
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className='flex gap-4 pt-12 md:pt-0'>
            <button
              onClick={handlePrev}
              className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'
            >
              <ArrowLeft className='h-5 w-5 text-foreground transition-transform duration-300 group-hover/button:rotate-12' />
            </button>
            <button
              onClick={handleNext}
              className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'
            >
              <ArrowRight className='h-5 w-5 text-foreground transition-transform duration-300 group-hover/button:-rotate-12' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
