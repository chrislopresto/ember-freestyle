/* eslint-disable ember/no-component-lifecycle-hooks */

import { inject as service } from '@ember/service';
import { and } from '@ember/object/computed';
import { isBlank } from '@ember/utils';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  emberFreestyle: service(),
  show: computed('emberFreestyle.section', 'name', function () {
    let focusedSection = this.emberFreestyle.section;
    return isBlank(focusedSection) || this.name === focusedSection;
  }),

  showName: and('emberFreestyle.notFocused', 'name'),
  hasName: and('showName', 'name'),

  willRender() {
    this._super(...arguments);
    this.emberFreestyle.registerSection(this.name);
  },
});
