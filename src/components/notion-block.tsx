'use client'

import type { ExtendedRecordMap } from 'notion-types'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NotionRenderer } from 'react-notion-x'

import { useTheme } from '@/app/hooks/use-theme'
import * as config from '@/lib/config'

export function NotionBlock({
  recordMap,
  rootPageId
}: {
  recordMap: ExtendedRecordMap
  rootPageId: string
}) {
  const { resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  // TODO: prevent this FOUC
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isDarkMode = isMounted && resolvedTheme === 'dark'

  return (
    <NotionRenderer
      darkMode={isDarkMode}
      components={{
        nextLegacyImage: Image,
        nextLink: Link
      }}
      recordMap={recordMap}
      rootPageId={rootPageId}
      rootDomain={config.domain}
      fullPage={false}
      previewImages={!!recordMap.preview_images}
      showCollectionViewDropdown={false}
      showTableOfContents={false}
      className='max-w-full'
    />
  )
}
