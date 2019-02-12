import { assign } from '@ember/polyfills';
import Component from '@ember/component';
import { set, get, computed } from '@ember/object';
import layout from '../templates/components/freestyle-dynamic';
import { assert } from '@ember/debug';

export default Component.extend({
  layout,
  classNames: ['FreestyleDynamic'],
  headerTitle: 'Dynamic Properties:',
  dynamicProperties: computed(() => ({})),

  // Need this separate property for freestyle-dynamic's dynamic.<property> to work
  dynamicPropertyValues: computed('dynamicProperties', function() {
    let dynamicPropertyValues = {};
    const dynamicProperties = this.get('dynamicProperties');
    Object.keys(dynamicProperties).forEach((propertyName) => {
      dynamicPropertyValues[propertyName] = get(dynamicProperties, `${propertyName}.value`);
    });

    return dynamicPropertyValues;
  }),

  init() {
    this._super(...arguments);
    const dynamicProperties = this.get('dynamicProperties');
    assert(
      `dynamicProperties passed into freestyle-dynamic must be an object.  You passed: ${dynamicProperties}`,
      typeof dynamicProperties === 'object'
    );
  },

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
