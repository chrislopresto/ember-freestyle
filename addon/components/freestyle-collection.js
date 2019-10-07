import { inject as service } from '@ember/service';
import { and, not } from '@ember/object/computed';
import { A } from '@ember/array';
import { next } from '@ember/runloop';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/freestyle-collection';

export default Component.extend({
  layout,
  classNames: ['FreestyleCollection'],
  classNameBindings: ['inline:FreestyleCollection--inline'],

  emberFreestyle: service(),
  showLabels: and('emberFreestyle.notFocused', 'emberFreestyle.showLabels'),
  hasLabels: and('showLabels', 'title'),
  showVariantList: not('emberFreestyle.focus'),

  defaultKey: 'all',
  activeKey: computed('defaultKey', 'key', 'emberFreestyle.focus', function() {
    if (this.get('emberFreestyle.focus')) {
      return 'all';
    }
    return this.get('key') || this.get('defaultKey');
  }),

  registerVariant(variantKey) {
    next(() => {
      if (this.isDestroyed) { return; }
      let variants = this.get('variants') || A(['all']);
      if (!variants.includes(variantKey)) {
        variants.pushObject(variantKey);
      }
      this.set('variants', variants);
    });
  },

  actions: {
    setKey(key) {
      this.set('key', key);
    }
  }
});
