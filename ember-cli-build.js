'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    autoprefixer: {
      browsers: ['last 2 version', '> 10%'],
      cascade: false,
    },
    snippetSearchPaths: ['tests/dummy/app'],
  });

  if (defaults.project.findAddonByName('ember-native-dom-event-dispatcher')) {
    app.vendorFiles = { 'jquery.js': null };
  }

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
