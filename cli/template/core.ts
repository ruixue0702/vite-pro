import { upperFirst } from './utils'

// 创建组件核心文件模板
export default function genCoreTemplate(name: string) {
  const compName = 'S' + upperFirst(name)
  const propsTypeName = upperFirst(name) + 'Props'
  const propsName = name + 'Props'
  const propsFileName = name + '-type'
  const className = 's-' + name
  return `
import { defineComponent, toRefs } from 'vue'
import { ${propsTypeName}, ${propsName} } from './${propsFileName}'

export default defineComponent({
  name: '${compName}',
  // 设置 props 类型声明
  props: ${propsName},
  setup(props: ${propsTypeName}) {
    // 响应数据
    return () => {
      return (
        <div class="${className}"></div>
      )
    }
  }
})
`
}
