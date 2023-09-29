import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Web-genesis/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/sass/importGlobal.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@img': fileURLToPath(new URL('src/assets/', import.meta.url)),
      '@': fileURLToPath(new URL('src/', import.meta.url)),
    }
  },
})
