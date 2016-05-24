import Ember from 'ember';
import layout from '../templates/components/freestyle-section';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleSection'],
  classNameBindings: ['show:FreestyleSection--showing:FreestyleSection--hidden'],

  emberFreestyle: inject.service(),
  show: computed('emberFreestyle.section', 'name', function() {
    let focusedSection = this.get('emberFreestyle.section');
    return Ember.isBlank(focusedSection) || (this.get('name') === focusedSection);
  }),

  showName: computed.and('emberFreestyle.notFocused', 'name'),
  hasName: computed.and('showName', 'name'),

  willRender() {
    this._super(...arguments);
    this.get('emberFreestyle').registerSection(this.get('name'));
  }
});
