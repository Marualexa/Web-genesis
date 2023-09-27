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
  }
})
