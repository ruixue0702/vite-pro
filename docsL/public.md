# 发布到npm
#### 打包方式
- 全量大包：打包全部组件
- 按需打包：单个组件打包

#### 全量打包整体思路
- 编写一个基于 vite 的创建脚本 build.js
- 设置一个入口文件 entry.test
- 入口文件中具名导出我们所编写的所有组件
- 实现并默认导出一个 vue 插件

#### 按需打包思路
- 找到存放各个组件的目录，遍历目录
- 依次读取目录中的 index.ts （包含单个组件的插件以及组件的导出） 
- 在打包文件中，动态打包单个组件，并为其生成单个的 package.json 文件


#### 发布组件库到 npm
- 注册 npm 账号
- https://www.npmjs.com
- 可能需要修改 registry
  - npm config get registry  (https://registry.npm.taobao.org)
  - npm config set registry https://registry.npmjs.org
  - nrm ls (通过 nrm 管理 镜像的地址)
  - sudo npm install -g nrm
- 可能需要添加用户 
  - npm adduser
  - npm login 登录
    - ➜   vite-pro git:(main) ✗ npm login
          npm notice Log in on https://registry.npmjs.org/
          Username: npm login
          npm WARN Name may not contain non-url-safe chars 
          Username: (npm login) ruixue0702
          Password: 
          Email: (this IS public) ruixue0702@163.com
          npm notice Please check your email for a one-time password (OTP)
          Enter one-time password: 96627929
          Logged in as ruixue0702 on https://registry.npmjs.org/.
      ➜   vite-pro git:(main) ✗ 
  - npm who am i
    - ➜   vite-pro git:(main) ✗ npm who am i
          ruixue0702
- npm publish ./build
  - https://www.npmjs.com/package/lucky-snow-ui
  - 403 403 Forbidden - PUT https://registry.npmjs.org/snow-ui - Package name too similar to existing package snowui; try renaming your package to '@ruixue0702/snow-ui' and publishing with 'npm publish --access=public' instead
  - npm notice 
    npm notice 📦  lucky-snow-ui@0.0.0
    npm notice === Tarball Contents === 
    npm notice 973B  button/index.es.js  
    npm notice 883B  button/index.umd.js 
    npm notice 452B  button/package.json 
    npm notice 1.1kB lucky-snow-ui.es.js 
    npm notice 949B  lucky-snow-ui.umd.js
    npm notice 475B  package.json        
    npm notice === Tarball Details === 
    npm notice name:          lucky-snow-ui                           
    npm notice version:       0.0.0                                   
    npm notice filename:      lucky-snow-ui-0.0.0.tgz                 
    npm notice package size:  1.5 kB                                  
    npm notice unpacked size: 4.8 kB                                  
    npm notice shasum:        16a70e34c897699ebdcb4a8ba545a8750e342e96
    npm notice integrity:     sha512-j+4mE4hSdXEqW[...]/Zby1hccq2eJg==
    npm notice total files:   6                                       
    npm notice 
    npm notice Publishing to https://registry.npmjs.org/
    + lucky-snow-ui@0.0.0