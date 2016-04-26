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
      { name: 'remarkable', target: '1.6.2' },
      { name: 'highlightjs', target: '9.1.0' }
    ];

    return this.addBowerPackagesToProject(bowerPackages);
  }
};
