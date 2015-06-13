import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  special: computed.equal('status', 'special')
});
