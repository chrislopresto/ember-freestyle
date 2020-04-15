import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from '../templates/components/freestyle-source';

export default Component.extend({
  layout,
  unindent: true,
  initialHighlightComplete: false,
  useDoubleQuotesForStrings: false,
  emberFreestyle: service(),

  _unindent(snippet) {
    if (!this.get('unindent')) {
      return snippet;
    }
    let match, min;
    let lines = snippet.split('\n');
    lines.forEach((line) => {
      // if line is not empty, check length of leading whitespace
      if (line.length > 0) {
        match = /^\s*/.exec(line);
        if (match && (typeof min === 'undefined' || min > match[0].length)) {
          min = match[0].length;
        }
      }
    });
    let unindentedLines = min > 0 ? lines.map((line) => {
      // strip the first 'min' number of characters
      return line.substring(min);
    }) : lines;
    let unindentedSnippet = unindentedLines.join('\n');
    return unindentedSnippet;
  },

  _dynamafy(snippet) {
    let dynamicProperties = this.get('dynamicProperties');
    Object.keys(dynamicProperties).forEach((property) => {
      let propertyValue = get(dynamicProperties, `${property}.value`);
      let type = typeof propertyValue;
      let quote = this.get('useDoubleQuotesForStrings') ? `"` : `'`;

      // First, replace in-block dynamic properties
      snippet = snippet.replace(`{{dynamic.${property}}}`, propertyValue);

      let renderedValue = type === 'string' ? `${quote}${propertyValue}${quote}` : propertyValue;
      snippet = snippet.replace(`dynamic.${property}`, renderedValue);
    })

    return snippet;
  },

  renderableSource: computed('dynamicProperties', 'source', function() {
    let result = this._unindent(this.get('source')
      .replace(/^(\s*\n)*/, '')
      .replace(/\s*$/, '')
    );

    if (this.get('isDynamic')) {
      result = this._dynamafy(result);
    }

    if (this.get('initialHighlightComplete')) {
      let pre = this.element.querySelector('pre');

      if (pre) {
        // highlight.js breaks binding, so we need to manually reset the innerText on changes
        pre.innerText = result;
        // ...and then do the syntax highlighting again
        this.get('emberFreestyle').highlight(pre);
      }
    }

    return result;
  }),

  init() {
    this._super(...arguments);

    this.dynamicProperties = this.dynamicProperties || {};
  },

  didInsertElement() {
    let pre = this.element.querySelector('pre');
    if (pre && this.get('renderableSource')) {
      this.get('emberFreestyle').highlight(pre);
    }
    this.set('initialHighlightComplete', true);
  }
});
