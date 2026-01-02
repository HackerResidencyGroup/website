import { cn } from '@/lib/utils'

export function DotBackground({
  children,
  className
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative w-full', className)}>
      {/* Dot pattern */}
      <div
        className='pointer-events-none absolute inset-0 -z-10 opacity-50'
        style={{
          backgroundImage: 'radial-gradient(#c4c4c4 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      />
      {children}
    </div>
  )
}
