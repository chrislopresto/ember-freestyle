import Ember from 'ember';
import layout from '../templates/components/freestyle-palette';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  tagName: '',
  layout,
  title: 'Freestyle Palette',
  freestyle: inject.service('ember-freestyle'),
  colorPalette: computed.alias('freestyle.palette.FreestylePalette'),
  colors: computed('colorPalette', function() {
    return Ember.A(
      Object.keys(this.get('colorPalette')).map((k) => {
        return this.get('colorPalette')[k];
      })
    );
  })
});
