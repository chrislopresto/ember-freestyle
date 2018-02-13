import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/freestyle-variant';

export default Component.extend({
  layout,
  classNames: ['FreestyleVariant'],
  classNameBindings: ['inline:FreestyleVariant--inline'],

  inline: computed('collection.{inline,activeKey}', function() {
    let activeKey = this.get('collection.activeKey');
    return this.get('collection.inline') && (activeKey === 'all');
  }),

  show: computed('collection.activeKey', function() {
    let activeKey = this.get('collection.activeKey');
    return (activeKey === 'all') || (activeKey === this.get('key'));
  }),

  willRender() {
    this._super(...arguments);
    this.get('collection').registerVariant(this.get('key'));
  }
});
