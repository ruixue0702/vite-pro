import { Command } from 'commander'
// inquirer版本8.2.2写法，只支持cjs
import * as inquirer from 'inquirer'
// 创建命令对象
const cmd = new Command()

// 可选项
const CREATE_TYPES = ['component', 'lib-entry']

// 注册命令、参数、以及用户传入之后的回调函数
// $ tsnd ./src/index.ts create
// $ tsnd ./src/index.ts create --type component
cmd
  .command('create')
  .description('创建一个组件模板或配置文件')
  // 添加命令参数 -t ｜ --type，<type>表明为必选参数
  .option('-t --type <type>', '创建类型，可选值：component, lib-entry')
  // 注册回调函数
  .action(async args => {
    console.log(args)
    // 容错，判断用户是否输入 type
    let { type } = args
    // // 未输入，提示用户重新输入，给用户一个列表去选择
    if (!type) {
      const result = await inquirer.prompt([
        {
          // 获取输入后的属性名
          name: 'type',
          // 交互方式为列表
          type: 'list',
          // 提示信息
          message: '(必填)请选择创建类型：',
          // 选项列表
          choices: CREATE_TYPES,
          // 默认选项
          default: 0
        }
      ])
      type = result.type
    }
    // 输入则创建对应的内容
  })

// 执行命令行参数的解析
cmd.parse()
