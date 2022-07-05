import SButton from '../../../src/button/src/button'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue' 
import Demo from 'vitepress-theme-demoblock/components/Demo.vue' 
import type { App } from 'vue'
export function registerComponents (app:App<never>) {
  // 注册组件
  app.component('SButton', SButton)
  app.component('DemoBlock', DemoBlock)
  app.component('Demo', Demo)
}