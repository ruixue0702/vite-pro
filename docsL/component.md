# 插件定义与使用

#### /src/main.ts 
main 中全局注册 button 插件
```ts
import Button from './button'
createApp(App).use(Button).mount('#app')
```

#### src/button/index.ts
```ts
import { App } from "vue";
import Button from "./src/button"
// 具名导出
export { Button }
// 导出插件
export default {
  install (app: App) {
    // 导出的插件 为 Button.name
    app.component(Button.name, Button);
  }
}
```

#### src/button/style/button.scss
```scss
// 变量
// 定义主题变量
$s-border-radius: var(--s-border-radius, 2px); // 一般圆角
$s-font-size-md: var(--s-font-size-md, 12px); // 当组件size为‘’时使用此字号大小
$s-animation-duration-slow: var(--s-animation-duration-slow, 300ms);
$s-animation-ease-in-out-smooth: var(
  --s-animation-ease-in-out-smooth,
  cubic-bezier(0.645, 0.045, 0.355, 1)
);
$s-light-text: var(--s-light-text, #ffffff); // 有色深色背景下字体颜色（固定）
$s-primary: var(--s-primary, #5e7ce0); // 主要按钮，同品牌色
$s-primary-hover: var(--s-primary-hover, #7693f5); // 主要按钮悬停
$s-primary-active: var(--s-primary-active, #344899); // 主要按钮激活
$s-text: var(--s-text, #252b3a); // 正文文本
$s-block: var(--s-block, #ffffff); // 大面积的不可折叠区块的背景色（例如顶部导航背景色）
$s-line: var(--s-line, #adb0b8); // 边框分割线，仅用于边框
$s-form-control-line-active: var(
  --s-form-control-line-active,
  #5e7ce0
); // 表单控件边框激活色，用户获得焦点
$s-brand-active: var(--s-brand-active, #526ecc); // 品牌激活色（加深）
$s-brand-active-focus: var(
  --s-brand-active-focus, #344899
); // 品牌激活色（重度加深）


.s-btn {
  // 布局
  @apply inline-flex items-center justify-center;
  // 元素
  @apply border-[1px] border-solid border-transparent
  h-[28px] py-0 px-[20px]
  bg-transparent;
  border-radius: $s-border-radius;

  // 文本属性
  @apply outline-0 leading-normal whitespace-nowrap cursor-pointer;

  // 文字样式 
  font-size: $s-font-size-md;

  // 其它样式
  transition: background-color $s-animation-duration-slow $s-animation-ease-in-out-smooth,
              border-color $s-animation-duration-slow $s-animation-ease-in-out-smooth;

  // 主要按钮
  &.s-btn--primary {
    color: $s-light-text;
    background-color: $s-primary;

    &:hover, 
    &:focus {
      background-color: $s-primary-hover;
    }
    &:active {
      background-color: $s-primary-active;
    }
  }
  // 次要按钮
  &.s-btn--secondary {
    color: $s-text;
    background-color: $s-block;
    border-color: $s-line;
    &:hover, 
    &:focus,
    &:active {
      border-color: $s-form-control-line-active;
      color: $s-brand-active;
    }
  }

  // 文本按钮
  &.s-btn--text {
    padding: 0;
    color: $s-brand-active;

    &:hover, 
    &:focus,
    &:active {
      color: $s-brand-active-focus;
    }
  }

}
```

#### scss 文件中 @apply 红线 settings.json
```json
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false
}
```

#### src/button/src/button-type.ts
```ts
import { PropType, ExtractPropTypes } from "vue";

// 增加 type 类型
export type IButtonType = 'primary' | 'secondary' | 'text'

// 设置 props 的类型声明
export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
```

#### src/button/src/button.tsx
```tsx
import { defineComponent, toRefs } from "vue";
import { ButtonProps, buttonProps } from "./button-type"

export default defineComponent({
  name: 'SButton',
  // 设置 props 类型声明
  props: buttonProps,
  setup (props: ButtonProps, { slots }) {
    // 响应数据
    return () => {
      const { type } = toRefs(props)
      // 渲染内容
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return <button class={`s-btn s-btn--${type.value}`}>
        { defaultSlot }
      </button>
    }
  }
})
```

#### src/App.vue
```vue
<template>
  <!-- 
    1.primary， secondary， text
    2.size
    3.disabled
    4.block
    5.iconButton
   -->
   <!-- 全局通过 button 插件的 name 使用 -->
  <SButton>确定</SButton>
  <s-button type="primary">确定</s-button>
</template>
```

## 样式重构 
- scr/style

#### 变量抽离 
- src/style/variable.scss 变量部分抽出放置到这里

#### 按钮基础样式抽离
- src/button/style/button-base.scss button 组件的基础样式抽离放置到这里
- @import '../../style//variable.scss'; 引入抽离出的变量
- @mixin button-base {}  通过混入的方式定义button的基础样式

#### 更具types类型抽成可配置的方式

















