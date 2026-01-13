import { NotionBlock } from '@/components/notion-block'
import { AnimatedGradientBackground } from '@/components/ui/animated-gradient-background'
import { notion } from '@/lib/notion'

// cache the notion content for up to 10 minutes
export const revalidate = 600

export default async function FAQPage() {
  // https://transitive-bs.notion.site/HRG-FAQ-230edb27f12480fcb35eee4891841c04
  const pageId = '230edb27f12480fcb35eee4891841c04'
  const recordMap = await notion.getPage(pageId)

  return (
    <>
      <AnimatedGradientBackground className='opacity-50' />

      <div className='relative z-10 flex flex-col gap-8 max-w-full'>
        <h2 className='text-center text-balance font-semibold text-3xl font-heading'>
          FAQ
        </h2>

        <NotionBlock recordMap={recordMap} rootPageId={pageId} />
      </div>
    </>
  )
}
