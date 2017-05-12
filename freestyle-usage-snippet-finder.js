/*eslint-env node*/

var Writer = require('broccoli-writer');
var glob = require('glob');
var _Promise = require('es6-promise').Promise;
var fs = require('fs');
var path = require('path');

function naiveMerge(obj1, obj2){
  var obj3 = {};
  var prop;
  for (prop in obj1) { obj3[prop] = obj1[prop]; }
  for (prop in obj2) { obj3[prop] = obj2[prop]; }
  return obj3;
}

function findFiles(srcDir) {
  return new _Promise(function(resolve, reject) {
    glob(path.join(srcDir, "**/*.+(js|hbs|css|scss|less)"), function (err, files) {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

function extractHbsComponentSnippets(fileContent, componentName, ui) {
  var matched = false;
  var inside = false;
  var content = [];
  var output = {};
  var name;
  fileContent.split("\n").forEach(function(line) {
    if (matched) {
      if (inside) {
        // Test for start of closing curlies {{/
        if (new RegExp('\\{\\{\\/' + componentName).test(line)) {
          matched = false;
          inside = false;
          output[name] = content.join("\n");
          content = [];
        } else {
          content.push(line);
        }
      } else {
        inside = line.indexOf('}}') >= 0; // curlies closed }}
      }
    } else {
      // Test for start of opening curlies {{#freestyle-usage 'name'
      var m = new RegExp('\\{\\{#' + componentName + '\\s+[\'|"](\\S+)[\'|"].*').exec(line);
      if (m) {
        matched = true;
        inside = m[0].indexOf('}}') >= 0; // curlies closed }}
        name = m[1];
        // TODO: Cleanup freestyle-notes vs freestyle-usage disambiguation here
        if (name.indexOf('--notes') >= 0) {
          if (output[name]) {
            ui.writeLine('ember-freestyle detected multiple instances of the freestyle-note slug "' + name +'"');
          }
        } else {
          if (output[name + '--usage']) {
            ui.writeLine('ember-freestyle detected multiple instances of the freestyle-usage slug "' + name +'"');
          }
          name += '--usage';
        }
      }
    }
  });
  return output;
}

function extractCommentSnippets(fileContent) {
  var inside = false;
  var content = [];
  var output = {};
  var name;
  fileContent.split("\n").forEach(function(line){
    if (inside) {
      if (/\bEND-FREESTYLE-USAGE\b/.test(line)) {
        inside = false;
        output[name] = content.join("\n");
        content = [];
      } else {
        content.push(line);
      }
    } else {
      var m = /\bBEGIN-FREESTYLE-USAGE\s+(\S+)\b/.exec(line);
      if (m) {
        inside = true;
        name = m[1];
      }
    }
  });
  return output;
}

function SnippetFinder(inputTree, ui) {
  if (!(this instanceof SnippetFinder)){
    return new SnippetFinder(inputTree, ui);
  }
  this.inputTree = inputTree;
  this.ui = ui;
}

SnippetFinder.prototype = Object.create(Writer.prototype);
SnippetFinder.prototype.constructor = SnippetFinder;

SnippetFinder.prototype.write = function (readTree, destDir) {
  var self = this;
  return readTree(this.inputTree).then(findFiles).then(function(files) {
    files.forEach(function(filename) {
      var freestyleUsageSnippets = extractHbsComponentSnippets(fs.readFileSync(filename, 'utf-8'), 'freestyle-usage', self.ui);
      var freestyleNoteSnippets = extractHbsComponentSnippets(fs.readFileSync(filename, 'utf-8'), 'freestyle-note', self.ui);
      var componentSnippets = naiveMerge(freestyleUsageSnippets, freestyleNoteSnippets);
      var commentSnippets = extractCommentSnippets(fs.readFileSync(filename, 'utf-8'));
      var snippets = naiveMerge(componentSnippets, commentSnippets);
      for (var name in snippets){
        fs.writeFileSync(path.join(destDir, name)+path.extname(filename),
                         snippets[name]);
      }
    });
  });
};

module.exports = SnippetFinder;
