import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: this must match your GitHub repo name for GitHub Pages
  // e.g. https://omartantawy360.github.io/sec-port/ -> base: "/sec-port/"
  base: '/sec-port/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
