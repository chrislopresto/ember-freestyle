'use strict';
var mergeTrees = require('broccoli-merge-trees');
var fs = require('fs');
var flatiron = require('broccoli-flatiron');
var freestyleUsageSnippetFinder = require('./freestyle-usage-snippet-finder');

var Funnel = require('broccoli-funnel');
var Writer = require('broccoli-writer');
var path = require('path');
var glob = require('glob');

FreestyleDiscovery.prototype = Object.create(Writer.prototype);
FreestyleDiscovery.prototype.constructor = FreestyleDiscovery;

function FreestyleDiscovery(inputTree, options) {
  if (!(this instanceof FreestyleDiscovery)) {
    return new FreestyleDiscovery(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = {
    outputFile: options.outputFile,
    componentNamePattern: `${options.appName}/components/(.*)/component.js$`
  };
}

FreestyleDiscovery.prototype.write = function(readTree, destDir) {
  var _this = this;
  var componentPathPattern = '**/freestyle/component.js';
  var componentRegex = new RegExp(this.options.componentNamePattern);

  return readTree(this.inputTree).then(function(srcDir) {
    var files = glob.sync(path.join(srcDir, componentPathPattern));
    var components = files.map((componentPath) => {
      // Extract a freestyle component name that looks like:
      // x-bar/freestyle
      // from a componentPath that looks like:
      // /Users/xxxxx/p/xxxxx/ember-freestyle/tmp/broccoli_merge_trees-output_path-7BiiNpHw.tmp/dummy/components/x-bar/freestyle/component.js
      return componentRegex.exec(componentPath)[1];
    });

    var output = `export default ${JSON.stringify(components)};`;
    fs.mkdirSync(path.join(destDir, path.dirname(_this.options.outputFile)));
    fs.writeFileSync(path.join(destDir, _this.options.outputFile), output);
  });
}

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
