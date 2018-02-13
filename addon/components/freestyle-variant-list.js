import Component from '@ember/component';
import layout from '../templates/components/freestyle-variant-list';

export default Component.extend({
  layout,

  actions: {
    onClickItem(variantKey) {
      this.onClickVariant(variantKey);
    }
  }
});
