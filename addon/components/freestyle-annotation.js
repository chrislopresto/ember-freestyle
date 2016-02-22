import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  classNames: ['FreestyleAnnotation'],
  classNameBindings: ['showNotes:is-showing:is-hidden'],

  emberFreestyle: inject.service(),
  showNotes: computed.alias('emberFreestyle.showNotes')
});
