import Component from '@glimmer/component';
import MutableArray from '@ember/array/mutable';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@ember/object';
import { equal } from 'macro-decorators';

const STRING = 'String';
const BOOL = 'Boolean';
const NUMBER = 'Number';
const OBJECT = 'Object';
/* eslint-enable @typescript-eslint/no-unused-vars */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ItemArray = MutableArray<any>;

interface Signature {
  Args: {
    items: ItemArray;
    identity?: string;
    type: string;
    name?: string;
    description?: string;
    required?: boolean;
    defaultValue?: unknown;
    hideControls?: boolean;
    readOnly?: boolean;
    jsonCollapseDepth?: number;
    onChange: (items: ItemArray) => void;
  };
}

export default class FreestyleUsageArrayComponent extends Component<Signature> {
  @action addItem(): void {
    const { onChange, items } = this.args;
    items.pushObject('');
    onChange && onChange(items);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  @action updateItem(index: number, value: any): void {
    const { onChange, items } = this.args;
    items.replace(index, 1, [value]);
    onChange && onChange(items);
  }

  @action removeItem(index: number): void {
    const { onChange, items } = this.args;
    items.removeAt(index, 1);
    onChange && onChange(items);
  }

  @equal('args.type', STRING) declare useStringControl: boolean;
  @equal('args.type', BOOL) declare useBooleanControl: boolean;
  @equal('args.type', NUMBER) declare useNumberControl: boolean;
  @equal('args.type', OBJECT) declare useObjectControl: boolean;
}
