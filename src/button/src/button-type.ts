import { PropType, ExtractPropTypes } from 'vue'

// 增加 type 类型
export type IButtonType =
  | 'primary'
  | 'secondary'
  | 'text'
  | 'success'
  | 'warning'
  | 'error'
export type IButtonSize = 'small' | 'medium' | 'large'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
