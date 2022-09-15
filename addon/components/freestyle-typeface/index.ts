import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { type EmptyObject } from '@ember/component/helper';

interface Signature {
  Element: HTMLDivElement;
  Args: {
    fontFamily: string;
  };
  Blocks: EmptyObject;
}

export default class FreestyleTypeface extends Component<Signature> {
  get fontFamilyStyle(): ReturnType<typeof htmlSafe> {
    return htmlSafe(`font-family: ${this.args.fontFamily};`);
  }
}
