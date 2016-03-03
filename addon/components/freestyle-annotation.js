import Ember from 'ember';
import layout from '../templates/components/freestyle-annotation';

const { computed, inject } = Ember;

let FreestyleAnnotation = Ember.Component.extend({
  layout,
  classNames: ['FreestyleAnnotation'],
  classNameBindings: ['showNotes:is-showing:is-hidden'],

  emberFreestyle: inject.service(),
  showNotes: computed('emberFreestyle.showNotes', 'emberFreestyle.focus', 'slug', function() {
    let slug = this.get('slug');
    let focus = this.get('emberFreestyle.focus');
    if (focus && slug) {
      return slug.match(focus);
    }
    return this.get('emberFreestyle.showNotes');
  })
});

FreestyleAnnotation.reopenClass({
  positionalParams: ['slug']
});

export default FreestyleAnnotation;
