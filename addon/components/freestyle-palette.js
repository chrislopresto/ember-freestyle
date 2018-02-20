import Component from '@ember/component';
import { computed } from '@ember/object';
import { A } from '@ember/array';
import layout from '../templates/components/freestyle-palette';

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
