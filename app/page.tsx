import Link from 'next/link'

export default function Home() {
  return (
    <div className='relative flex-1 flex flex-col items-center justify-center px-8 gap-8'>
      {/* Hero Section */}
      <div className='max-w-2xl mx-auto text-center flex flex-col items-center gap-8'>
        <h1 className='text-center text-balance text-4xl md:text-5xl font-semibold max-w-3xl leading-normal bg-transparent'>
          <span>An Experimental</span> <br />
          <span className='bg-foreground text-background px-2 md:px-4 py-2 rounded-md'>
            Hacker Residency
          </span>{' '}
          <br />
          <span>in Da Nang, Vietnam</span>
        </h1>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm opacity-60'>
          <span>10 Founders</span>
          <span className='hidden sm:inline'>•</span>
          <span>1 Month</span>
          <span className='hidden sm:inline'>•</span>
          <span>100% Free</span>
        </div>

        <p className='text-lg opacity-60'>November 2025</p>

        <Link
          href='/apply'
          className='inline-block px-8 py-3 bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity'
        >
          Apply
        </Link>
      </div>
    </div>
  )
}
