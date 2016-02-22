import Ember from 'ember';
import layout from '../templates/components/freestyle-collection';

export default Ember.Component.extend({
  layout,
  tagName: '',

  activeKey: 'all',

  registerVariant(variantKey) {
    let variants = this.get('variants') || Ember.A(['all']);
    if (!variants.contains(variantKey)) {
      variants.push(variantKey);
    }
    this.set('variants', variants);
  },

  actions: {
    setActiveKey(variantKey) {
      this.set('activeKey', variantKey);
    }
  }
});
