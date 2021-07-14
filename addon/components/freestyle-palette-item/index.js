import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  // color - passed in
  paletteStyle: computed('color', function () {
    let color = this.color;
    return htmlSafe(`background-color: ${color.base};`);
  }),
});
