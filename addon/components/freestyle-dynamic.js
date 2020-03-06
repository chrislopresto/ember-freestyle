import { assign } from '@ember/polyfills';
import Component from '@ember/component';
import { set, get, computed } from '@ember/object';
import layout from '../templates/components/freestyle-dynamic';
import { assert } from '@ember/debug';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,
  classNames: ['FreestyleDynamic'],
  emberFreestyle: service(),
  headerTitle: 'Dynamic Properties',

  // Need this separate property for freestyle-dynamic's dynamic.<property> to work
  dynamicPropertyValues: computed('dynamicProperties', function() {
    let dynamicPropertyValues = {};
    const dynamicProperties = this.get('dynamicProperties');
    Object.keys(dynamicProperties).forEach((propertyName) => {
      dynamicPropertyValues[propertyName] = get(dynamicProperties, `${propertyName}.value`);
    });

    return dynamicPropertyValues;
  }),

  show: computed('emberFreestyle.focus', 'slug', function() {
    let slug = this.get('slug');
    let focus = this.get('emberFreestyle.focus');
    if (focus && slug) {
      return !!slug.match(focus);
    }
    return true;
  }),

  init() {
    this._super(...arguments);
    let dynamicProperties = this.get('dynamicProperties');

    if (dynamicProperties) {
      assert(
        `dynamicProperties passed into freestyle-dynamic must be an object.  You passed: ${dynamicProperties}`,
        typeof dynamicProperties === 'object'
      );
    } else {
      this.dynamicProperties = {};
    }
  },

  actions: {
    changeValueTo(property, newValue) {
      // Make a copy and then reset dynamicProperties, to force template changes
      let dynamicProperties = assign({}, this.get('dynamicProperties'));
      set(dynamicProperties, `${property}.value`, newValue);

      this.set('dynamicProperties', dynamicProperties);
    },
    setFocus() {
      this.set('emberFreestyle.focus', this.get('slug'));
    }
  }
}).reopenClass({
  positionalParams: ['slug']
});
