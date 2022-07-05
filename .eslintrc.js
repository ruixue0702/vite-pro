module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:vue/essential', // vue2版本（默认配置）
    'plugin:@typescript-eslint/recommended', // 放在plugin:vue/vue3-recommended前面，避免vue3的被覆盖
    'plugin:vue/vue3-recommended', // vue3版本（识别vue3代码）
    'plugin:prettier/recommended' // prettier 校验
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off'
  }
}
