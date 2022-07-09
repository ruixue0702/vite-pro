'use strict'
exports.__esModule = true
var fs_extra_1 = require('fs-extra')
var path_1 = require('path')
var kolorist_1 = require('kolorist')
var core_1 = require('../template/core')
function createComponent(meta) {
  var name = meta.name
  // name 标准化
  // 拼接组件目录
  var componentDir = (0, path_1.resolve)('../src', name)
  // 其它核心文件目录：组件源文件、类型、样式、测试
  var compSrcDir = (0, path_1.resolve)(componentDir, 'src')
  var styleDir = (0, path_1.resolve)(componentDir, 'style')
  var testDir = (0, path_1.resolve)(componentDir, 'test')
  // 生成文件夹
  ;(0, fs_extra_1.ensureDirSync)(compSrcDir)
  ;(0, fs_extra_1.ensureDirSync)(styleDir)
  ;(0, fs_extra_1.ensureDirSync)(testDir)
  // 文件和内容创建
  // 核心文件：组件文件
  var coreFilePath = (0, path_1.resolve)(compSrcDir, name) + '.tsx'
  ;(0, fs_extra_1.writeFileSync)(coreFilePath, (0, core_1['default'])(name))
  // 创建成功通知
  console.log(
    (0, kolorist_1.lightGreen)(
      '\u2705 \u7EC4\u4EF6'.concat(name, '\u76EE\u5F55\u521B\u5EFA\u6210\u529F')
    )
  )
  console.log(
    (0, kolorist_1.lightBlue)(
      '\u2705 \u7EC4\u4EF6\u76EE\u5F55\uFF1A'.concat(componentDir)
    )
  )
}
exports['default'] = createComponent
// function coreFilePath(coreFilePath: any, genCoreTemplate: (name: string) => string) {
//   throw new Error('Function not implemented.')
// }
