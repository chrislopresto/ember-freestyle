import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../templates/components/freestyle-guide';

export default Component.extend({
  layout,
  classNames: ['FreestyleGuide'],

  emberFreestyle: service(),
  highlightJsTheme: alias('emberFreestyle.defaultTheme'),

  showMenu: alias('emberFreestyle.showMenu'),
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
