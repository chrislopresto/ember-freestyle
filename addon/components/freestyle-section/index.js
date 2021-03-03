/* eslint-disable ember/no-component-lifecycle-hooks */

import { inject as service } from '@ember/service';
import { and } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  emberFreestyle: service(),
  get show() {
    return this.emberFreestyle.shouldShowSection(this.name);
  },

  showName: and('emberFreestyle.notFocused', 'name'),
  hasName: and('showName', 'name'),

  willRender() {
    this._super(...arguments);
    this.emberFreestyle.registerSection(this.name);
  },
});
