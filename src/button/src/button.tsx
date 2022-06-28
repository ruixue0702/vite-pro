import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'SButton',
  // 设置 props 类型声明
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    // 响应数据
    return () => {
      const { type, size, disabled, block } = toRefs(props)
      // 渲染内容
      const defaultSlot = slots.default ? slots.default() : '按钮'
      // block
      const blockCls = block.value ? 's-btn--block' : ''
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}`}
        >
          {defaultSlot}
        </button>
      )
    }
  }
})
