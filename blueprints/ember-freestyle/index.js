/* jshint node: true */
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
  },

  files: function() {
    var files = this._super.call(this);
    if (!this.project) {
      return files;
    }

    var allowedStyleFiles = {
      scss: !!(this.project.findAddonByName('ember-cli-sass')),
      less: !!(this.project.findAddonByName('ember-cli-less'))
    };
    var supportedPreprocessors = Object.keys(allowedStyleFiles);

    function filterFilesByAvailableProproessor(file) {
      var styleType = path.extname(file).substring(1);
      return supportedPreprocessors.indexOf(styleType) === -1 || allowedStyleFiles[styleType] === true;
    }

    return files.filter(filterFilesByAvailableProproessor);
  }
};
