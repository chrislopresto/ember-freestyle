import { inject as service } from '@ember/service';
import { alias, and } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/freestyle-usage';

let FreestyleUsage = Component.extend({
  layout,
  classNames: ['FreestyleUsage'],
  classNameBindings: ['inline:FreestyleUsage--inline'],

  emberFreestyle: service(),
  showLabels: alias('emberFreestyle.showLabels'),
  showCode: alias('emberFreestyle.showCode'),

  show: computed('emberFreestyle.focus', 'slug', function() {
    let slug = this.get('slug');
    let focus = this.get('emberFreestyle.focus');
    if (focus && slug) {
      return slug.match(focus);
    }
    return true;
  }),
  defaultTheme: alias('emberFreestyle.defaultTheme'),
  // highlightJsTheme - passed in
  computedTheme: computed('defaultTheme', 'highlightJsTheme', function() {
    return this.get('highlightJsTheme') || this.get('defaultTheme');
  }),

  hasLabels: and('showLabels', 'title'),
  hasCode: computed('showCode', 'slug', 'source', function() {
    return this.get('showCode') && (this.get('slug') || this.get('source'));
  }),

  init() {
    this._super(...arguments);

    this.dynamicProperties = this.dynamicProperties || {};
  },

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
