import Ember from 'ember';
import layout from '../templates/components/freestyle-snippet';

const { computed, inject } = Ember;

const LANGUAGES = {
  js: 'javascript',
  hbs: 'handlebars',
  css: 'css',
  scss: 'scss',
  less: 'less',
  md: 'markdown'
};

export default Ember.Component.extend({
  layout,
  unindent: true,
  emberFreestyle: inject.service(),

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

  source: computed('name', function() {
    return this._unindent(
      (this.get('emberFreestyle.snippets')[this.get('name')] || '')
        .replace(/^(\s*\n)*/, '')
        .replace(/\s*$/, '')
    );
  }),

  didInsertElement() {
    let pre = this.$('pre');
    if (pre[0] && this.get('source')) {
      this.get('emberFreestyle').highlight(pre[0]);
    }
  },

  language: computed('name', function() {
    if (this.get('name').indexOf(':notes') >= 0) {
      return 'markdown';
    }

    let match = /\.(\w+)$/i.exec(this.get('name'));
    if (match) {
      return LANGUAGES[match[1]];
    }
  })
});
