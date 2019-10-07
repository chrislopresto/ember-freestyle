import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/freestyle-annotation';

let FreestyleAnnotation = Component.extend({
  layout,
  classNames: ['FreestyleAnnotation'],
  classNameBindings: ['showNotes:is-showing:is-hidden'],

  emberFreestyle: service(),
  showNotes: computed('emberFreestyle.{showNotes,focus}', 'slug', function() {
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
