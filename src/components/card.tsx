import { cn } from '@/lib/utils'

export function Card({
  children,
  className,
  innerClassName
}: {
  children: React.ReactNode
  className?: string
  innerClassName?: string
}) {
  return (
    <div
      className={cn(
        'rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 ',
        className
      )}
    >
      <div className='grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5'>
        <div
          className={cn(
            'rounded-3xl bg-card shadow-2xl ring-1 ring-black/5 color-card-foreground',
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
