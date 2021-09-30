import { isPresent } from '@ember/utils';
import Component from '@glimmer/component';

export default class FreestyleUsageArgumentComponent extends Component {
  get shouldRenderDefaultValue() {
    return isPresent(this.args.defaultValue);
  }

  get typeLabel() {
    return this.args.typeLabel || this.args.type;
  }
}
