import Component from '@glimmer/component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action } from '@ember/object';

interface Signature {
  Args: {
    value?: boolean;
    onInput: (val: boolean) => void;
  };
}

export default class FreestyleUsageBoolControlComponent extends Component<Signature> {
  @action
  callOnInput(event: InputEvent): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const eventTarget = event.target as any;
    this.args.onInput(eventTarget.checked);
  }
}
