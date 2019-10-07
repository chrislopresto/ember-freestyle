import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  layout,
  title: 'Default Title',
  description: 'Default Description',
  size: 'medium',
  showBorder: true,
  isVisible: true,
  isTasteful: false,

  innerBorderThicknessStyle: computed('innerBorderThickness', function() {
    const innerBorderThickness = this.get('innerBorderThickness');

    // allow 0
    if (innerBorderThickness != null) {
      return htmlSafe(`border-width: ${innerBorderThickness}px`);
    } else {
      return '';
    }
  })
});
