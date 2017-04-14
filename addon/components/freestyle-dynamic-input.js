import Ember from 'ember';
import layout from '../templates/components/freestyle-dynamic-input';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleDynamic-input'],

  inputId: computed('propertyName',  function () {
    return `${this.get('elementId')}_${this.get('propertyName')}`;
  })
});
