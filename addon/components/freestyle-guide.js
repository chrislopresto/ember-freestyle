import Ember from 'ember';
import layout from '../templates/components/freestyle-guide';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleGuide'],

  emberFreestyle: inject.service(),
  highlightJsTheme: computed.alias('emberFreestyle.defaultTheme'),

  showMenu: computed.alias('emberFreestyle.showMenu'),
  showAside: false,

  actions: {
    toggleNav() {
      this.toggleProperty('showMenu');
    },
    toggleAside() {
      this.toggleProperty('showAside');
    }
  }
});
