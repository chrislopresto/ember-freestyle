import { A } from '@ember/array';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  title: 'Freestyle Palette',

  colors: computed('colorPalette', function () {
    return A(
      Object.keys(this.colorPalette).map((k) => {
        return this.colorPalette[k];
      })
    );
  }),
});
