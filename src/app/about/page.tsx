import { Markdown } from '@/components/markdown'

export default function AboutPage() {
  return (
    <div className='container flex flex-col gap-16'>
      <h1 className='text-center text-balance leading-snug md:leading-none text-4xl font-semibold'>
        About
      </h1>

      <section>
        <Markdown>
          <h2>TODO</h2>
        </Markdown>
      </section>
    </div>
  )
}
