import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FreestyleUsageBoolComponent extends Component {
  @action onInput(event) {
    this.args.onInput(event.target.checked);
  }
}
