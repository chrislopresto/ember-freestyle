import Ember from 'ember';
import layout from '../templates/components/freestyle-menu';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',

  emberFreestyle: inject.service(),
  menu: computed.readOnly('emberFreestyle.menu')
});
