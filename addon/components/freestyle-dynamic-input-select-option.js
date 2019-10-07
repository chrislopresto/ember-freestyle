import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/freestyle-dynamic-input-select-option';

export default Component.extend({
  layout,
  tagName: 'option',
  attributeBindings: ['optionValue:value', 'selected'],

  selected: computed('optionValue', 'selectedValue', function() {
    return this.get('optionValue') === this.get('selectedValue');
  })
});
