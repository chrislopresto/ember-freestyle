/* jshint node: true */
'use strict';
var jsonModule = require('broccoli-json-module');
var mergeTrees = require('broccoli-merge-trees');
var stew = require('broccoli-stew');

var path = require('path');
var fs   = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var browserify = require('broccoli-browserify');
var flatiron = require('broccoli-flatiron');
var snippetFinder = require('./snippet-finder');

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

  treeForVendor: function(tree){
    // Package up the highlight.js source from its node module.

    var src = this.treeGenerator(path.join(require.resolve('highlight.js'), '..', '..'));

    var highlight = browserify(src, {
      outputFile: 'highlight.js',
      require: [['./lib/index.js', {expose: 'highlight.js'}]]
    });
    return mergeTrees([highlight, tree]);
  },

  treeForStyles: function() {
    var stylesPath = path.join(__dirname, 'app', 'styles');
    var stylesTree = new Funnel(this.treeGenerator(stylesPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });

    var highlightJsTree = new Funnel(unwatchedTree('node_modules/highlight.js/styles'), {
      srcDir: '/',
      destDir: '/app/styles/ember-freestyle/highlight.js'
    });
    highlightJsTree = stew.mv(highlightJsTree, 'app/styles/ember-reveal-js/highlight.js/{zenburn,tomorrow-night,hybrid,atelier-cave-dark}.css', 'app/styles/ember-reveal-js/highlight.js/');
    highlightJsTree = stew.rename(highlightJsTree, '.css', '.scss');

    return mergeTrees([stylesTree, highlightJsTree]);
  },

  included: function(app) {
    app.import('vendor/highlight.js');
  },

  isDevelopingAddon: function() {
    return true;
  }
};
