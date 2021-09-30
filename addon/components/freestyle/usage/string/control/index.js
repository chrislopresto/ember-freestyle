import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class FreestyleUsageStringControlComponent extends Component {
  get inputEvent() {
    return this.args.inputEvent || 'input';
  }

  @action
  callOnInput(event) {
    this.args.onInput(event.target.value);
  }
}
