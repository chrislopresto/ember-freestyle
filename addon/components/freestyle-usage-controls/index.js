/* eslint-disable ember/no-component-lifecycle-hooks */
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { schedule } from '@ember/runloop';
import Component from '@ember/component';
import { capitalize } from '@ember/string';
import { action } from '@ember/object';

export default Component.extend({
  tagName: '',
  emberFreestyle: service(),
  showLabels: alias('emberFreestyle.showLabels'),
  showNotes: alias('emberFreestyle.showNotes'),
  showCode: alias('emberFreestyle.showCode'),

  showHeader: true,
  showFocus: true,

  didInsertElement() {
    this._super(...arguments);
    schedule('afterRender', () => {
      this.set('focus', this.emberFreestyle.focus);
    });
  },

  @action
  toggleUsage(usageType) {
    let usageProperty = `emberFreestyle.show${capitalize(usageType)}`;
    this.toggleProperty(usageProperty);
  },

  @action
  setFocus() {
    this.emberFreestyle.set('focus', this.focus);
  },
});
