import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias, and } from '@ember/object/computed';
import layout from '../templates/components/freestyle-usage';

let FreestyleUsage = Component.extend({
  layout,
  classNames: ['FreestyleUsage'],
  classNameBindings: ['inline:FreestyleUsage--inline'],
  emberFreestyle: service(),
  showLabels: alias('emberFreestyle.showLabels'),
  showNotes: alias('emberFreestyle.showNotes'),
  showCode: alias('emberFreestyle.showCode'),
  dynamicProperties: computed(() => {}),
  show: computed('emberFreestyle.focus', 'slug', function() {
    let slug = this.get('slug');
    let focus = this.get('emberFreestyle.focus');
    if (focus && slug) {
      return slug.match(focus);
    }
    return true;
  }),
  snippetUsage: computed('slug', function() {
    return `${this.get('slug')}--usage.hbs`;
  }),
  snippetHbs: computed('slug', function() {
    return `${this.get('slug')}.hbs`;
  }),
  snippetJs: computed('slug', function() {
    return `${this.get('slug')}.js`;
  }),
  snippetScss: computed('slug', function() {
    return `${this.get('slug')}.scss`;
  }),
  snippetNotesJs: computed('slug', function() {
    return `${this.get('slug')}--notes.js`;
  }),
  snippetNotesHbs: computed('slug', function() {
    return `${this.get('slug')}--notes.hbs`;
  }),
  snippetNotesScss: computed('slug', function() {
    return `${this.get('slug')}--notes.scss`;
  }),
  defaultTheme: alias('emberFreestyle.defaultTheme'),
  // highlightJsTheme - passed in
  computedTheme: computed('defaultTheme', 'highlightJsTheme', function() {
    return this.get('highlightJsTheme') || this.get('defaultTheme');
  }),

  hasLabels: and('showLabels', 'title'),
  hasNotes: and('showNotes', 'slug'),
  hasCode: and('showCode', 'slug'),

  didInsertElement() {
    this.get('emberFreestyle').ensureHljsTheme(this.get('computedTheme'));
  },

  actions: {
    setFocus() {
      this.set('emberFreestyle.focus', this.get('slug'));
    }
  }
});

FreestyleUsage.reopenClass({
  positionalParams: ['slug']
});

export default FreestyleUsage;
