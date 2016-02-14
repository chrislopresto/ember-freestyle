/* jshint node: true */
'use strict';
var jsonModule = require('broccoli-json-module');
var mergeTrees = require('broccoli-merge-trees');
var stew = require('broccoli-stew');

var path = require('path');
var fs   = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var flatiron = require('broccoli-flatiron');
var snippetFinder = require('./snippet-finder');
var freestyleUsageSnippetFinder = require('./freestyle-usage-snippet-finder');

var Funnel = require('broccoli-funnel');
var unwatchedTree  = require('broccoli-unwatched-tree');

module.exports = {
  name: 'ember-freestyle',

  treeForApp: function(tree) {
    var freestyleTree = jsonModule('freestyle');
    freestyleTree = stew.mv(freestyleTree, 'freestyle');

    var snippets= mergeTrees(this.snippetPaths().filter(function(path){
      return fs.existsSync(path);
    }));

    snippets = mergeTrees(this.snippetSearchPaths().map(function(path){
      return snippetFinder(path);
    }).concat(snippets));

    snippets = mergeTrees(this.snippetSearchPaths().map(function(path){
      return freestyleUsageSnippetFinder(path);
    }).concat(snippets));

    snippets = flatiron(snippets, {
      outputFile: 'snippets.js'
    });

    return mergeTrees([tree, freestyleTree, snippets]);
  },

  snippetPaths: function() {
    return this.app.options.snippetPaths || ['snippets'];
  },

  snippetSearchPaths: function() {
    return this.app.options.snippetSearchPaths || ['app'];
  },

  treeForStyles: function(tree) {
    tree = this._super.treeForStyles.apply(this, [tree]);

    var mappyBreakpointsTree = new Funnel(unwatchedTree(path.dirname(require.resolve('mappy-breakpoints/package.json'))), {
      srcDir: '/',
      destDir: '/app/styles/ember-freestyle',
      files: [
        '_mappy-breakpoints.scss'
      ]
    });

    var highlightJsTree = new Funnel(unwatchedTree(path.dirname(require.resolve('highlight.js/package.json'))), {
      srcDir: '/styles',
      destDir: '/app/styles/ember-freestyle/highlight.js'
    });
    highlightJsTree = stew.rename(highlightJsTree, '.css', '.scss');

    return mergeTrees([mappyBreakpointsTree, highlightJsTree, tree], {
      overwrite: true
    });
  },

  included: function(app) {
    if (app.import) {
      this.importFreestyleBowerDependencies(app);
    }
  },

  importFreestyleBowerDependencies: function(app) {
    app.import(app.bowerDirectory + '/remarkable/dist/remarkable.js');
  },

  isDevelopingAddon: function() {
    return true;
  }
};
