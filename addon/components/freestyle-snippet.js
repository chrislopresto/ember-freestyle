import Ember from 'ember';
import layout from '../templates/components/freestyle-snippet';

const { computed, inject } = Ember;

/* global hljs */

export default Ember.Component.extend({
  layout,
  unindent: true,
  emberFreestyle: inject.service(),

  _unindent(src) {
    if (!this.get('unindent')) {
      return src;
    }
    let match;
    let min;
    let lines = src.split('\n');
    for (let i = 0; i < lines.length; i++) {
      match = /^\s*/.exec(lines[i]);
      if (match && (typeof min === 'undefined' || min > match[0].length)) {
        min = match[0].length;
      }
    }
    if (typeof min !== 'undefined' && min > 0) {
      src = src.replace(new RegExp(`(\\n|^)\\s{${min}}`, 'g'), '$1');
    }
    return src;
  },

  source: computed('name', function() {
    return this._unindent(
      (this.get('emberFreestyle.snippets')[this.get('name')] || '')
        .replace(/^(\s*\n)*/, '')
        .replace(/\s*$/, '')
    );
  }),

  didInsertElement() {
    if (this.get('source')) {
      hljs.highlightBlock(this.$('pre')[0]);
    }
  },

  language: computed('name', function() {
    let m = /\.(\w+)$/i.exec(this.get('name'));
    if (this.get('name').indexOf(':notes:') >= 0) {
      return 'markdown';
    }
    if (m) {
      switch (m[1].toLowerCase()) {
      case 'js':
        return 'javascript';
      case 'hbs':
        return 'handlebars';
      case 'css':
        return 'css';
      case 'scss':
        return 'scss';
      case 'less':
        return 'less';
      case 'md':
        return 'markdown';
      }
    }
  })
});
