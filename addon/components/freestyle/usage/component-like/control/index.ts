import Component from '@glimmer/component';
import { action } from '@ember/object';
import type { ComponentLike } from '@glint/template';

interface Signature {
  Args: {
    value?: ComponentLike;
    onChange: (c: ComponentLike | undefined) => void;
    options?: ComponentLike[];
  };
}
export default class FreestyleUsageComponentLikeControlComponent extends Component<Signature> {
  @action
  callOnChange(event: InputEvent): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const eventTarget = event.target as any;
    const componentName = eventTarget?.value;
    const value = this.args.options?.find((c) => c.name === componentName);
    this.args.onChange(value);
  }
}
