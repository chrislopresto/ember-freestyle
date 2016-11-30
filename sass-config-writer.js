/* globals require, module */
'use strict';

var fs = require('fs');
var path = require('path');
var Plugin = require('broccoli-plugin');

module.exports = SassConfigWriter;

SassConfigWriter.prototype = Object.create(Plugin.prototype);
SassConfigWriter.prototype.constructor = SassConfigWriter;

/*
 * Converts the contents of a hash (e.g. the `theme` config) into Sass variables, taking
 *   someSection: { value: 'foo' }
 * and emitting
 *   $FreestyleSomeSection-value: foo;
 */
function SassConfigWriter(sassConfig, options) {
  this.sassConfig = sassConfig;
  this.options = options || {};
  Plugin.call(this, [], {
    annotation: this.options.annotation,
    usePersistentOutput: true
  });
}

SassConfigWriter.prototype.build = function() {
  var configPath = path.join(this.outputPath, this.options.outputFile);
  if (fs.existsSync(configPath)) { return; }

  var config = this.sassConfig || {};
  var variables = [];

  Object.keys(config).forEach(function(sectionKey) {
    var prefix = '$Freestyle' + sectionKey.charAt(0).toUpperCase() + sectionKey.substring(1) + '-';
    Object.keys(config[sectionKey]).forEach(function(variableKey) {
      variables.push(prefix + variableKey + ': ' + config[sectionKey][variableKey] + ';');
    });
  });

  fs.writeFileSync(configPath, variables.join('\n'), 'utf-8');
};
