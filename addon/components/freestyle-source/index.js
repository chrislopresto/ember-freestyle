/* eslint-disable ember/no-component-lifecycle-hooks */
/* eslint-disable ember/require-tagless-components */
import { set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  initialHighlightComplete: false,
  useDoubleQuotesForStrings: false,
  emberFreestyle: service(),

  _dynamafy(sourceCode) {
    let dynamicProperties = this.dynamicProperties;
    Object.keys(dynamicProperties).forEach((property) => {
      let propertyValue = get(dynamicProperties, `${property}.value`);
      let type = typeof propertyValue;
      let quote = this.useDoubleQuotesForStrings ? `"` : `'`;
      let angleAssignmentVal =
        type === 'string'
          ? `${quote}${propertyValue}${quote}`
          : `{{${propertyValue}}}`;
      let curlyAssignmentVal =
        type === 'string' ? `${quote}${propertyValue}${quote}` : propertyValue;
      let expressionVal = propertyValue;

      // First, replace in-block dynamic properties
      sourceCode = sourceCode.replace(
        `={{dynamic.${property}}}`,
        `=${angleAssignmentVal}`
      );
      sourceCode = sourceCode.replace(
        `=dynamic.${property}`,
        `=${curlyAssignmentVal}`
      );
      sourceCode = sourceCode.replace(`{{dynamic.${property}}}`, expressionVal);
    });

    return sourceCode;
  },

  renderableSource: computed(
    'dynamicProperties',
    'element',
    'initialHighlightComplete',
    'isDynamic',
    'source',
    function () {
      let result = this.source.replace(/^(\s*\n)*/, '').replace(/\s*$/, '');

      if (this.isDynamic) {
        result = this._dynamafy(result);
      }

      if (this.initialHighlightComplete) {
        let pre = this.element.querySelector('pre');

        if (pre) {
          // highlight.js breaks binding, so we need to manually reset the innerText on changes
          pre.innerText = result;
          // ...and then do the syntax highlighting again
          this.emberFreestyle.highlight(pre);
        }
      }

      return result;
    }
  ),

  init() {
    this._super(...arguments);

    set(this, 'dynamicProperties', this.dynamicProperties || {});
  },

  didInsertElement() {
    this._super(...arguments);
    let pre = this.element.querySelector('pre');
    if (pre && this.renderableSource) {
      this.emberFreestyle.highlight(pre);
    }
    this.set('initialHighlightComplete', true);
  },
});
