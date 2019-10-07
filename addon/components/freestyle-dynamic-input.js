import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { equal } from '@ember/object/computed';
import layout from '../templates/components/freestyle-dynamic-input';

export default Component.extend({
  layout,
  classNames: ['FreestyleDynamic-input'],

  isCheckbox: equal('inputType', 'checkbox'),
  isTextarea: equal('inputType', 'textarea'),
  isSelect: equal('inputType', 'select'),
  isNumber: equal('inputType', 'number'),
  isRange: equal('inputType', 'range'),

  inputId: computed('propertyName',  function() {
    return `${this.get('elementId')}_${this.get('propertyName')}`;
  }),

  actions: {
    toggleCheckbox() {
      let newValue = !this.get('value');
      get(this, 'changeValueTo')(newValue);
      return false;
    },
    sendChangedValue(newValue) {
      get(this, 'changeValueTo')(newValue);
    },
    sendChangedNumberValue(newValue) {
      let coercedValue = newValue === '' ? null : Number(newValue);
      get(this, 'changeValueTo')(coercedValue);
    }
  }
});
