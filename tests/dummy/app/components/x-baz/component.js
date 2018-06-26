import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  title: 'Default Title',
  description: 'Default Description',
  size: 'medium',
  showBorder: true,
  isVisible: true,
  isTasteful: false,
});
