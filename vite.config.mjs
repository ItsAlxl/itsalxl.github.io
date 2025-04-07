import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { globSync } from 'glob'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: globSync('src/**/*.html'),
    },
  },
  plugins: [
    tailwindcss(),
  ],
})