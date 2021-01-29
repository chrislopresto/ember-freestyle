import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import { action } from '@ember/object';

export default Component.extend({
  tagName: '',

  emberFreestyle: service(),
  highlightJsTheme: alias('emberFreestyle.defaultTheme'),

  showMenu: alias('emberFreestyle.showMenu'),
  showAside: false,

  @action
  toggleNav() {
    this.toggleProperty('showMenu');
  },

  @action
  toggleAside() {
    this.toggleProperty('showAside');
  },
});
