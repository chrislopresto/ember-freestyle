import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  selected: computed('optionValue', 'selectedValue', function () {
    return this.optionValue === this.selectedValue;
  }),
});
