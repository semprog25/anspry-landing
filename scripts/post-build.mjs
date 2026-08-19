import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const distDir = join(process.cwd(), 'dist')
const indexPath = join(distDir, 'index.html')
const fallbackPath = join(distDir, '404.html')

if (!existsSync(indexPath)) {
  console.error('post-build: dist/index.html not found — run vite build first')
  process.exit(1)
}

copyFileSync(indexPath, fallbackPath)
console.log('post-build: copied index.html → 404.html for GitHub Pages SPA routing')
