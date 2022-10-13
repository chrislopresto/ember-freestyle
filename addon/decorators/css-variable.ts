import { dasherize } from '@ember/string';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

let rootStyleDeclarations: CSSStyleDeclaration[] | undefined;

function getRootStyleDeclarations(): CSSStyleDeclaration[] {
  if (!rootStyleDeclarations) {
    const allRules: CSSRule[] = Array.from(document.styleSheets)
      .map((ss: CSSStyleSheet) => {
        try {
          return ss.cssRules;
        } catch (e) {
          return null;
        }
      })
      .filter(Boolean)
      .flatMap((rules: CSSRuleList) => Array.from(rules));

    rootStyleDeclarations = allRules
      .filter((rule: CSSStyleRule) => rule.selectorText === ':root')
      .flatMap((rule: CSSStyleRule) => rule.style);
  }
  return rootStyleDeclarations;
}

function getRootVariableDefinition(name: string): string {
  const rootStyleDeclarations = getRootStyleDeclarations();
  const styleDeclaration = rootStyleDeclarations
    .filter((sd) => sd.getPropertyValue(`--${name}`))
    .reverse()[0];

  return styleDeclaration?.getPropertyValue(`--${name}`);
}

export interface CSSVariableDefaults {
  raw: string;
  computed: string;
}

export class CSSVariableInfo {
  name: string;
  defaults: CSSVariableDefaults;
  @tracked value: string;

  constructor(name: string) {
    this.name = name;
    const initialValue = getComputedStyle(document.body)
      .getPropertyValue(`--${name}`)
      ?.trim();
    this.defaults = {
      raw: getRootVariableDefinition(name)?.trim(),
      computed: initialValue,
    };
    this.value = initialValue;
  }

  @action
  update(val: string) {
    this.value = val;
  }
}

const memoizationMap = new WeakMap<
  Record<string, unknown>,
  Map<string, CSSVariableInfo>
>();

/* This decorator dasherizes the property name it is decorating to get
   a css variable name. The default value is looked up on a `:root`
   selector and a populated CSSVariableInfo object is returned.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cssVariable(target: any, key: string): PropertyDescriptor {
  const desc: PropertyDescriptor = {
    get(): CSSVariableInfo {
      if (!memoizationMap.get(target)) {
        memoizationMap.set(target, new Map());
      }
      const memoizedInfos = memoizationMap.get(target);
      if (memoizedInfos) {
        let result = memoizedInfos.get(key);
        if (!result) {
          // TODO: extract a method to convert property name to CSS Variable name and make it configurable
          const name = dasherize(key);
          result = new CSSVariableInfo(name);
          memoizedInfos.set(key, result);
        }
        return result;
      } else {
        throw new Error(
          'Unexpected missing key in cssVariable decorator implementation'
        );
      }
    },
  };

  return desc;
}
