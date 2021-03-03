/* eslint-disable ember/no-component-lifecycle-hooks */
import { inject as service } from '@ember/service';
import { and } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  emberFreestyle: service(),
  show: computed(
    'section',
    'emberFreestyle.{allowRenderingAllSections,section,subsection}',
    'name',
    function () {
      return this.emberFreestyle.shouldShowSubsection(this.section, this.name);
    }
  ),

  showName: and('emberFreestyle.notFocused', 'name'),
  hasName: and('showName', 'name'),
  willRender() {
    this._super(...arguments);
    this.emberFreestyle.registerSection(this.section, this.name);
  },
});
