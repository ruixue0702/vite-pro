// import Theme from 'vitepress/dist/client/theme-default'

import Theme from 'vitepress/theme'

import './demo-block.scss'
// import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './registerComponents'
import UI from '../../../src/index.scss'
import type { App } from 'vue'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({app}:{app:App<never>}) {
    // 注册组件
    registerComponents(app)
    app.use(UI)
  }
}