import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';

export default class FreestyleUsageNumberComponent extends Component {
  get shouldRenderRangeInput() {
    return isPresent(this.args.min) && isPresent(this.args.max);
  }

  @action onInput(event) {
    let { value } = event.target;
    this.args.onInput(value ? parseFloat(value) : null);
  }
}
