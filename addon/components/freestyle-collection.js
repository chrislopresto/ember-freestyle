import Ember from 'ember';
import layout from '../templates/components/freestyle-collection';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',

  emberFreestyle: inject.service(),
  showLabels: computed.alias('emberFreestyle.showLabels'),
  showVariantList: computed.not('emberFreestyle.focus'),

  defaultKey: 'all',
  activeKey: computed('defaultKey', 'key', 'emberFreestyle.focus', function() {
    if (this.get('emberFreestyle.focus')) {
      return 'all';
    }
    return this.get('key') || this.get('defaultKey');
  }),

  variants: Ember.A(['all']),

  registerVariant(variantKey) {
    Ember.run.next(() => {
      let variants = this.get('variants');
      if (!variants.contains(variantKey)) {
        variants.pushObject(variantKey);
      }
    });
  },

  actions: {
    setKey(key) {
      this.set('key', key);
    }
  }
});
