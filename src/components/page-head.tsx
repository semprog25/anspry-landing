import { useEffect } from 'react'
import { CANONICAL_ORIGIN, SITE, canonicalUrl } from '@/config/site'

interface PageHeadProps {
  title?: string
  description?: string
  path: string
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== 'content') element!.setAttribute(key, value)
    })
    document.head.appendChild(element)
  }
  if (attributes.content) element.setAttribute('content', attributes.content)
}

function upsertLink(rel: string, href: string) {
  let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
}

export function PageHead({ title, description, path }: PageHeadProps) {
  const pageTitle = title ?? SITE.title
  const pageDescription = description ?? SITE.description
  const canonical = canonicalUrl(path)
  const ogImage = `${CANONICAL_ORIGIN}/anspry-logo-mark.png`

  useEffect(() => {
    document.title = pageTitle

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: pageDescription,
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow',
    })
    upsertMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: SITE.themeColor,
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: pageTitle,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: pageDescription,
    })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE.name,
    })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_GB' })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary',
    })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: pageDescription,
    })
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: ogImage,
    })

    upsertLink('canonical', canonical)
  }, [pageTitle, pageDescription, canonical, ogImage])

  return null
}
