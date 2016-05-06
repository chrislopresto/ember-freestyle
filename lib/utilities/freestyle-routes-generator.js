'use strict';

// Credits to from ember-cli-scaffold
// https://github.com/marcioj/ember-cli-scaffold/blob/master/lib/utilities/scaffold-routes-generator.js

var fs                   = require('fs-extra');
var EmberRouterGenerator = require('ember-router-generator');

function addFreestyleRoutes(routerFile, options) {
  var fileContent = fs.readFileSync(routerFile, 'utf8');
  var routes = new EmberRouterGenerator(fileContent);
  var newFileContent = routes
    .add(options.routeName, { type: 'route' })
    .code();

  if(!options.dryRun) {
    fs.writeFileSync(routerFile, newFileContent);
  }

  var status = newFileContent === fileContent ? 'identical' : 'change';
  return status;
}

module.exports.addFreestyleRoutes = addFreestyleRoutes;

function removeFreestyleRoutes(routerFile, options) {
  var fileContent = fs.readFileSync(routerFile, 'utf8');
  var routes = new EmberRouterGenerator(fileContent);
  var newFileContent = routes
    .remove(options.routeName, { type: 'route' })
    .code();

  if(!options.dryRun) {
    fs.writeFileSync(routerFile, newFileContent);
  }

  var status = newFileContent === fileContent ? 'identical' : 'change';
  return status;
}

module.exports.removeFreestyleRoutes = removeFreestyleRoutes;
