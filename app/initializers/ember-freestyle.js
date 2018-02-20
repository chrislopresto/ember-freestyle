/* global requirejs, require */
import ENV from '../config/environment';

function initialize() {
  const application = arguments[1] || arguments[0];
  let prefix = ENV.modulePrefix;

  let freestyleModuleRegExp = new RegExp(`^${prefix}/(freestyle-snippets)`);

  Object.keys(requirejs.entries).filter(function(key) {
    return freestyleModuleRegExp.test(key);
  }).forEach(function(moduleName) {
    let module = require(moduleName, null, null, true);
    let freestyleModule = module['default'];
    let moduleKey = moduleName.split('/').reverse()[0];
    let registryKey = `config:ember-freestyle-${moduleKey}`;
    application.register(registryKey, freestyleModule, { instantiate: false });
    application.inject('service:ember-freestyle', moduleKey, registryKey);
  });
}

export default {
  name: 'ember-freestyle',
  initialize: initialize
};

