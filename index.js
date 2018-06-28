'use strict';
var mergeTrees = require('broccoli-merge-trees');
var fs = require('fs');
var flatiron = require('broccoli-flatiron');
var freestyleUsageSnippetFinder = require('./freestyle-usage-snippet-finder');
var FreestyleDiscovery = require('./lib/freestyle-discovery');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-freestyle',

  treeForApp: function(tree) {
    var treesToMerge = [tree];
    var self = this;

    var snippets = mergeTrees(this.snippetPaths().filter(function(path) {
      return fs.existsSync(path);
    }));

    snippets = mergeTrees(this.snippetSearchPaths().map(function(path) {
      return freestyleUsageSnippetFinder(path, self.ui);
    }).concat(snippets));

    snippets = flatiron(snippets, {
      outputFile: 'freestyle-snippets.js'
    });
    treesToMerge.push(snippets);

    return mergeTrees(treesToMerge);
  },

  preprocessTree: function(type, tree) {
    if (type === 'js') {
      var treesToMerge = [tree];
      let discoveredComponents = FreestyleDiscovery(tree, {
        appName: this.app.name,
        outputFile: '/-freestyle/discovered-components.js'
      });

      discoveredComponents = new Funnel(discoveredComponents, {
        destDir: this.app.name
      });

      treesToMerge.push(discoveredComponents);
      tree = mergeTrees(treesToMerge);
    }
    return tree;
  },

  snippetPaths: function() {
    if (this.app) {
      var freestyleOptions = this.app.options.freestyle || {};
      return freestyleOptions.snippetPaths || ['snippets'];
    }
    return ['snippets'];
  },

  snippetSearchPaths: function() {
    if (this.app) {
      var freestyleOptions = this.app.options.freestyle || {};
      return freestyleOptions.snippetSearchPaths || ['app'];
    }
    return ['app'];
  },

  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);

    // Quick fix for add-on nesting
    // https://github.com/aexmachina/ember-cli-sass/blob/v5.3.0/index.js#L73-L75
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && (app.app || app.parent)) {
      app = app.app || app.parent;
    }

    // if app.import and parentAddon are blank, we're probably being consumed by an in-repo-addon
    // or engine, for which the "bust through" technique above does not work.
    if (typeof app.import !== 'function' && !parentAddon) {
      if (app.registry && app.registry.app) {
        app = app.registry.app;
      }
    }

    // Per the ember-cli documentation
    // http://ember-cli.com/extending/#broccoli-build-options-for-in-repo-addons
    let target = (parentAddon || app);
    this.options = target.options || {};
  },

  isDevelopingAddon: function() {
    return false;
  }
};
