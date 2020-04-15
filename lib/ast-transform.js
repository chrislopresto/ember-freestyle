/* eslint-disable no-console */
'use strict';

class AstTransform {
  transform(ast) {
    const { builders:b, print } = this.syntax;
    const visitor = {
      ElementNode(node) {
        if (["FreestyleUsage", "FreestyleDynamic"].includes(node.tag)) {
          const sourceString = print({ type: "Program", body: node.children });
          node.attributes.push(
            b.attr(
              "@source",
              b.text(sourceString)
            )
          );
        }
      },
      BlockStatement(node) {
        if (
          ["freestyle-usage", "freestyle-dynamic"].includes(node.path.original) &&
          (!node.loc.source || !node.loc.source.includes('templates/components/freestyle-dynamic.hbs'))
        ) {
          const sourceString = print({ type: "Program", body: node.program.body });
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
