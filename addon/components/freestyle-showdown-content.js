import Ember from 'ember';
import layout from '../templates/components/freestyle-showdown-content';

const { inject } = Ember;

export default Ember.Component.extend({
  layout,

  emberFreestyle: inject.service(),

  didInsertElement() {
    let pre = this.$('pre');
    if (pre[0]) {
      this.get('emberFreestyle').highlight(pre[0]);
    }
  },
});
