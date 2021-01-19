import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';

let FreestyleAnnotation = Component.extend({
  tagName: '',

  emberFreestyle: service(),
  showNotes: computed('emberFreestyle.{showNotes,focus}', 'slug', function () {
    let slug = this.slug;
    let focus = this.emberFreestyle.focus;
    if (focus && slug) {
      return slug.match(focus);
    }
    return this.emberFreestyle.showNotes;
  }),
});

FreestyleAnnotation.reopenClass({
  positionalParams: ['slug'],
});

export default FreestyleAnnotation;
