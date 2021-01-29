/* eslint-disable no-console */
'use strict';
const stripIndent = require('strip-indent');

class AstTransform {
  constructor(env) {
    this.originalSource = env.contents;
  }

  extractSource(nodes) {
    // nodes should be a contiguous collection of ast nodes
    let startNode = nodes[0];
    let endNode = nodes[nodes.length - 1];
    let start = startNode.loc.start;
    let end = endNode.loc.end;
    let lines = this.originalSource.split('\n').slice(start.line - 1, end.line);
    lines[0] = new Array(start.column).join(' ') + lines[0].slice(start.column);
    lines[lines.length - 1] = lines[lines.length - 1].slice(0, end.column);
    return stripIndent(lines.join('\n'));
  }

  transform(ast) {
    const plugin = this;
    const { builders: b } = this.syntax;
    const visitor = {
      ElementNode(node) {
        if (['FreestyleUsage', 'FreestyleDynamic'].includes(node.tag)) {
          const sourceString = plugin.extractSource(node.children);
          node.attributes.push(b.attr('@source', b.text(sourceString)));
        }
      },
      BlockStatement(node) {
        if (
          ['freestyle-usage', 'freestyle-dynamic'].includes(
            node.path.original
          ) &&
          (!node.loc.source ||
            !node.loc.source.includes(
              'templates/components/freestyle-dynamic.hbs'
            ))
        ) {
          const sourceString = plugin.extractSource(node.program.body);
          node.hash.pairs.push(b.pair('source', b.string(sourceString)));
        }
      },
    };

    this.syntax.traverse(ast, visitor);
    return ast;
  }
}

module.exports = AstTransform;
