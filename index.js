'use strict';

module.exports = {
  name: require('./package').name,

  included(/*app, parentAddon*/) {
    this._super.included.apply(this, arguments);
  },

  isDevelopingAddon() {
    return false;
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

  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    // support for nested addon
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    var target = parentAddon || app;
    if (!this.app && target.app) {
      this.app = target.app;
    }
  }
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
