import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  /** Pre-bundle Sonner so the dev server doesn’t serve stale optimize-dep URLs after installs. */
  optimizeDeps: {
    include: ['sonner'],
  },
})
