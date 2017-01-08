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
  },

  afterInstall: function() {
    var bowerPackages = [
      { name: 'highlightjs', target: '9.7.0' },
      { name: 'markdown-it', target: '8.0.1' }
    ];

    return this.addBowerPackagesToProject(bowerPackages);
  }
};
