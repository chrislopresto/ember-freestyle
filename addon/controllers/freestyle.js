import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Controller.extend({
  emberFreestyle: inject.service(),

  queryParams: ['l', 'n', 'c', 'm', 'f', 's', 'ss'],

  l: computed.alias('emberFreestyle.showLabels'),
  n: computed.alias('emberFreestyle.showNotes'),
  c: computed.alias('emberFreestyle.showCode'),

  m: computed.alias('emberFreestyle.showMenu'),

  f: computed.alias('emberFreestyle.focus'),

  s: computed.alias('emberFreestyle.section'),
  ss: computed.alias('emberFreestyle.subsection')
});
