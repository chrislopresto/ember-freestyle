import Ember from 'ember';
import layout from '../templates/components/freestyle-dynamic';

const { computed: { reads } } = Ember;
let dynamicProperties;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleDynamic'],

  init() {
    this._super(...arguments);
    dynamicProperties = this.get('dynamicProperties');
  },

  getAttrsFromEmberFreestyleDynamic() {
    // 'this' is the called component, NOT freestyle-dynamic
    this.set('freestyleDynamicProperties', dynamicProperties);
    Object.keys(dynamicProperties).forEach((propertyName) => {
      this.set(
        propertyName,
        reads(`freestyleDynamicProperties.${propertyName}.value`)
      );
    });
  }
}).reopenClass({
  positionalParams: ['slug']
});
