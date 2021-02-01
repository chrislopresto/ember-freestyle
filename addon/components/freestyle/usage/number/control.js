import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FreestyleUsageNumberComponent extends Component {
  @action onInput(event) {
    let { value } = event.target;
    this.args.onInput(value ? parseFloat(value) : null);
  }
}
