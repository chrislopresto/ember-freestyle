import { isPresent } from '@ember/utils';
import Component from '@glimmer/component';

interface Signature {
  Args: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValue?: any;
    description?: string;
    name?: string;
    type?: string;
    typeLabel?: string;
    required?: boolean;
    hideControls?: boolean;
  };
  Blocks: {
    default: [];
  };
}

export default class FreestyleUsageArgumentComponent extends Component<Signature> {
  get shouldRenderDefaultValue(): boolean {
    return isPresent(this.args.defaultValue);
  }

  get typeLabel(): string | undefined {
    return this.args.typeLabel || this.args.type;
  }
}
