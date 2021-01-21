/* eslint-disable ember/no-component-lifecycle-hooks */
/* eslint-disable ember/require-tagless-components */
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  emberFreestyle: service(),

  didInsertElement() {
    this._super(...arguments);
    let pre = this.element.getElementsByTagName('pre');
    if (pre[0]) {
      this.emberFreestyle.highlight(pre[0]);
    }
  },
});
