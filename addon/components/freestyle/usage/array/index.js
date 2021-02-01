import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FreestyleUsageStringComponent extends Component {
  // @action onInput(event) {
  //   this.args.onInput(event.target.value);
  // }

  @action addItem() {
    let { onChange, items } = this.args;
    items.push('');
    onChange(items);
  }

  @action updateItem() {
    let { onChange, items } = this.args;
    onChange(items.push('').filter(Boolean));
  }

  @action removeItem(index) {
    let { onChange, items } = this.args;
    onChange(items.splice(index), 1);
  }

  // NOTE: Maybe freestyle can just depend on truth-helpers?
  get useStringControl() {
    return this.args.type === 'String';
  }
}
