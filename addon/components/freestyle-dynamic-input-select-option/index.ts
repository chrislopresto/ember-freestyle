import Component from '@glimmer/component';
import { AttrValue } from '@glint/template';

interface Signature {
  Element: HTMLOptionElement;
  Args: {
    optionValue: AttrValue;
    selectedValue: AttrValue;
  };
}

export default class FreestyleDynamicInputSelectOption extends Component<Signature> {
  get selected(): boolean {
    return this.args.optionValue === this.args.selectedValue;
  }
}
