/* eslint-disable @typescript-eslint/no-explicit-any */
import { dasherize } from '@ember/string';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  getComputedValueForCssVariable as cssVarComputedValue,
  getCssVariableDefinition as cssVarAuthoredValue,
} from 'ember-freestyle/utils/css-rules';

/*
   This decorator defines a property returning a CssVariableInfo instance.

   The options accepted by the decorator are:

   cssClassName: string;
   toVariableName: (propertyName: string) => string;

   The toVariableName option is used to converts the property name to a
   a css variable name. The default implementation of this callback dasherizes
   the property name to get the css variable name.
   
   The default value (both authored and computed) is looked up on the
   selector specified by options.cssClassName and a CSSVariableInfo is
   initialized and returned.

   If options.cssClassName is not specified, the decorator will try to read
   a `cssClassName` property from the object with the decorated property.
   If this is also not present, an error will be thrown.

   The overloads defined here are needed to handle both the no-args decorator usage
   as well as the version with parentheses. e.g.

   @cssVariable declare fooColor: CSSVariableInfo;
   @cssVariable({ cssClassName: 'Foo' }) declare fooColor: CSSVariableInfo;
 */
export function cssVariable(target: TargetInstance, key: string): any;
export function cssVariable(options: Partial<CSSVariableDecoratorOptions>): any;
export function cssVariable(
  targetOrOptions: TargetInstance | CSSVariableDecoratorOptions,
  key?: string
): any {
  if (typeof key === 'string') {
    return {
      get(): CSSVariableInfo {
        const options = prepareOptions(this, {});
        return getCssVariableInfoMemoized(this, key, options);
      },
    };
  } else {
    return function (_target: TargetInstance, key: string) {
      return {
        get(this: TargetInstance): CSSVariableInfo {
          let options = targetOrOptions as CSSVariableDecoratorOptions;
          options = prepareOptions(this, options);
          return getCssVariableInfoMemoized(this, key, options);
        },
      };
    };
  }
}

export interface CSSVariableDefaults {
  raw: string | undefined;
  computed: string | undefined;
}

export class CSSVariableInfo {
  name: string;
  defaults: CSSVariableDefaults;
  @tracked value: string | undefined;

  constructor(variableName: string, cssClassName: string) {
    this.name = variableName;

    let raw = cssVarAuthoredValue(variableName, '.' + cssClassName);
    raw = raw?.trim() ?? undefined;

    let computed: string | undefined = cssVarComputedValue(
      variableName,
      cssClassName
    );
    computed = computed?.trim() ?? undefined;
    computed = computed === '' ? undefined : computed;

    this.defaults = {
      raw,
      computed,
    };
    this.value = raw ?? computed;
  }

  @action
  update(val: string) {
    this.value = val;
  }
}

// we use a WeakMap in order to allow target instances to be garbage-collected
const memoizationMap = new WeakMap<
  TargetInstance,
  Map<string, CSSVariableInfo>
>();

interface TargetInstance {
  constructor: { name: string };
  cssClassName?: string;
}

interface CSSVariableDecoratorOptions {
  toVariableName: (propertyName: string) => string;
  cssClassName: string; // the CSS class name to use to read the default value of the variable from
}

function getCssVariableInfoMemoized(
  target: TargetInstance,
  key: string,
  options: CSSVariableDecoratorOptions
): CSSVariableInfo {
  if (!memoizationMap.get(target)) {
    memoizationMap.set(target, new Map());
  }
  const memoizedInfos = memoizationMap.get(target);
  if (memoizedInfos) {
    let result = memoizedInfos.get(key);
    if (!result) {
      const name = options.toVariableName(key);
      result = new CSSVariableInfo(name, options.cssClassName);
      memoizedInfos.set(key, result);
    }
    return result;
  } else {
    throw new Error(
      'Unexpected missing key in cssVariable decorator implementation'
    );
  }
}

function prepareOptions(
  targetInstance: TargetInstance,
  userSpecifiedOptions: Partial<CSSVariableDecoratorOptions>
): CSSVariableDecoratorOptions {
  let options = userSpecifiedOptions;
  if (!options.cssClassName) {
    const cssClassName = targetInstance['cssClassName'];
    if (!cssClassName) {
      throw new Error(
        'Must specify `cssClassName` as an option to @cssVariable decorator or define `cssClassName` on the class owning the decorated property'
      );
    }
    options = Object.assign({}, options, { cssClassName });
  }
  return Object.assign(
    {
      toVariableName: dasherize,
    },
    options as Pick<CSSVariableDecoratorOptions, 'cssClassName'> &
      Partial<CSSVariableDecoratorOptions>
  );
}
