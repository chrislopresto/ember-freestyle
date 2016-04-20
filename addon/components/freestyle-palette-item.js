import Ember from 'ember';
import layout from '../templates/components/freestyle-palette-item';

const { computed } = Ember;
const { htmlSafe } = Ember.String;

export default Ember.Component.extend({
  layout,
  tagName: '',
  // color - passed in
  paletteStyle: computed('color', function() {
    let color = this.get('color');
    return htmlSafe(`background-color: ${color.base};`);
  })
});
