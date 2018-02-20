import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { assign } from '@ember/polyfills';
import layout from '../templates/components/freestyle-dynamic';

export default Component.extend({
  layout,
  classNames: ['FreestyleDynamic'],
  headerTitle: 'Dynamic Properties:',

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
      // Make a copy and then reset dynamicProperties, to force template changes
      let dynamicProperties = assign({}, this.get('dynamicProperties'));
      set(dynamicProperties, `${property}.value`, newValue);

      this.set('dynamicProperties', dynamicProperties);
    }
  }
}).reopenClass({
  positionalParams: ['slug']
});
