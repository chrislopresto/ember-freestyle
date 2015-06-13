import Ember from 'ember';
import layout from './template';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  tagName: '',
  layout,
  title: 'Freestyle Palette',
  freestyle: inject.service('ember-freestyle'),
  colorPalette: computed.alias('freestyle.palette.ColorPalette-colors'),
  colors: computed('colorPalette', function() {
    return Ember.A(
      Object.keys(this.get('colorPalette')).map((k) => {
        return this.get('colorPalette')[k];
      })
    );
  })
});
