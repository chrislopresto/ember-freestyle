import Ember from 'ember';
import layout from '../templates/components/freestyle-variant-list';

export default Ember.Component.extend({
  layout,

  actions: {
    onClickItem(variantKey) {
      this.onClickVariant(variantKey);
    }
  }
});
