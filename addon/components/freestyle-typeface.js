import Component from '@ember/component';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import layout from '../templates/components/freestyle-typeface';

export default Component.extend({
  layout,
  classNames: ['FreestyleTypeface'],
  attributeBindings: ['fontFamilyStyle:style'],

  fontFamilyStyle: computed('fontFamily', function() {
    return htmlSafe(`font-family: ${this.get('fontFamily')};`);
  })
});
