import { inject as service } from '@ember/service';
import { and } from '@ember/object/computed';
import { isBlank } from '@ember/utils';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/freestyle-subsection';

export default Component.extend({
  layout,
  classNames: ['FreestyleSubsection'],
  classNameBindings: ['show:is-showing:is-hidden'],
  emberFreestyle: service(),
  show: computed('section', 'emberFreestyle.{section,subsection}', 'name', function() {
    let focusedSection = this.get('emberFreestyle.section');
    let showSection = isBlank(focusedSection) || (this.get('section') === focusedSection);

    if (!showSection) {
      return false;
    }

    let focusedSubsection = this.get('emberFreestyle.subsection');
    return isBlank(focusedSubsection) || (this.get('name') === focusedSubsection);
  }),

  showName: and('emberFreestyle.notFocused', 'name'),
  hasName: and('showName', 'name'),
  willRender() {
    this._super(...arguments);
    this.get('emberFreestyle').registerSection(
      this.get('section'),
      this.get('name')
    );
  }
});
