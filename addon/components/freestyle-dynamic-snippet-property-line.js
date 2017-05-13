import Ember from 'ember';
import layout from '../templates/components/freestyle-dynamic-snippet-property-line';

const { computed, computed: { alias } } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',
  useDoubleQuotesForStrings: false,

  propertyValue: alias('propertyHash.value'),

  propertyType: computed('propertyValue', function () {
    return typeof this.get('propertyValue');
  }),

  valueClass: computed('propertyType', function () {
    let propType = this.get('propertyType');
    let type = ['number', 'string'].includes(propType) ? propType: 'literal';
    return `hljs-${type}`
  }),

  renderedValue: computed('propertyType', 'propertyValue', function () {
    let type = this.get('propertyType');
    let value = this.get('propertyValue');
    let quote = this.get('useDoubleQuotesForStrings') ? `"` : `'`;
    return type === 'string' ? `${quote}${value}${quote}` : value;
  })
});
