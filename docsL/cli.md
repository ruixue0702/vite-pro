# cli 开发 （命令行工具的开发）
- command line interface
- 提升开发效率

#### 技术选型
- 命令注册 + 交互 + 逻辑实现
- 运行时：nodejs
- 命令：commander
- 交互：inquirer
- 逻辑处理：
  - 文件 fs-extra
  - 命令行输出 kolorist
  - 网络访问。。。

#### 思路
- 创建统一组件目录和文件名
- 组件入口文件生成

#### 实现
- 初始化 cli （根目录 /cli/）
  - ts-node-dev  sudo npm install -g typescript ts-node-dev
- 安装依赖 
  - commander
  - inquirer
  - fs-extra
  - kolorist
- ```ts
  import { Command } from 'commander'

  // 创建命令对象
  const cmd = new Command()

  // 注册命令、参数、以及用户传入之后的回调函数
  // $ tsnd ./src/index.ts create
  // $ tsnd ./src/index.ts create --type component
  cmd.command('create')
    .description('创建一个组件模板或配置文件')
    // 添加命令参数 -t ｜ --type，<type>表明为必选参数
    .option('-t --type <type>', '创建类型，可选值：component, lib-entry')
    // 注册回调函数
    .action((args) => {
      console.log('注册回调函数', args)
    })

    // 执行命令行参数的解析
    cmd.parse()
  ```
- SyntaxError: Cannot use import statement outside a module
  - 添加 tsconfig.json
    - ```json
      {
        "compilerOptions": {
          "outDir": "./build",
          "module": "commonjs"
        }
      }
      ```
- "scripts": {
    "dev": "tsnd ./src/index.ts create",
    "build": "tsc"
  }
  - yarn dev create -t component   => { type: 'component' }
  - yarn build  => $ tsc