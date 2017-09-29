import Ember from 'ember';
import layout from '../templates/components/freestyle-dynamic';

const { computed, set } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleDynamic'],

  // Need this separate property for freestyle-dynamic's dynamic.<property> to work
  dynamicPropertyValues: computed('dynamicProperties', function () {
    let dynamicPropertyValues = {};
    const dynamicProperties = this.get('dynamicProperties');
    Object.keys(dynamicProperties).forEach((propertyName) => {
      set(
        dynamicPropertyValues,
        propertyName,
        this.get(`dynamicProperties.${propertyName}.value`)
      );
    })

    return dynamicPropertyValues;
  }),

  actions: {
    changeValueTo(property, newValue) {
      this.set(`dynamicProperties.${property}.value`, newValue);
      this.notifyPropertyChange('dynamicPropertyValues');
    }
  }
}).reopenClass({
  positionalParams: ['slug']
});
