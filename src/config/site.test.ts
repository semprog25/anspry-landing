import { describe, expect, it } from 'vitest'
import { CANONICAL_ORIGIN, PUBLIC_PAGES, canonicalUrl } from '@/config/site'

describe('canonicalUrl', () => {
  it('returns root canonical with trailing slash', () => {
    expect(canonicalUrl('/')).toBe('https://anspry.de/')
  })

  it('returns path canonical without double slashes', () => {
    expect(canonicalUrl('/privacy')).toBe('https://anspry.de/privacy')
  })

  it('never uses GitHub Pages or localhost', () => {
    for (const page of PUBLIC_PAGES) {
      const url = canonicalUrl(page.path)
      expect(url.startsWith(CANONICAL_ORIGIN)).toBe(true)
      expect(url).not.toContain('github.io')
      expect(url).not.toContain('localhost')
    }
  })
})
