/* eslint-disable no-process-env */
export const isServer = globalThis.window === undefined
export const isSafari =
  !isServer && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

export const title = 'Hacker Residency Group'
export const description =
  'A month-long residency program for world-class hackers in Da Nang, Vietnam. November 2025.'
export const domain =
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ??
  'hackerresidencygroup.com'

export const author = 'Travis Fischer'
export const authorTwitterUsername = 'HackerResidency'
export const copyright = `© ${new Date().getFullYear()} Hacker Residency Group. All rights reserved.`

// external urls
export const twitterUrl = `https://x.com/${authorTwitterUsername}`
export const githubUrl = 'https://github.com/HackerResidencyGroup/website'
export const moreInfoUrl =
  'https://transitive-bs.notion.site/Da-Nang-Hacker-Residency-1feedb27f1248050b005d65de79d151c'

export const authors = [
  {
    name: 'Travis Fischer',
    url: 'https://x.com/transitive_bs'
  },
  {
    name: 'Tony Dinh',
    url: 'https://x.com/tdinh_me'
  },
  {
    name: 'Minh-Phuc Tran',
    url: 'https://x.com/phuctm97'
  },
  {
    name: 'David Park',
    url: 'https://x.com/dayonefoundry'
  }
]

export const keywords = [
  'hacker residency',
  'hacker residency group',
  'hacker paradise',
  'indie hackers',
  'founders',
  'residency',
  'da nang',
  'vietnam',
  'HF0',
  'HF0 residency',
  'startup residency',
  'bootstrapping',
  'startup founders',
  'digital nomads'
]

export const env =
  process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.NODE_ENV ?? 'development'
export const isVercel = !!(
  process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.VERCEL
)
export const isDev = env === 'development' && !isVercel
export const isProd = env === 'production'
export const isTest = env === 'test'

export const port = process.env.PORT || '3000'
export const prodUrl = `https://${domain}`
export const baseUrl = isDev ? `http://localhost:${port}` : prodUrl
export const vercelUrl =
  process.env.VERCEL_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL
// export const webBaseUrl = isDev || !vercelUrl ? baseUrl : `https://${vercelUrl}`
export const apiBaseUrl = process.env.NEXT_PUBLIC_AGENTIC_API_BASE_URL!
export const gatewayBaseUrl = process.env.NEXT_PUBLIC_AGENTIC_GATEWAY_BASE_URL!
