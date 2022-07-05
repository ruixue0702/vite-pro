import Test from './Test'
import { render } from '@testing-library/vue'

test('Test.tsx should work', () => {
  // 输入一个 与 输出一个值 相对应
  // expect(true).toBe(trues)
  // 渲染组件
  const { getByText } = render(Test)
  getByText('test from defineComponent setup : 0')
})
