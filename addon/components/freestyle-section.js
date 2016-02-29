import Ember from 'ember';
import layout from '../templates/components/freestyle-section';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleSection'],

  emberFreestyle: inject.service(),
  show: computed('emberFreestyle.section', 'name', function() {
    let section = this.get('emberFreestyle.section');
    return Ember.isBlank(section) || (this.get('name') === section);
  }),

  willRender() {
    this._super(...arguments);
    this.get('emberFreestyle').registerSection(this.get('name'));
  }
});
