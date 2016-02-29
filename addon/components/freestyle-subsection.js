import Ember from 'ember';
import layout from '../templates/components/freestyle-subsection';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleSubsection'],

  emberFreestyle: inject.service(),
  show: computed('emberFreestyle.subsection', 'name', function() {
    let subsection = this.get('emberFreestyle.subsection');
    return Ember.isBlank(subsection) || (this.get('name') === subsection);
  }),

  willRender() {
    this._super(...arguments);
    this.get('emberFreestyle').registerSection(
      this.get('section'),
      this.get('name')
    );
  }
});
