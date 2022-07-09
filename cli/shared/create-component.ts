import { ensureDirSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import { lightBlue, lightGreen } from 'kolorist'
import genCoreTemplate from '../template/core'

export interface ComponentMeta {
  name: string
  title: string
  category: string
}

export default function createComponent(meta: ComponentMeta) {
  const { name } = meta
  // name 标准化

  // 拼接组件目录
  const componentDir = resolve('../src', name)

  // 其它核心文件目录：组件源文件、类型、样式、测试
  const compSrcDir = resolve(componentDir, 'src')
  const styleDir = resolve(componentDir, 'style')
  const testDir = resolve(componentDir, 'test')

  // 生成文件夹
  ensureDirSync(compSrcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)

  // 文件和内容创建
  // 核心文件：组件文件
  const coreFilePath = resolve(compSrcDir, name) + '.tsx'
  writeFileSync(coreFilePath, genCoreTemplate(name))

  // 创建成功通知
  console.log(lightGreen(`✅ 组件${name}目录创建成功`))
  console.log(lightBlue(`✅ 组件目录：${componentDir}`))
}

// function coreFilePath(coreFilePath: any, genCoreTemplate: (name: string) => string) {
//   throw new Error('Function not implemented.')
// }
