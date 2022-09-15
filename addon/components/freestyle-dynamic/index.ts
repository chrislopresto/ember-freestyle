import Component from '@glimmer/component';
import Owner from '@ember/owner';
import { AttrValue } from '@glint/template';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { action, set, get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
/* eslint-enable @typescript-eslint/no-unused-vars */

export type SupportedValue = boolean | string | AttrValue | number;
export type InputType = 'checkbox' | 'textarea' | 'select' | 'number' | 'range';

interface PropertyHash {
  value?: SupportedValue;
  options?: SupportedValue[];
  inputType?: InputType;
  description?: string;
  min?: number;
  max?: number;
}
export type DynamicProperties = Record<string, PropertyHash>;
type DynamicPropertyValues = Record<string, SupportedValue>;

interface ComponentArgs {
  slug: string;
  dynamicProperties: DynamicProperties;
  title: string;
  componentName: string;
  source?: string;
}

interface Signature {
  Element: HTMLDivElement;
  Args: ComponentArgs;
  Blocks: {
    default: [DynamicPropertyValues];
  };
}

export default class FreestyleDynamic extends Component<Signature> {
  headerTitle = 'Dynamic Properties:';
  @tracked _dynamicProperties = {} as DynamicProperties;

  constructor(owner: Owner, args: ComponentArgs) {
    super(owner, args);
    if (this.args.dynamicProperties) {
      assert(
        `dynamicProperties passed into freestyle-dynamic must be an object.  You passed: ${this.args.dynamicProperties}`,
        typeof this.args.dynamicProperties === 'object'
      );
      this._dynamicProperties = this.args.dynamicProperties;
    }
  }

  get dynamicProperties(): DynamicProperties {
    return this._dynamicProperties;
  }

  // Need this separate property for freestyle-dynamic's dynamic.<property> to work
  get dynamicPropertyValues(): DynamicPropertyValues {
    const dynamicPropertyValues = {} as DynamicPropertyValues;
    const dynamicProperties = this._dynamicProperties;
    Object.keys(dynamicProperties).forEach((propertyName) => {
      dynamicPropertyValues[propertyName] = get(
        dynamicProperties,
        `${propertyName}.value`
      ) as SupportedValue;
    });
    return dynamicPropertyValues;
  }

  @action
  changeValueTo(propertyName: string, newValue: SupportedValue): void {
    // Make a copy and then reset dynamicProperties, to force template changes
    const dynamicProperties = { ...this.dynamicProperties };
    set(dynamicProperties[propertyName], 'value', newValue);
    set(this, '_dynamicProperties', dynamicProperties);
  }
}
