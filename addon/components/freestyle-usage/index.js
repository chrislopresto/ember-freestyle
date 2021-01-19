/* eslint-disable ember/no-component-lifecycle-hooks */
import { inject as service } from '@ember/service';
import { alias, and } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';

let FreestyleUsage = Component.extend({
  tagName: '',

  emberFreestyle: service(),
  showLabels: alias('emberFreestyle.showLabels'),
  showCode: alias('emberFreestyle.showCode'),

  show: computed('emberFreestyle.focus', 'slug', function () {
    let slug = this.slug;
    let focus = this.emberFreestyle.focus;
    if (focus && slug) {
      return slug.match(focus);
    }
    return true;
  }),
  defaultTheme: alias('emberFreestyle.defaultTheme'),
  // highlightJsTheme - passed in
  computedTheme: computed.or('defaultTheme', 'highlightJsTheme'),

  hasLabels: and('showLabels', 'title'),
  hasCode: computed('showCode', 'slug', 'source', function () {
    return this.showCode && (this.slug || this.source);
  }),

  init() {
    this._super(...arguments);

    this.dynamicProperties = this.dynamicProperties || {};
  },

  didInsertElement() {
    this._super(...arguments);
    this.emberFreestyle.ensureHljsTheme(this.computedTheme);
  },

  @action
  setFocus() {
    this.emberFreestyle.set('focus', this.slug);
  },
});

FreestyleUsage.reopenClass({
  positionalParams: ['slug'],
});

export default FreestyleUsage;
