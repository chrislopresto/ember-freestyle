import Component from '@glimmer/component';
import { action } from '@ember/object';
import { equal } from 'macro-decorators';

const STRING = 'String';
const BOOL = 'Boolean';
const NUMBER = 'Number';
const OBJECT = 'Object';
export default class FreestyleUsageStringComponent extends Component {
  @action addItem() {
    let { onChange, items } = this.args;
    items.push('');
    onChange && onChange(items);
  }

  @action updateItem(index, value) {
    let { onChange, items } = this.args;
    items[index] = value;
    onChange && onChange(items);
  }

  @action removeItem(index) {
    let { onChange, items } = this.args;
    items.splice(index, 1);
    onChange && onChange(items);
  }

  @equal('args.type', STRING) useStringControl;
  @equal('args.type', BOOL) useBooleanControl;
  @equal('args.type', NUMBER) useNumberControl;
  @equal('args.type', OBJECT) useObjectControl;
}
