import Ember from 'ember';
import layout from '../templates/components/freestyle-dynamic-snippet';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleUsage-snippet'],
  classNameBindings: ['computedThemeClass'],

  computedThemeClass: computed('computedTheme', function () {
    return `FreestyleUsage-snippet--${this.get('computedTheme')}`;
  })
});
