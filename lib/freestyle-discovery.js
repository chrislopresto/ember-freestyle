'use strict';
var Writer = require('broccoli-writer');
var path = require('path');
var glob = require('glob');
var fs = require('fs');

FreestyleDiscovery.prototype = Object.create(Writer.prototype);
FreestyleDiscovery.prototype.constructor = FreestyleDiscovery;

function FreestyleDiscovery(inputTree, options) {
  if (!(this instanceof FreestyleDiscovery)) {
    return new FreestyleDiscovery(inputTree, options);
  }

  this.inputTree = inputTree;
  var freestyleComponentName = options.freestyleComponentName || 'freestyle';
  var defaultGlobPattern = `**/{${freestyleComponentName}/component.js,${options.appName}/components/${freestyleComponentName}/**/*.js}`;
  this.options = {
    outputFile: options.outputFile,
    freestyleComponentName: freestyleComponentName,
    componentPathGlobPattern: options.componentPathGlobPattern || defaultGlobPattern,
    extractComponentName: options.extractComponentName || function extractComponentName(componentPath) {
      // Extract a freestyle component name that looks like:
      // x-bay/freestyle
      // from a componentPath that looks like:
      // /Users/xxxxx/p/xxxxx/ember-freestyle/tmp/broccoli_merge_trees-output_path-7BiiNpHw.tmp/dummy/components/x-bay/freestyle/component.js
      // or
      // /Users/xxxxx/p/xxxxx/ember-freestyle/tmp/broccoli_merge_trees-output_path-7BiiNpHw.tmp/dummy/components/x-bay/freestyle.js
      var regexp = new RegExp(`${options.appName}/components/(.+/${freestyleComponentName})(?:/component)?.js$`);
      var match = regexp.exec(componentPath);
      if (!match) {
        regexp = new RegExp(`${options.appName}/components/(${freestyleComponentName}/.+)(?:/component)?.js$`);
        match = regexp.exec(componentPath);
      }
      if (match) {
        return match[1].replace(/\/component$/,'');
      }
    }
  };
}

FreestyleDiscovery.prototype.write = function(readTree, destDir) {
  var _this = this;
  var componentPathGlobPattern = this.options.componentPathGlobPattern;
  var extractComponentName = this.options.extractComponentName;

  return readTree(this.inputTree).then(function(srcDir) {
    var files = glob.sync(path.join(srcDir, componentPathGlobPattern));
    var components = files.map(extractComponentName).filter((name) => {
      return name && !(/template$/.test(name));
    });
    var output = `export default ${JSON.stringify(components)};`;
    fs.mkdirSync(path.join(destDir, path.dirname(_this.options.outputFile)));
    fs.writeFileSync(path.join(destDir, _this.options.outputFile), output);
  });
}

module.exports = FreestyleDiscovery;
