import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

interface Signature {
  Element: HTMLDivElement;
  Args: {
    fontFamily: string;
  };
}

export default class FreestyleTypeface extends Component<Signature> {
  get fontFamilyStyle(): ReturnType<typeof htmlSafe> {
    return htmlSafe(`font-family: ${this.args.fontFamily};`);
  }
}
