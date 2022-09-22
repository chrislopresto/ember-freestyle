import Component from '@glimmer/component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action } from '@ember/object';

interface Signature {
  Args: {
    name?: string;
    description?: string;
    required?: boolean;
    defaultValue?: boolean;
    hideControls?: boolean;
    value?: boolean;
    onInput: (val: boolean) => void;
  };
  Blocks: {
    default: [];
  };
}
export default class FreestyleUsageBoolComponent extends Component<Signature> {
  @action onInput(event: InputEvent): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const eventTarget = event.target as any;
    this.args.onInput(eventTarget.checked);
  }
}
