'use strict'
exports.__esModule = true
var utils_1 = require('./utils')
// 创建组件核心文件模板
function genCoreTemplate(name) {
  var compName = 'S' + (0, utils_1.upperFirst)(name)
  var propsTypeName = (0, utils_1.upperFirst)(name) + 'Props'
  var propsName = name + 'Props'
  var propsFileName = name + '-type'
  var className = 's-' + name
  return "\nimport { defineComponent, toRefs } from 'vue'\nimport { "
    .concat(propsTypeName, ', ')
    .concat(propsName, " } from './")
    .concat(propsFileName, "'\n\nexport default defineComponent({\n  name: ")
    .concat(
      compName,
      ',\n  // \u8BBE\u7F6E props \u7C7B\u578B\u58F0\u660E\n  props: '
    )
    .concat(propsName, ',\n  setup(props: ')
    .concat(
      propsTypeName,
      ') {\n    // \u54CD\u5E94\u6570\u636E\n    return () => {\n      return (\n        <div class="'
    )
    .concat(className, '"></div>\n      )\n    }\n  }\n})\n')
}
exports['default'] = genCoreTemplate
