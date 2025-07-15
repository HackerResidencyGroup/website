import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default:
          'bg-[theme(--color-primary)] text-[theme(--color-primary-foreground)] shadow-sm hover:opacity-90',
        destructive:
          'bg-[theme(--color-destructive)] text-[theme(--color-destructive-foreground)] shadow-sm hover:opacity-90',
        outline:
          'border border-[theme(--color-border)] bg-[theme(--color-background)] shadow-sm hover:bg-[theme(--color-accent)] hover:text-[theme(--color-accent-foreground)]',
        secondary:
          'bg-[theme(--color-secondary)] text-[theme(--color-secondary-foreground)] shadow-sm hover:opacity-80',
        ghost:
          'hover:bg-[theme(--color-accent)] hover:text-[theme(--color-accent-foreground)]',
        link: 'text-[theme(--color-primary)] underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 px-6 has-[>svg]:px-4',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
