import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { SafeString } from '@ember/template/-private/handlebars';
import { PaletteItem } from '../freestyle-palette';

interface Signature {
  Element: HTMLDivElement;
  Args: {
    color: PaletteItem;
  };
}

export default class FreestylePaletteItem extends Component<Signature> {
  get paletteStyle(): SafeString {
    const color = this.args.color;
    return htmlSafe(`background-color: ${color.base};`);
  }
}
