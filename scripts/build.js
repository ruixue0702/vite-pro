const path = require('path')
const fs = require('fs')
// 通过 node 执行 js 文件
// building for production ->  Library Mode
// 引入 vite 导出的 build 方法， 用它来创建
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// 操作文件系统
const fsExtra = require('fs-extra')

// 基础配置
const baseConfig = defineConfig({
  configFile: false, // 不需要配置文件
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')

// 组件目录
const componentsDir = path.resolve(__dirname, '../src')

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

// 生成 package.json
const createPackageJson = name => {
  // 预设版本
  const fileStr = `{
    "name": "${name ? name : 'lucky-snow-ui'}",
    "version": "0.0.0",
    "main": "${name ? 'index.umd.js' : 'lucky-snow-ui.umd.js'}",
    "module": "${name ? 'index.es.js' : 'lucky-snow-ui.es.js'}",
    "author": "飘雪的季节",
    "github": "",
    "description": "组件库",
    "repository": {
      "type": "git",
      "url": "https://github.com/ruixue0702/vite-pro.git"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/ruixue0702/vite-pro/issues"
    }
  }`

  if (name) {
    // 单个组件，输出对应的 package.json
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    // 全量
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    )
  }
}

// 执行创建
// 单组件按需构建
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )

  createPackageJson(name)
}

// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'lucky-snow-ui',
          fileName: 'lucky-snow-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )

  // 创建 package.json
  createPackageJson()
}

const buildLib = async () => {
  await buildAll()
  // await buildSingle()

  // 按需打包
  // 读取组件目录
  fs.readdirSync(componentsDir)
    .filter(name => {
      // 过滤出包含index.ts的目录（只要目录不要文件，且里面包含index.ts）
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      // 逐个打包
      await buildSingle(name)
    })
}

// 执行输出
buildLib()
