// 1.函数式组件
// export default () => <div>test2299</div>

import { defineComponent, ref, withModifiers } from 'vue'

// 2.defineComponent
// export default defineComponent({
//   render() { // 使用this读取
//     return <div>test from defineComponent</div>
//   }
// })

// 3.defineComponent({setup() {}})
// 借助 babel-plugin-jsx：github/vuejs/babel-plugin-jsx
// vue 中独特概念：修饰符、slot、directive、emit
export default defineComponent({
  // 自定义指令
  directives: {
    focus: {
      mounted(el) {
        el.focus() // 组件加载后自动获取焦点
      }
    }
  },
  //
  emits: ['click'],
  // props 接收属性; ctx 上下文 { slots, emit }; emit 同 emits 同时使用
  // 摒弃 this：不影响使用ts的类型的推论
  // ts的类型在推论this时会出现一些问题，动态的东西总是不稳定的，需要静态的类型
  // 提升控制能力，对ts支持最好
  setup(props, { slots, emit }) {
    // compositionApi 中定义响应的数据和状态
    // 响应式数据 count
    // 导入 ref
    const count = ref(0)
    // 修改count的方法
    const inc = () => {
      count.value++
      // click 事件派发  父组件 @click="onclick"
      // emit('click')
    }
    // v-for => list.value.map
    const list = ref<string[]>(['a', 'b', 'c'])

    // return 是函数类型 相当于 render
    return () => {
      // 与视图相关的写在渲染函数中更合理
      // v-if => 三元表达式
      const span = true ? <span>A</span> : <span>B</span>

      // 类似 react 的写法：onClick={}
      // 导入 withModifiers
      // withModifiers(inc, ['self']) : 只有点击当前元素的时候才会触发 inc 方法，冒泡和捕获都不会触发
      return (
        <div onClick={withModifiers(inc, ['self'])}>
          test from defineComponent setup : {count.value}
          {/* 可以通过 v-model 进行双向绑定 */}
          {/* v-focus 自定义指令使用 v-focus={[val, arg, ['modifier']]} */}
          <input type="text" v-focus v-model={count.value} />
          {/* 没有 v-if、v-for；可用三元表达式代替 */}
          <div>{span}</div>
          <ul>
            {list.value.map((str) => (
              <li key={str}>{str}</li>
            ))}
          </ul>
          {/* 插槽 v-slots={{具名插槽}} */}
          {/* <Test v-slots={{
          title: () => <h3>v-slots title</h3> 
        }}>
        </Test> */}
          {/* 默认插槽内容 */}
          <div>{slots.default ? slots.default() : 'default content'}</div>
          <div>{slots.title ? slots.title() : 'title content'}</div>
        </div>
      )
    }
  }
})
