// 入口文件
// 1.引入实现组件批量导出去
// 明文声明 App 是一个类型
import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
// 2.导出这些组件
export { Button }

const installs = [ButtonPlugin]
// 3.导出一个vue插件
export default {
  // 插件 install(){}
  // app 的类型是 App
  install(app: App) {
    // 批量循环输出组件
    installs.forEach(p => app.use(p))
  }
}
