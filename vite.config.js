import { fileURLToPath, URL } from 'node:url'
import viteCompression from 'vite-plugin-compression2';
import vueDevTools from 'vite-plugin-vue-devtools'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  root: './',
  build: {
    outDir: 'public',
    sourcemap: 'hidden',
  },
  publicDir: 'assets',
  plugins: [
    vue(),
    viteCompression({algorithm: 'gzip'}),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/modules/app', import.meta.url)),
      '@admin': fileURLToPath(new URL('./src/modules/admin', import.meta.url)),
      '@game': fileURLToPath(new URL('./src/modules/game', import.meta.url))
    }
  }
})
