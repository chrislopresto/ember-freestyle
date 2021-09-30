import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class FreestyleUsageBoolControlComponent extends Component {
  @action
  callOnInput(event) {
    this.args.onInput(event.target.checked);
  }
}
