'use strict';

const stripIndent = require('strip-indent');

function hasNamedBlocksPolyfillSyntax(node) {
  return (
    node.children.length === 1 &&
    node.children[0].path &&
    node.children[0].path.original === 'if' &&
    node.children[0].params[0].path.original === '-is-named-block-invocation'
  );
}

function extractFromNamedBlocksPolyfillSyntax(node) {
  if (node.children[0].params[0].params[1].value === 'example') {
    return node.children[0].program;
  } else if (
    node.children[0].inverse.body[0].params[0].params[1].value === 'example'
  ) {
    return node.children[0].inverse.body[0].program;
  } else if (
    node.children[0].inverse.body[0].inverse.body[0].params[0].params[1]
      .value == 'example'
  ) {
    return node.children[0].inverse.body[0].inverse.body[0].program;
  }
}

function cleanupNamedBlocksPolyfillSyntax(sourceString) {
  sourceString = sourceString.trim();
  sourceString = sourceString.replace(
    /({{#if \(-is-named-block-invocation __arg0 "(.+?)"\)}})(\s*)(.*?)(\s*){{\/if}}/gs,
    '\n  <:$2>$3$4$5</:$2>\n',
  );
  sourceString = sourceString.replace(
    / @namedBlocksInfo={{hash .+?=0}} as \|__arg0\|/,
    '',
  );
  sourceString = sourceString.replace(/(\s\s+)/g, '\n$1');
  sourceString = sourceString.replace(/ @(\w+)=/g, '\n  @$1=');
  sourceString =
    sourceString +
    `

  <!-- Formatting lost due to named-blocks-polyfill. Fallback re-formatting applied.
       Original source code formatting will be available once the polyfill is no longer needed. -->
  `;
  return sourceString;
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
  return stripIndent(lines.join('\n'));
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
          // Note: if the ember-named-blocks-polyfill polyfill AST transform executed before ours, our code will not work
          // Due to a bug in ember, the current way to ensure this is to configure freestyle to run *after* named-blocks-polyfill
          // via the ember-addon section of freestyle's package.json. ¯\_(ツ)_/¯
          let exampleNode = node.children.find((n) => n.tag === ':example');
          let sourceString;
          if (exampleNode) {
            sourceString = extractSource(exampleNode.children, contents);
          } else if (hasNamedBlocksPolyfillSyntax(node)) {
            // Unfortunately, we may still run after the named-blocks-polyfill when in an Ember Addon, so we do the best we can here.
            exampleNode = extractFromNamedBlocksPolyfillSyntax(node);
            sourceString = extractSource(exampleNode.body, contents);
            sourceString = cleanupNamedBlocksPolyfillSyntax(sourceString);
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
