import Component from '@glimmer/component';
import { isPresent } from '@ember/utils';
import { type CSSVariableDefaults } from 'ember-freestyle';

interface Signature {
  Args: {
    name?: string;
    description?: string;
    defaultValue?: CSSVariableDefaults;
    type?: string;
    hideControls?: boolean;
    value?: string;
    options?: string[];
    onInput: (val: string | null | undefined) => void;
  };
}

export default class FreestyleUsageBasicCssVariableComponent extends Component<Signature> {
  get shouldRenderDefaultValue(): boolean {
    return isPresent(this.args.defaultValue);
  }
  get shouldRenderDefaultComputed(): boolean {
    const { defaultValue } = this.args;
    return (
      defaultValue?.computed !== undefined &&
      defaultValue.computed !== defaultValue.raw
    );
  }
}
