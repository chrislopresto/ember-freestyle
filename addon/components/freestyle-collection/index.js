import { inject as service } from '@ember/service';
import { and, not } from '@ember/object/computed';
import { A } from '@ember/array';
import { next } from '@ember/runloop';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default Component.extend({
  tagName: '',

  emberFreestyle: service(),
  showLabels: and('emberFreestyle.notFocused', 'emberFreestyle.showLabels'),
  hasLabels: and('showLabels', 'title'),
  showVariantList: not('emberFreestyle.focus'),

  defaultKey: 'all',
  activeKey: computed('defaultKey', 'key', 'emberFreestyle.focus', function () {
    if (this.emberFreestyle.focus) {
      return 'all';
    }
    return this.key || this.defaultKey;
  }),

  registerVariant(variantKey) {
    next(() => {
      if (this.isDestroyed) {
        return;
      }
      let variants = this.variants || A(['all']);
      if (!variants.includes(variantKey)) {
        variants.pushObject(variantKey);
      }
      this.set('variants', variants);
    });
  },

  @action
  setKey(key) {
    this.set('key', key);
  },
});
