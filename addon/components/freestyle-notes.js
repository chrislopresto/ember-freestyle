import Ember from 'ember';
import layout from '../templates/components/freestyle-notes';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',
  emberFreestyle: inject.service(),

  unindent: true,

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

  text: computed('name', function() {
    return this._unindent(
      (this.get('emberFreestyle.snippets')[this.get('name')] || '')
        .replace(/^(\s*\n)*/, '')
        .replace(/\s*$/, '')
    );
  })

});
