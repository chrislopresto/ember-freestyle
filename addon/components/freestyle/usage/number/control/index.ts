import Component from '@glimmer/component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';

interface Signature {
  Args: {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    onInput: (val: number | null) => void;
  };
  Blocks: {
    default: [];
  };
}

export default class FreestyleUsageNumberControlComponent extends Component<Signature> {
  get shouldRenderRangeInput(): boolean {
    return isPresent(this.args.min) && isPresent(this.args.max);
  }

  @action onInput(event: InputEvent): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const eventTarget = event.target as any;
    const value = eventTarget?.value;
    this.args.onInput(value ? parseFloat(value) : null);
  }
}
