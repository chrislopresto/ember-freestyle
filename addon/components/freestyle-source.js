import { inject as service } from "@ember/service";
import Component from "@ember/component";
import { computed, get } from "@ember/object";
import layout from "../templates/components/freestyle-source";

export default Component.extend({
  layout,
  initialHighlightComplete: false,
  useDoubleQuotesForStrings: false,
  emberFreestyle: service(),

  _dynamafy(sourceCode) {
    let dynamicProperties = this.get("dynamicProperties");
    Object.keys(dynamicProperties).forEach((property) => {
      let propertyValue = get(dynamicProperties, `${property}.value`);
      let type = typeof propertyValue;
      let quote = this.get("useDoubleQuotesForStrings") ? `"` : `'`;

      // First, replace in-block dynamic properties
      sourceCode = sourceCode.replace(`{{dynamic.${property}}}`, propertyValue);

      let renderedValue =
        type === "string" ? `${quote}${propertyValue}${quote}` : propertyValue;
      sourceCode = sourceCode.replace(`dynamic.${property}`, renderedValue);
    });

    return sourceCode;
  },

  renderableSource: computed("dynamicProperties", "source", function() {
    let result = this.get("source")
        .replace(/^(\s*\n)*/, "")
        .replace(/\s*$/, "")

    if (this.get("isDynamic")) {
      result = this._dynamafy(result);
    }

    if (this.get("initialHighlightComplete")) {
      let pre = this.element.querySelector("pre");

      if (pre) {
        // highlight.js breaks binding, so we need to manually reset the innerText on changes
        pre.innerText = result;
        // ...and then do the syntax highlighting again
        this.get("emberFreestyle").highlight(pre);
      }
    }

    return result;
  }),

  init() {
    this._super(...arguments);

    this.dynamicProperties = this.dynamicProperties || {};
  },

  didInsertElement() {
    let pre = this.element.querySelector("pre");
    if (pre && this.get("renderableSource")) {
      this.get("emberFreestyle").highlight(pre);
    }
    this.set("initialHighlightComplete", true);
  },
});
