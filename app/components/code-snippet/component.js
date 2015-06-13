import Ember from "ember";
import Snippets from "../../snippets";

/* global require */
var Highlight = require('highlight.js');

export default Ember.Component.extend({
  tagName: 'pre',
  classNameBindings: ['language'],
  unindent: true,

  _unindent: function(src) {
    if (!this.get('unindent')) {
      return src;
    }
    var match, min, lines = src.split("\n");
    for (var i = 0; i < lines.length; i++) {
      match = /^\s*/.exec(lines[i]);
      if (match && (typeof min === 'undefined' || min > match[0].length)) {
        min = match[0].length;
      }
    }
    if (typeof min !== 'undefined' && min > 0) {
      src = src.replace(new RegExp("(\\n|^)\\s{" + min + "}", 'g'), "$1");
    }
    return src;
  },

  source: Ember.computed('name', function(){
    return this._unindent(
      (Snippets[this.get('name')] || "")
        .replace(/^(\s*\n)*/, '')
        .replace(/\s*$/, '')
    );
  }),

  didInsertElement: function() {
    if (this.get('source')) {
      Highlight.highlightBlock(this.get('element'));
    }
  },

  language: Ember.computed('name', function(){
    var m = /\.(\w+)$/i.exec(this.get('name'));
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
      }
    }
  })
});
