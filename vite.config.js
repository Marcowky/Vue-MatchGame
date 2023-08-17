import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // build: {
  //   outDir: 'nginx/html' // 指定构建输出的目标文件夹
  // }
})
