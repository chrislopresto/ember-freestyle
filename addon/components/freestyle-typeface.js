import Ember from 'ember';
import layout from '../templates/components/freestyle-typeface';

const { computed } = Ember;
const { htmlSafe } = Ember.String;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleTypeface'],
  attributeBindings: ['fontFamilyStyle:style'],

  fontFamilyStyle: computed('fontFamily', function() {
    return htmlSafe(`font-family: ${this.get('fontFamily')};`);
  })
});
