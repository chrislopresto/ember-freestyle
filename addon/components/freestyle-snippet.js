import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from '../templates/components/freestyle-snippet';


const LANGUAGES = {
  js: 'javascript',
  hbs: 'handlebars',
  css: 'css',
  scss: 'scss',
  less: 'less',
  md: 'markdown'
};

export default Component.extend({
  layout,
  unindent: true,
  initialHighlightComplete: false,
  useDoubleQuotesForStrings: false,
  emberFreestyle: service(),
  dynamicProperties: computed(() => {}),

  _unindent(snippet) {
    if (!this.get('unindent')) {
      return snippet;
    }
    let match, min;
    let unindentedSnippet = snippet;
    let lines = unindentedSnippet.split('\n');
    for (let i = 0; i < lines.length; i++) {
      match = /^\s*/.exec(lines[i]);
      if (match && (typeof min === 'undefined' || min > match[0].length)) {
        min = match[0].length;
      }
    }
    if (typeof min !== 'undefined' && min > 0) {
      unindentedSnippet = unindentedSnippet.replace(new RegExp(`(\\n|^)\\s{${min}}`, 'g'), '$1');
    }
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

  source: computed('dynamicProperties', 'name', function() {
    let source = this._unindent(
      (this.get('emberFreestyle.snippets')[this.get('name')] || '')
        .replace(/^(\s*\n)*/, '')
        .replace(/\s*$/, '')
    );

    if (this.get('isDynamic')) {
      source = this._dynamafy(source);
    }

    if (this.get('initialHighlightComplete')) {
      let pre = this.$('pre');

      if (pre[0]) {
        // highlight.js breaks binding, so we need to manually reset the innerText on changes
        pre[0].innerText = source;
        // ...and then do the syntax highlighting again
        this.get('emberFreestyle').highlight(pre[0]);
      }
    }

    return source;
  }),

  didInsertElement() {
    let pre = this.get('element').getElementsByTagName('pre');
    if (pre[0] && this.get('source')) {
      this.get('emberFreestyle').highlight(pre[0]);
    }
    this.set('initialHighlightComplete', true);
  },

  language: computed('name', function() {
    if (this.get('name').indexOf('--notes') >= 0) {
      return 'markdown';
    }

    let match = /\.(\w+)$/i.exec(this.get('name'));
    if (match) {
      return LANGUAGES[match[1]];
    }
  })
});
