module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    complexity: ['error', 3],
    'max-depth': ['error', 1],
    'max-len': ['warn', { code: 120 }],
    'max-lines': ['warn', 100],
    'max-lines-per-function': ['warn', 20],
    'max-nested-callbacks': ['warn', 1],
    'max-params': ['error', 3],
    'max-statements': ['warn', 10],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-duplicate-imports': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
  },
}
