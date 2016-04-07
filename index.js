/* jshint node: true */
'use strict';
var jsonModule = require('broccoli-json-module');
var mergeTrees = require('broccoli-merge-trees');
var stew = require('broccoli-stew');

var path = require('path');
var fs   = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var flatiron = require('broccoli-flatiron');
var freestyleUsageSnippetFinder = require('./freestyle-usage-snippet-finder');

var Funnel = require('broccoli-funnel');
var unwatchedTree  = require('broccoli-unwatched-tree');

module.exports = {
  name: 'ember-freestyle',

  treeForApp: function(tree) {
    var treesToMerge = [tree];

    var snippets = mergeTrees(this.snippetPaths().filter(function(path){
      return fs.existsSync(path);
    }));

    snippets = mergeTrees(this.snippetSearchPaths().map(function(path){
      return freestyleUsageSnippetFinder(path);
    }).concat(snippets));

    snippets = flatiron(snippets, {
      outputFile: 'snippets.js'
    });
    treesToMerge.push(snippets);

    return mergeTrees(treesToMerge);
  },

  snippetPaths: function() {
    if (this.app) {
      return this.app.options.snippetPaths || ['snippets'];
    }
    return ['snippets'];
  },

  snippetSearchPaths: function() {
    if (this.app) {
      return this.app.options.snippetSearchPaths || ['app'];
    }
    return ['app'];
  },

  treeForStyles: function(tree) {
    tree = this._super.treeForStyles.apply(this, [tree]);

    var highlightJsTree = new Funnel(unwatchedTree(path.dirname(require.resolve('highlight.js/package.json'))), {
      srcDir: '/styles',
      destDir: '/app/styles/ember-freestyle/highlight.js'
    });
    highlightJsTree = stew.rename(highlightJsTree, '.css', '.scss');

    return mergeTrees([highlightJsTree, tree], {
      overwrite: true
    });
  },

  included: function(app, parentAddon) {
    this._super.included(app);

    var target = app || parentAddon;
    if (target.import) {
      this.importFreestyleBowerDependencies(target);
    }

    this.app.import(app.bowerDirectory + '/remarkable/dist/remarkable.js');
    this.app.import(app.bowerDirectory + '/highlightjs/highlight.pack.js');
    this.app.import('vendor/ember-remarkable/shim.js', {
      type: 'vendor',
      exports: { 'remarkable': ['default'] }
    });
    this.app.import('vendor/ember-remarkable/highlightjs-shim.js', {
      type: 'vendor',
      exports: { 'hljs': ['default'] }
    });
  },

  importFreestyleBowerDependencies: function(target) {
    target.import(target.bowerDirectory + '/remarkable/dist/remarkable.js');
  },

  isDevelopingAddon: function() {
    return true;
  }
};
