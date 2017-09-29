import Ember from 'ember';
import layout from '../templates/components/freestyle-dynamic-input';

const { computed, computed: { equal } } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleDynamic-input'],

  isCheckbox: equal('inputType', 'checkbox'),
  isTextarea: equal('inputType', 'textarea'),
  isSelect: equal('inputType', 'select'),

  inputId: computed('propertyName',  function () {
    return `${this.get('elementId')}_${this.get('propertyName')}`;
  }),

  actions: {
    changeSelectOption(newValue) {
      this.set('value', newValue);
    }
  }
});
