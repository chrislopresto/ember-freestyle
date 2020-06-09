/* eslint-disable no-debugger */
/* eslint-disable no-console */
'use strict';
const stripIndent = require ('strip-indent');

class AstTransform {
  constructor(env) {
    this.originalSource = env.contents;
  }

  extractSource(nodes) { // nodes should be a contiguous collection of ast nodes
    let startNode = nodes[0];
    let endNode = nodes[nodes.length - 1];
    let start = startNode.loc.start;
    let end = endNode.loc.end;
    let lines = this.originalSource.split("\n").slice(start.line - 1, end.line);
    lines[0] = new Array(start.column).join(' ') + lines[0].slice(start.column);
    lines[lines.length - 1] = lines[lines.length - 1].slice(0, end.column);
    return stripIndent(lines.join("\n"));
  }

  transform(ast) {
    const plugin = this;
    const { builders:b } = this.syntax;
    const visitor = {
      ElementNode(node) {
        if (["FreestyleUsage", "FreestyleDynamic"].includes(node.tag)) {
          const sourceString = plugin.extractSource(node.children);
          node.attributes.push(
            b.attr(
              "@source",
              b.text(sourceString)
            )
          );
        }
        if (["Freestyle::Item"].includes(node.tag)) {
          // This statement
          //
          // node.attributes.filter(an => an.name === '@namedBlocksInfo')[0].value.hash.pairs.map(hp => hp.key).indexOf('example')
          //
          // will return 0 or 1, which lets us know the position of the example named block inside the Freestyle::Item
          // children. Based on our current understanding, we'd have to implement a brittle mapping to one of the following
          // two expressions:
          //
          // If example is index 0...
          // plugin.extractSource(node.children[0].program.body)
          //
          // If example is index 1...
          // plugin.extractSource(node.children[0].inverse.body[0].program.body)
          //
          // This is brittle and silly. If a user added another named child, we'd
          // have to hash into the nested else if structure detailed here:
          // https://github.com/ember-polyfills/ember-named-blocks-polyfill/blob/cb8eb677662b9fab31332400e9c220b0c4b32280/lib/named-blocks-polyfill-plugin.js#L413-L445
          //
          // If example is index 2...
          // plugin.extractSource(node.children[0].inverse.body[0].inverse.body[0].program.body)
          //
          // To do:
          // - Understand how the order of ember-freestyle and ember-named-blocks-polyfill AST transforms is determined
          //
          // Possible paths forward:
          // - Fix polyfill to emit meaningful node.loc information, if node.loc was in fact meaningful before the polyfill was applied
          // - Contextual components
          // - The brittle addressing scheme detailed above
          // - Ensure our AST runs before the ember-named-blocks-polyfill AST
          debugger;
        }
      },
      BlockStatement(node) {
        if (
          ["freestyle-usage", "freestyle-dynamic"].includes(node.path.original) &&
          (!node.loc.source || !node.loc.source.includes('templates/components/freestyle-dynamic.hbs'))
        ) {
          const sourceString = plugin.extractSource(node.program.body);
          node.hash.pairs.push(b.pair(
            "source",
            b.string(sourceString)
          ));
        }
      }
    }

    this.syntax.traverse(ast, visitor);
    return ast;
  }
}

module.exports = AstTransform
