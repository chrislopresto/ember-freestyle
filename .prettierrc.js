'use strict';

module.exports = {
  overrides: [
    {
      files: '*.gjs',
      options: {
        parser: 'ember-template-tag',
      },
    },
  ],
  plugins: ['prettier-plugin-ember-template-tag'],
  singleQuote: true,
};
