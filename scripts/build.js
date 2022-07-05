const path = require('path')
// 通过 node 执行 js 文件
// building for production ->  Library Mode
// 引入 vite 导出的 build 方法， 用它来创建
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
// 基础配置
const baseConfig = defineConfig({
  configFile: false, // 不需要配置文件
  publicDir: false,
  plugins: [vue(), vueJsx()]
})
// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')
// 输出目录
const outputDir = path.resolve(__dirname, '../build')
// rollup 配置
const rollupOptions = {
  // 外置
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}
// 执行创建
// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'snow-ui',
          fileName: 'snow-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
}

const buildLib = async () => {
  await buildAll()
}

// 执行输出
buildLib()
