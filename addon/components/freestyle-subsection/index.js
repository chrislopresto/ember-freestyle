/* eslint-disable ember/no-component-lifecycle-hooks */
import { inject as service } from '@ember/service';
import { and } from '@ember/object/computed';
import { isBlank } from '@ember/utils';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  emberFreestyle: service(),
  show: computed(
    'section',
    'emberFreestyle.{section,subsection}',
    'name',
    function () {
      let focusedSection = this.emberFreestyle.section;
      let showSection =
        isBlank(focusedSection) || this.section === focusedSection;

      if (!showSection) {
        return false;
      }

      let focusedSubsection = this.emberFreestyle.subsection;
      return isBlank(focusedSubsection) || this.name === focusedSubsection;
    }
  ),

  showName: and('emberFreestyle.notFocused', 'name'),
  hasName: and('showName', 'name'),
  willRender() {
    this._super(...arguments);
    this.emberFreestyle.registerSection(this.section, this.name);
  },
});
