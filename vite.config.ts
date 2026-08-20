import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

/**
 * GitHub Pages project site: /anspry-landing/
 * Custom domain (anspry.de): set VITE_BASE_PATH=/ at deploy time
 */
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/anspry-landing/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/motion') || id.includes('framer-motion'))
            return 'motion'
          if (id.includes('node_modules/lucide-react')) return 'icons'
        },
      },
    },
  },
})
