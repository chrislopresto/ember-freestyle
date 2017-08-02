'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return false;
  },

  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    // support for nested addon
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    var target = parentAddon || app;
    if (!this.app && target.app) {
      this.app = target.app;
    }
  },

  setupPreprocessorRegistry(type, registry) {
    if (type !== 'parent') {
      return;
    }
    let pluginObj = this._buildPlugin();
    pluginObj.parallelBabel = {
      requireFile: __filename,
      buildUsing: '_buildPlugin',
      params: {},
    };
    registry.add('htmlbars-ast-plugin', pluginObj);
  },

  _buildPlugin() {
    return {
      name: 'component-attributes',
      plugin: require('./lib/ast-transform'),
      baseDir() {
        return __dirname;
      },
    };
  },
};
