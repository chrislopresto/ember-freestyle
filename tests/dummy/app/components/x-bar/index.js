import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class XBar extends Component {
  title = 'Default Title';
  description = 'Default Description';
  size = 'medium';
  showBorder = true;
  isVisible = true;
  isTasteful = false;

  get innerBorderThicknessStyle() {
    const innerBorderThickness = this.args.innerBorderThickness;

    // allow 0
    if (innerBorderThickness != null) {
      return htmlSafe(`border-width: ${innerBorderThickness}px`);
    } else {
      return '';
    }
  }
}
