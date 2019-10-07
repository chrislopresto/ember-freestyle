import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../templates/components/freestyle-showdown-content';

export default Component.extend({
  layout,

  emberFreestyle: service(),

  didInsertElement() {
    let pre = this.get('element').getElementsByTagName('pre');
    if (pre[0]) {
      this.get('emberFreestyle').highlight(pre[0]);
    }
  },
});
