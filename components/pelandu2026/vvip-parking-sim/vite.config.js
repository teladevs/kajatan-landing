import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` → dist/index.html mandiri (semua JS & CSS ter-inline)
export default defineConfig({
  plugins: [vue(), viteSingleFile()],
})
