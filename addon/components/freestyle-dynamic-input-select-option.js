import Ember from 'ember';
import layout from '../templates/components/freestyle-dynamic-input-select-option';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'option',
  attributeBindings: ['optionValue:value', 'selected'],

  selected: computed('optionValue', 'selectedValue', function () {
    return this.get('optionValue') === this.get('selectedValue');
  })
});
