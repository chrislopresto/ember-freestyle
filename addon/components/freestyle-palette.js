import Ember from 'ember';
import layout from '../templates/components/freestyle-palette';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: '',
  layout,
  title: 'Freestyle Palette',

  colors: computed('colorPalette', function() {
    return Ember.A(
      Object.keys(this.get('colorPalette')).map((k) => {
        return this.get('colorPalette')[k];
      })
    );
  })
});
