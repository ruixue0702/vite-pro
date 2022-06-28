/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({})],
  test: {
    // vitest
    // jest like test apis
    globals: true,
    // 模拟 dom 环境
    environment: 'happy-dom',
    // 支持 tsx
    transformMode: {
      // 转换模式
      web: [/.[tj]sx$/] // web 正则 .tsx .jsx 结尾
    }
  }
})
