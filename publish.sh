config set registry=https://registry.npmjs.org
login # 登录，如果有 OTP，邮件会接收到验证码，输入即可
# 登录成功后，短时间内会保存状体啊，可以直接 npm publish
publish ./build # 可能会提示名称已存在，换个名字，获取使用作用域包（@xxx/xxx）
config set registry=https://registry.npm.taobao.org # 还原淘宝镜像