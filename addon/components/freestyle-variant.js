import Ember from 'ember';
import layout from '../templates/components/freestyle-variant';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  classNames: ['FreestyleVariant'],
  classNameBindings: ['inline:FreestyleVariant--inline'],

  inline: computed('collection.inline', 'collection.activeKey', function() {
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
