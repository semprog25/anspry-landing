import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const distDir = join(process.cwd(), 'dist')
const indexPath = join(distDir, 'index.html')
const fallbackPath = join(distDir, '404.html')
const canonicalOrigin = 'https://anspry.de'

/**
 * SPA routes that must return HTTP 200 on static hosts.
 * Each route gets its own index.html with crawler-correct meta/canonical
 * (not the homepage defaults copied blindly).
 */
const spaRoutes = [
  {
    slug: 'privacy',
    title: 'Privacy Policy — Anspry',
    description:
      'How Anspry handles account data, documents on your device, voice input, authentication, analytics, and account deletion.',
  },
  {
    slug: 'terms',
    title: 'Terms of Service — Anspry',
    description:
      'Terms for using Anspry — claim assistance, user responsibilities, supported categories, and limitations.',
  },
  {
    slug: 'support',
    title: 'Support — Anspry',
    description: 'Get help with Anspry login, documents, claims, and account deletion.',
  },
  {
    slug: 'download',
    title: 'Get Anspry — Download',
    description:
      'Find what you’re owed. Public Google Play and App Store listings are not live yet. Internal and closed testing are in progress.',
  },
  {
    slug: 'about',
    title: 'About Anspry',
    description:
      'Anspry helps you find money you’re owed — refunds, compensation, and valid challenges across everyday problems.',
  },
]

const noscriptHome = `
<noscript>
  <main style="max-width:40rem;margin:2rem auto;padding:0 1rem;font-family:system-ui,sans-serif;line-height:1.5;color:#111">
    <h1>Anspry — Find what you're owed.</h1>
    <p>Anspry is a money-recovery and claim-assistance platform. Tell us what went wrong — we check whether you may be owed money, a refund, or compensation, and help you prepare honest next steps.</p>
    <p>Available now: train delays. More categories are rolling out as rules are verified.</p>
    <ul>
      <li><a href="${canonicalOrigin}/about/">About</a></li>
      <li><a href="${canonicalOrigin}/download/">Download</a></li>
      <li><a href="${canonicalOrigin}/support/">Support</a></li>
      <li><a href="${canonicalOrigin}/privacy/">Privacy</a></li>
      <li><a href="${canonicalOrigin}/terms/">Terms</a></li>
    </ul>
  </main>
</noscript>
`

if (!existsSync(indexPath)) {
  console.error('post-build: dist/index.html not found — run vite build first')
  process.exit(1)
}

function applyPageMeta(html, { title, description, canonicalPath }) {
  const canonical =
    canonicalPath === '/' ? `${canonicalOrigin}/` : `${canonicalOrigin}${canonicalPath}`
  let next = html
  next = next.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
  next = next.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeAttr(description)}" />`,
  )
  next = next.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonical}" />`,
  )
  next = next.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
  )
  next = next.replace(
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
  )
  next = next.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${canonical}" />`,
  )
  next = next.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
  )
  next = next.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
  )
  return next
}

function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function ensureNoscript(html) {
  if (html.includes('<noscript>')) return html
  return html.replace('<div id="root"></div>', `<div id="root"></div>${noscriptHome}`)
}

let homeHtml = readFileSync(indexPath, 'utf8')
homeHtml = ensureNoscript(homeHtml)
homeHtml = applyPageMeta(homeHtml, {
  title: "Anspry — Find what you're owed.",
  description:
    "Anspry is a money-recovery and claim-assistance platform. Find what you're owed — refunds, compensation, and valid challenges across everyday problems.",
  canonicalPath: '/',
})
writeFileSync(indexPath, homeHtml)
copyFileSync(indexPath, fallbackPath)
console.log('post-build: wrote index.html + 404.html with crawler noscript + home meta')

for (const route of spaRoutes) {
  const routeDir = join(distDir, route.slug)
  mkdirSync(routeDir, { recursive: true })
  const routeHtml = applyPageMeta(homeHtml, {
    title: route.title,
    description: route.description,
    canonicalPath: `/${route.slug}/`,
  })
  writeFileSync(join(routeDir, 'index.html'), routeHtml)
  console.log(`post-build: wrote ${route.slug}/index.html with canonical ${canonicalOrigin}/${route.slug}/`)
}
