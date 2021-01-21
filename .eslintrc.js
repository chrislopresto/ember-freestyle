'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['ember'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'ember/no-classic-components': 'off',
    'ember/no-classic-classes': 'off',
    'no-magic-numbers': ['off', { ignore: [-1, 0, 1] }],
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'off',
    'prefer-rest-params': 'off',
    'space-before-blocks': ['error', 'always'],
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
        'lib/**',
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      rules: Object.assign(
        {},
        require('eslint-plugin-node').configs.recommended.rules,
        {
          // add your custom rules and overrides for node files here
        }
      ),
    },

    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      env: {
        embertest: true,
      },
      plugins: ['ember'],
      extends: [
        'eslint:recommended',
        'plugin:ember/recommended',
        'plugin:prettier/recommended',
      ],
    },
  ],
};
