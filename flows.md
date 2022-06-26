yarn create vite
vite-project
vue
vue-ts

cd vite-project
yarn 
yarn dev

npx eslint --init
y
y
To check syntax and find probles

"script": {
  ...,
  "lint": "eslint . --ext .js,.ts,.tsx,.vue"
}

yarn add -D prettier eslint-plugin-prettier eslint-c
onfig-prettier

npx mrm@2 lint-staged

报错：setup 中 ref 引入 和 defineProps 位置红线
原因：vscode 不识别 setup 语法
解决：安装 volar，同时关闭 vetur

报错：.vue文件引入位置红线
原因：ts不认识vue文件
解决：加一个dts扩展一下

报错：Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.

解决：加了volar 同时关闭vetur    加了d.ts     这个操作之前用theme-default 的就行 ；之后就得改成theme才行。。。

yarn add -D vitepress-theme-demoblock
yarn add -D @types/node

/docs/.vitepress/theme/config.ts
```ts
const config = {
  // 样式配置
  themeConfig: {
    sidebar,
  },
  markdown: {
    config(md) {
      // 这里可以使用markdown-it插件
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}

```

/docs/components/**/index.md
:::demo 组件简介
```vue
<template>
  <HelloWorld></HelloWorld>
</template>
```
:::

docs中组件注册
/docs/.vitepress/theme/index.ts
```ts
// import Theme from 'vitepress/dist/client/theme-default'
import Theme from 'vitepress/theme'
import HelloWorld from '../../../src/components/HelloWorld.vue'
import Test from '../../../src/components/Test'

import 'vitepress-theme-demoblock/theme/styles/index.css'

import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue' 
import Demo from 'vitepress-theme-demoblock/components/Demo.vue' 

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({app}) {
    // 注册组件
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}
```

yarn a
dd -D sass tailwindcss postcss auto
prefixer

<!-- 初始化tailwindcss 配置: 创建 tailwind.config.js 和 postcss.config.js -->
npx tailwindcss init -p
