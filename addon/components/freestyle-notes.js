import Ember from 'ember';
import layout from '../templates/components/freestyle-notes';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',
  emberFreestyle: inject.service(),

  unindent: true,

  _unindent: function(snippet) {
    if (!this.get('unindent')) {
      return snippet;
    }
    let match, min, lines = snippet.split("\n").filter((l) => l !== '');
    for (let i = 0; i < lines.length; i++) {
      match = /^[ \t]*/.exec(lines[i]);
      if (match && (typeof min === 'undefined' || min > match[0].length)) {
        min = match[0].length;
      }
    }
    if (typeof min !== 'undefined' && min > 0) {
      snippet = snippet.replace(new RegExp("^[ \t]{" + min + "}", 'gm'), "");
    }
    return snippet;
  },

  text: computed('name', function() {
    return this._unindent(
      (this.get('emberFreestyle.snippets')[this.get('name')] || '')
        .replace(/^(\s*\n)*/, '')
        .replace(/\s*$/, '')
    );
  })

});
