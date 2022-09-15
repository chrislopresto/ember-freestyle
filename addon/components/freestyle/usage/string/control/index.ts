import Component from '@glimmer/component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action } from '@ember/object';

interface Signature {
  Args: {
    value?: string;
    inputEvent?: string;
    onInput: (s: string | null) => void;
    options?: string[];
  };
}
export default class FreestyleUsageStringControlComponent extends Component<Signature> {
  get inputEvent(): string {
    return this.args.inputEvent || 'input';
  }

  @action
  callOnInput(event: InputEvent): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const eventTarget = event.target as any;
    this.args.onInput(eventTarget?.value);
  }
}
