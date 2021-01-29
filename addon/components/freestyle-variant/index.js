/* eslint-disable ember/no-component-lifecycle-hooks */
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  inline: computed('collection.{inline,activeKey}', function () {
    let activeKey = this.collection.activeKey;
    return this.collection.inline && activeKey === 'all';
  }),

  show: computed('collection.activeKey', 'key', function () {
    let activeKey = this.collection.activeKey;
    return activeKey === 'all' || activeKey === this.key;
  }),

  willRender() {
    this._super(...arguments);
    this.collection.registerVariant(this.key);
  },
});
