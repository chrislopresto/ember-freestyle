import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { type EmptyObject } from '@ember/component/helper';
import { InputType, SupportedValue } from '../freestyle-dynamic';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@ember/object';
import { equal } from 'macro-decorators';
/* eslint-enable @typescript-eslint/no-unused-vars */

interface Signature {
  Element: HTMLDivElement;
  Args: {
    description?: string;
    inputType?: InputType;
    propertyName: string;
    value: SupportedValue;
    options?: SupportedValue[];
    min?: number;
    max?: number;
    changeValueTo: (val: SupportedValue) => void;
  };
  Blocks: EmptyObject;
}

export default class FreestyleDynamicInput extends Component<Signature> {
  @equal('args.inputType', 'checkbox') declare isCheckbox: boolean;
  @equal('args.inputType', 'textarea') declare isTextarea: boolean;
  @equal('args.inputType', 'select') declare isSelect: boolean;
  @equal('args.inputType', 'number') declare isNumber: boolean;
  @equal('args.inputType', 'range') declare isRange: boolean;

  get inputId(): string {
    return `${guidFor(this)}_${this.args.propertyName}`;
  }

  @action
  toggleCheckbox(): boolean {
    const newValue = !this.args.value;
    this.args.changeValueTo(newValue);
    return false;
  }

  @action
  onChange(ev: Event): void {
    this.args.changeValueTo((ev.target as HTMLSelectElement).value);
  }

  @action
  sendChangedText(ev: InputEvent): void {
    this.args.changeValueTo((ev.target as HTMLTextAreaElement).value);
  }

  @action
  onChangeWithNumericCoercion(ev: InputEvent): void {
    const newValue = (ev.target as HTMLInputElement).value;
    const coercedValue = newValue === '' ? null : Number(newValue);
    this.args.changeValueTo(coercedValue);
  }
}
