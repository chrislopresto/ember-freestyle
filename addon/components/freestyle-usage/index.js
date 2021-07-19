/* eslint-disable ember/no-component-lifecycle-hooks */
import { inject as service } from '@ember/service';
import { and, or, readOnly } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';

let FreestyleUsage = Component.extend({
  tagName: '',

  emberFreestyle: service(),
  showLabels: readOnly('emberFreestyle.showLabels'),
  showCode: readOnly('emberFreestyle.showCode'),

  show: computed('emberFreestyle.focus', 'slug', function () {
    let slug = this.slug;
    let focus = this.emberFreestyle.focus;
    if (focus && slug) {
      return slug.match(focus);
    }
    return true;
  }),
  defaultTheme: readOnly('emberFreestyle.defaultTheme'),
  // highlightJsTheme - passed in
  computedTheme: or('defaultTheme', 'highlightJsTheme'),

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
    // eslint-disable-next-line ember/no-assignment-of-untracked-properties-used-in-tracking-contexts
    this.emberFreestyle.focus = this.slug;
  },
});

FreestyleUsage.reopenClass({
  positionalParams: ['slug'],
});

export default FreestyleUsage;
