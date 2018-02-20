import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/freestyle-notes';

export default Component.extend({
  layout,
  tagName: '',
  emberFreestyle: service(),

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
