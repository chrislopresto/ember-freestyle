import Ember from 'ember';
import layout from '../templates/components/freestyle-collection';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleCollection'],

  emberFreestyle: inject.service(),
  showLabels: computed.and('emberFreestyle.notFocused', 'emberFreestyle.showLabels'),
  showVariantList: computed.not('emberFreestyle.focus'),

  defaultKey: 'all',
  activeKey: computed('defaultKey', 'key', 'emberFreestyle.focus', function() {
    if (this.get('emberFreestyle.focus')) {
      return 'all';
    }
    return this.get('key') || this.get('defaultKey');
  }),

  registerVariant(variantKey) {
    Ember.run.next(() => {
      let variants = this.get('variants') || Ember.A(['all']);
      if (!variants.contains(variantKey)) {
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
