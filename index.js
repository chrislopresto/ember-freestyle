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
