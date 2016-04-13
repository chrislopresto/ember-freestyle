import Ember from 'ember';
import layout from '../templates/components/freestyle-palette';

const { A, computed, Component } = Ember;

export default Component.extend({
  tagName: '',
  layout,
  title: 'Freestyle Palette',

  colors: computed('colorPalette', function() {
    return A(
      Object.keys(this.get('colorPalette')).map((k) => {
        return this.get('colorPalette')[k];
      })
    );
  })
});
