import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  tagName: '',
  title: 'Default Title',
  description: 'Default Description',
  size: 'medium',
  showBorder: true,
  isVisible: true,
  isTasteful: false,

  innerBorderThicknessStyle: computed('innerBorderThickness', function () {
    const innerBorderThickness = this.innerBorderThickness;

    // allow 0
    if (innerBorderThickness != null) {
      return htmlSafe(`border-width: ${innerBorderThickness}px`);
    } else {
      return '';
    }
  }),
});
