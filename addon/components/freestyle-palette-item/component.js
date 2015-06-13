import Ember from 'ember';
import layout from './template';

const { computed } = Ember;
const { htmlSafe } = Ember.String;

export default Ember.Component.extend({
  layout,
  tagName: '',
  // color - passed in
  paletteStyle: computed('color', function() {
    const color = this.get('color');
    return htmlSafe(`background-color: ${color.base};`);
  })
});
