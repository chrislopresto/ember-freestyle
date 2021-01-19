import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FreestyleUsageStringComponent extends Component {
  @action onTextareaInput(event) {
    let { value } = event.target;
    if (value) {
      value = [value.split(',').filter((v) => v)].flat();
    }
    this.args.onInput(value);
  }

  @action onInput(event) {
    this.args.onInput(event.target.value);
  }
}
