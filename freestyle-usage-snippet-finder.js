/*eslint-env node*/

const glob = require('glob');
const fs = require('fs');
const path = require('path');
const BroccoliPlugin = require('broccoli-plugin');

function naiveMerge(obj1, obj2) {
  let obj3 = {};
  let prop;
  for (prop in obj1) { obj3[prop] = obj1[prop]; }
  for (prop in obj2) { obj3[prop] = obj2[prop]; }
  return obj3;
}

function findFiles(srcDir) {
  return new Promise(function(resolve, reject) {
    glob(path.join(srcDir, "**/*.+(js|hbs|css|scss|less)"), function(err, files) {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

function extractHbsComponentSnippets(fileContent, componentName, ui) {
  let processingSnippet = false;
  let insideOpeningTag = false;
  let snippetLines = [];
  let snippets = {};
  let name;
  fileContent.split("\n").forEach(function(line) {
    if (processingSnippet) {
      if (insideOpeningTag) {
        // Test for start of closing curlies {{/freestyle-usage
        if (new RegExp('\\{\\{\\/' + componentName).test(line)) {
          processingSnippet = false;
          insideOpeningTag = false;
          snippets[name] = snippetLines.join("\n");
          snippetLines = [];
        } else {
          snippetLines.push(line);
        }
      } else {
        insideOpeningTag = line.indexOf('}}') >= 0; // curlies closed }}
      }
    } else {
      // Test for start of opening curlies {{#freestyle-usage 'human-readable-name'
      var m = new RegExp('\\{\\{#' + componentName + '\\s+[\'|"](\\S+)[\'|"].*').exec(line);
      if (m) {
        processingSnippet = true;
        insideOpeningTag = m[0].indexOf('}}') >= 0; // curlies closed }}
        // Extract snippet positional name param via regex match
        name = m[1];
        // TODO: Cleanup freestyle-notes vs freestyle-usage disambiguation here
        if (name.indexOf('--notes') >= 0) {
          if (snippets[name]) {
            ui.writeLine('ember-freestyle detected multiple instances of the freestyle-note slug "' + name +'"');
          }
        } else {
          if (snippets[name + '--usage']) {
            ui.writeLine('ember-freestyle detected multiple instances of the freestyle-usage slug "' + name +'"');
          }
          name += '--usage';
        }
      }
    }
  });
  return snippets;
}

function extractCommentSnippets(fileContent) {
  let inside = false;
  let content = [];
  let output = {};
  let name;
  fileContent.split("\n").forEach(function(line) {
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

module.exports = class SnippetFinder extends BroccoliPlugin {
  constructor(inputTree, ui) {
    super(inputTree, {});
    this.inputTree = inputTree;
    this.ui = ui;
  }

  build() {
    return findFiles(this.inputPaths[0]).then((files) => {
      files.forEach((filename) => {
        let freestyleUsageSnippets = extractHbsComponentSnippets(fs.readFileSync(filename, 'utf-8'), 'freestyle-usage', this.ui);
        let freestyleDynamicSnippets = extractHbsComponentSnippets(fs.readFileSync(filename, 'utf-8'), 'freestyle-dynamic', this.ui);
        let freestyleNoteSnippets = extractHbsComponentSnippets(fs.readFileSync(filename, 'utf-8'), 'freestyle-note', this.ui);
        let componentSnippets = naiveMerge(naiveMerge(freestyleUsageSnippets, freestyleDynamicSnippets), freestyleNoteSnippets);
        let commentSnippets = extractCommentSnippets(fs.readFileSync(filename, 'utf-8'));
        let snippets = naiveMerge(componentSnippets, commentSnippets);
        for (var name in snippets) {
          fs.writeFileSync(path.join(this.outputPath, name)+path.extname(filename),
                           snippets[name]);
        }
      });
    });
  }
};
