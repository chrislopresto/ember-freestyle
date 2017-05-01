/* eslint-env node */
var path = require('path');

module.exports = {
  name: 'ember-freestyle',

  normalizeEntityName: function() {},

  fileMapTokens: function() {
    return {
      __root__: function(options) {
        if (options.inAddon) {
          return path.join('tests', 'dummy');
        }

        return '/';
      }
    };
  }
};
