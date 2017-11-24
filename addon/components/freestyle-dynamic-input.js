import Ember from 'ember';
import layout from '../templates/components/freestyle-dynamic-input';

const { computed, computed: { equal } } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleDynamic-input'],

  isCheckbox: equal('inputType', 'checkbox'),
  isTextarea: equal('inputType', 'textarea'),
  isSelect: equal('inputType', 'select'),
  isNumber: equal('inputType', 'number'),

  inputId: computed('propertyName',  function () {
    return `${this.get('elementId')}_${this.get('propertyName')}`;
  }),

  actions: {
    toggleCheckbox() {
      let newValue = !this.get('value');
      this.attrs.changeValueTo(newValue);
      return false;
    },
    sendChangedValue(newValue) {
      this.attrs.changeValueTo(newValue);
    }
  }
});
