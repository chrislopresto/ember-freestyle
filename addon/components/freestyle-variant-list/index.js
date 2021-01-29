import Component from '@ember/component';
import { action } from '@ember/object';

export default Component.extend({
  tagName: '',
  @action
  onClickItem(variantKey) {
    this.onClickVariant(variantKey);
  },
});
