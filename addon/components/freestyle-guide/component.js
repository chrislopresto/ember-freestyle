import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: '',

  showNav: true,
  showAside: false,

  actions: {
    toggleNav() {
      this.toggleProperty('showNav');
    },
    toggleAside() {
      this.toggleProperty('showAside');
    }
  }
});
