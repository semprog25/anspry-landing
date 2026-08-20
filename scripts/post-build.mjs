import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const distDir = join(process.cwd(), 'dist')
const indexPath = join(distDir, 'index.html')
const fallbackPath = join(distDir, '404.html')

/** SPA routes that must return HTTP 200 on static hosts (not soft-404 via 404.html). */
const spaRoutes = ['privacy', 'terms', 'support', 'download', 'about']

if (!existsSync(indexPath)) {
  console.error('post-build: dist/index.html not found — run vite build first')
  process.exit(1)
}

copyFileSync(indexPath, fallbackPath)
console.log('post-build: copied index.html → 404.html for GitHub Pages SPA routing')

for (const route of spaRoutes) {
  const routeDir = join(distDir, route)
  mkdirSync(routeDir, { recursive: true })
  copyFileSync(indexPath, join(routeDir, 'index.html'))
  console.log(`post-build: copied index.html → ${route}/index.html`)
}
