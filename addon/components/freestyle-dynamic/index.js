import { assign } from '@ember/polyfills';
import Component from '@ember/component';
import { set, get, computed } from '@ember/object';
import { assert } from '@ember/debug';
import { action } from '@ember/object';

export default Component.extend({
  tagName: '',
  headerTitle: 'Dynamic Properties:',

  // Need this separate property for freestyle-dynamic's dynamic.<property> to work
  dynamicPropertyValues: computed('dynamicProperties', function () {
    let dynamicPropertyValues = {};
    const dynamicProperties = this.dynamicProperties;
    Object.keys(dynamicProperties).forEach((propertyName) => {
      dynamicPropertyValues[propertyName] = get(
        dynamicProperties,
        `${propertyName}.value`
      );
    });

    return dynamicPropertyValues;
  }),

  init() {
    this._super(...arguments);
    let dynamicProperties = this.dynamicProperties;

    if (dynamicProperties) {
      assert(
        `dynamicProperties passed into freestyle-dynamic must be an object.  You passed: ${dynamicProperties}`,
        typeof dynamicProperties === 'object'
      );
    } else {
      set(this, 'dynamicProperties', {});
    }
  },

  @action
  changeValueTo(property, newValue) {
    // Make a copy and then reset dynamicProperties, to force template changes
    let dynamicProperties = assign({}, this.dynamicProperties);
    set(dynamicProperties, `${property}.value`, newValue);

    this.set('dynamicProperties', dynamicProperties);
  },
}).reopenClass({
  positionalParams: ['slug'],
});
