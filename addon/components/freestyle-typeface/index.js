import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  fontFamilyStyle: computed('fontFamily', function () {
    return htmlSafe(`font-family: ${this.fontFamily};`);
  }),
});
