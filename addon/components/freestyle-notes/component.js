import Ember from 'ember';
import layout from './template';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',
  emberFreestyle: inject.service(),

  unindent: true,

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

  text: computed('name', function() {
    return this._unindent(
      (this.get('emberFreestyle.snippets')[this.get('name')] || '')
        .replace(/^(\s*\n)*/, '')
        .replace(/\s*$/, '')
    );
  })

});
