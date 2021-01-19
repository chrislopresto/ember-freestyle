import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import { action } from '@ember/object';

export default Component.extend({
  tagName: '',

  isCheckbox: equal('inputType', 'checkbox'),
  isTextarea: equal('inputType', 'textarea'),
  isSelect: equal('inputType', 'select'),
  isNumber: equal('inputType', 'number'),
  isRange: equal('inputType', 'range'),

  inputId: computed('elementId', 'propertyName', function () {
    return `${this.elementId}_${this.propertyName}`;
  }),

  @action
  toggleCheckbox() {
    let newValue = !this.value;
    this.changeValueTo(newValue);
    return false;
  },
  @action
  onChange(ev) {
    this.changeValueTo(ev.target.value);
  },
  @action
  sendChangedText(text) {
    this.changeValueTo(text);
  },
  @action
  onChangeWithNumericCoercion(ev) {
    let newValue = ev.target.value;
    let coercedValue = newValue === '' ? null : Number(newValue);
    this.changeValueTo(coercedValue);
  },
});
