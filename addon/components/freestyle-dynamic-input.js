/* eslint-disable ember/no-attrs-in-components */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import layout from '../templates/components/freestyle-dynamic-input';

export default Component.extend({
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
    },
    sendChangedNumberValue(newValue) {
      let coercedValue = newValue === '' ? null : Number(newValue);
      this.attrs.changeValueTo(coercedValue);
    }
  }
});
