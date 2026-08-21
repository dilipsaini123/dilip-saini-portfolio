import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Required for GitHub Pages project site URL
  base: '/dilip-saini-portfolio/',
  plugins: [react()],
})
