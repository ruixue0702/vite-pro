import { defineComponent, toRefs } from 'vue'
import { TreeProps, treeProps } from './tree-type'

export default defineComponent({
  name: 'STree',
  // 设置 props 类型声明
  props: treeProps,
  setup(props: TreeProps) {
    // 响应数据
    return () => {
      return <div class="s-tree"></div>
    }
  }
})
