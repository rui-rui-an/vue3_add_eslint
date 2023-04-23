module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'plugin:prettier/recommended' // 新增
  ],
  overrides: [
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: ['tsconfig.json'], // 新增
    extraFileExtensions: ['.vue']
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
