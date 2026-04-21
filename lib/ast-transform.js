'use strict';

const stripIndent = require('strip-indent');

function escapeCurlyBraces(s) {
  return s.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
}

function extractSource(nodes, contents) {
  // nodes should be a contiguous collection of ast nodes
  let startNode = nodes[0];
  let endNode = nodes[nodes.length - 1];
  let start = startNode.loc.start;
  let end = endNode.loc.end;
  let lines = contents.split('\n').slice(start.line - 1, end.line);
  lines[0] = new Array(start.column).join(' ') + lines[0].slice(start.column);
  lines[lines.length - 1] = lines[lines.length - 1].slice(0, end.column);
  return escapeCurlyBraces(stripIndent(lines.join('\n')));
}

module.exports = function ({ contents, syntax }) {
  const { builders: b } = syntax;

  return {
    name: 'component-freestyle-source-extracter',

    visitor: {
      ElementNode(node) {
        if (['FreestyleDynamic'].includes(node.tag)) {
          const sourceString = extractSource(node.children, contents);
          node.attributes.push(b.attr('@source', b.text(sourceString)));
        }
        if (['Freestyle::Usage', 'FreestyleUsage'].includes(node.tag)) {
          let exampleNode = node.children.find((n) => n.tag === ':example');
          let sourceString;
          if (exampleNode) {
            sourceString = extractSource(exampleNode.children, contents);
          } else {
            exampleNode = node; // not using named blocks
            sourceString = extractSource(exampleNode.children, contents);
          }
          node.attributes.push(b.attr('@source', b.text(sourceString)));
        }
      },
      BlockStatement(node) {
        if (
          ['freestyle-usage', 'freestyle-dynamic'].includes(
            node.path.original,
          ) &&
          (!node.loc.source ||
            !node.loc.source.includes(
              'templates/components/freestyle-dynamic.hbs',
            ))
        ) {
          const sourceString = extractSource(node.program.body, contents);
          node.hash.pairs.push(b.pair('source', b.string(sourceString)));
        }
      },
    },
  };
};
