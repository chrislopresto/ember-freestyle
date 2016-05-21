import Ember from 'ember';
import layout from '../templates/components/freestyle-subsection';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleSubsection'],

  emberFreestyle: inject.service(),
  show: computed('section', 'emberFreestyle.section', 'emberFreestyle.subsection', 'name', function() {
    let focusedSection = this.get('emberFreestyle.section');
    let showSection = Ember.isBlank(focusedSection) || (this.get('section') === focusedSection);

    if (!showSection) {
      return false;
    }

    let focusedSubsection = this.get('emberFreestyle.subsection');
    return Ember.isBlank(focusedSubsection) || (this.get('name') === focusedSubsection);
  }),

  showName: computed.and('emberFreestyle.notFocused', 'name'),
  hasName: computed.and('showName', 'name'),
  willRender() {
    this._super(...arguments);
    this.get('emberFreestyle').registerSection(
      this.get('section'),
      this.get('name')
    );
  }
});
