import { NotionAPI } from 'notion-client'

import { NotionBlock } from './notion-block'

const notion = new NotionAPI()

// cache the notion content for up to 10 minutes
export const revalidate = 600

export default async function AboutPage() {
  // https://transitive-bs.notion.site/Da-Nang-Hacker-Residency-1feedb27f1248050b005d65de79d151c
  const pageId = '1feedb27f1248050b005d65de79d151c'
  const recordMap = await notion.getPage(pageId)

  return (
    <>
      <div className='flex flex-col gap-8'>
        <h2 className='text-center text-balance font-semibold text-3xl font-heading'>
          About
        </h2>

        <NotionBlock recordMap={recordMap} rootPageId={pageId} />
      </div>
    </>
  )
}
