module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    'browser': true
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'no-magic-numbers': ['off', { 'ignore': [-1, 0, 1] }],
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'off',
    'prefer-rest-params': 'off',
    'space-before-function-paren': 'off'
  }
};
