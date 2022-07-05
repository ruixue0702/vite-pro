# 参与 github 开源社区
- form 仓库
  - Fork的含义是衍生、分支的意思，这一步是从某个开源项目上引出一个新的分支。这样我们可以在我们引出的独立分支上自由修改，而不会对原始项目有影响。
- clone 项目代码
  - 有时需要输入账号密码（github现在采用用户名+token的形式登录，用token代替原来的密码即可）
- 本地开发并提交
- 设置 upstream 和同步源仓库最新代码
- 提交 pr

#### 本地开发 + 提交代码
- 修改文件
- git add .                    将本地代码添加到git暂存区
- git commit -m "update: XXX"  将暂存区的代码提交到本地git仓库
- git push origin master       本地git仓库代码push到远程个人仓库

#### 设置 upstream + 同步源仓库最新代码
- git remote -v  查看远程仓库地址 （默认有两个 origin  XXX  fetch + push）
- git remote add upstream XXX  配置 upstream 地址 为源仓库地址  （多了两个 upstream XXX fech + push）
- git pull upstream master  同步源仓库最新代码

#### 提交 pr
- 提交代码到自己的代码库，还需要请求合并到主库中，这个操作称为 pull request，即 pr
- 访问个人仓库的 pr 页面，点击 New pull request
- 点击 Create pull request
- pr 创建完成，并自动跳转到 pr 详情页面
- 源库项目的管理员对所提交的 pr 进行代码校验
- 校验通过的即可合并