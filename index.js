/* globals require, module */
'use strict';
const mergeTrees = require('broccoli-merge-trees');
const stew = require('broccoli-stew');
const path = require('path');
const fs = require('fs');
const flatiron = require('broccoli-flatiron');
const freestyleUsageSnippetFinder = require('./freestyle-usage-snippet-finder');

const Funnel = require('broccoli-funnel');
const unwatchedTree = require('broccoli-unwatched-tree');

module.exports = {
  name: 'ember-freestyle',

  treeForApp(tree) {
    if (!this._includeFiles()) {
      return tree;
    }

    let treesToMerge = [tree];
    let self = this;

    let snippets = mergeTrees(this.snippetPaths().filter(function(path) {
      return fs.existsSync(path);
    }));

    snippets = mergeTrees(this.snippetSearchPaths().map(function(path) {
      return freestyleUsageSnippetFinder(path, self.ui);
    }).concat(snippets));

    snippets = flatiron(snippets, {
      outputFile: 'snippets.js'
    });
    treesToMerge.push(snippets);

    return mergeTrees(treesToMerge);
  },

  snippetPaths() {
    if (this.app) {
      return this.addonOptions.snippetPaths || ['snippets'];
    }
    return ['snippets'];
  },

  snippetSearchPaths() {
    if (this.app) {
      return this.addonOptions.snippetSearchPaths || ['app'];
    }
    return ['app'];
  },

  treeForStyles(tree) {
    tree = this._super.treeForStyles.apply(this, [tree]);

    if (this._includeFiles()) {
      let highlightJsTree = new Funnel(unwatchedTree(path.dirname(require.resolve('highlight.js/package.json'))), {
        srcDir: '/styles',
        destDir: '/app/styles/ember-freestyle/highlight.js'
      });
      highlightJsTree = stew.rename(highlightJsTree, '.css', '.scss');

      return mergeTrees([highlightJsTree, tree], {
        overwrite: true
      });
    } else {
      // return a tree of empty dummy Sass files, so no styles are added, but @import statements from app don't break
      return stew.map(tree, () => '');
    }
  },

  treeForAddon() {
    if (this._includeFiles()) {
      return this._super.treeForAddon.apply(this, arguments);
    }
  },

  treeForAddonTemplates() {
    if (this._includeFiles()) {
      return this._super.treeForAddonTemplates.apply(this, arguments);
    }
  },

  shouldIncludeChildAddon(/* childAddon */) {
    // we should return false here to exclude ember-remarkable and ember-truth-helpers as dependent addons
    // but this does not work, as we have no app and thus no options we can access
    // return this._includeFiles();
    return this._super.shouldIncludeChildAddon.apply(this, arguments);
  },

  included(app, parentAddon) {
    this._super.included(app);

    this.app = app;
    this.addonOptions = this.app.options.freestyle || {};

    let target = app || parentAddon;
    if (target.import && this._includeFiles()) {
      target.import(target.bowerDirectory + '/remarkable/dist/remarkable.js');
      target.import(target.bowerDirectory + '/highlightjs/highlight.pack.js');
      target.import('vendor/ember-remarkable/shim.js', {
        type: 'vendor',
        exports: { 'remarkable': ['default'] }
      });
      target.import('vendor/ember-remarkable/highlightjs-shim.js', {
        type: 'vendor',
        exports: { 'hljs': ['default'] }
      });
    }

  },

  _includeFiles() {
    return (this.addonOptions && this.addonOptions.enabled !== undefined) ? this.addonOptions.enabled : (this.app.env !== 'production');
  },

  isDevelopingAddon() {
    return false;
  }
};
