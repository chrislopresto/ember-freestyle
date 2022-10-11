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
      .map((rules: CSSRuleList) => Array.from(rules))
      .flat();

    rootStyleDeclarations = allRules
      .filter((rule: CSSStyleRule) => rule.selectorText === ':root')
      .map((rule: CSSStyleRule) => rule.style)
      .flat();
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
    const intialValue = getComputedStyle(document.body)
      .getPropertyValue(`--${name}`)
      ?.trim();
    this.defaults = {
      raw: getRootVariableDefinition(name)?.trim(),
      computed: intialValue,
    };
    this.value = intialValue;
  }

  @action
  update(val: string) {
    this.value = val;
  }
}

/* This decorator dasherizes the property name it is decorating to get
   a css variable name. The default value is looked up on a `:root`
   selector and a populated CSSVariableInfo object is returned.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cssVariable(target: any, key: string): PropertyDescriptor {
  const desc: PropertyDescriptor = {
    get(): CSSVariableInfo {
      const name = dasherize(key);
      if (target[`_${key}`] === undefined) {
        target[`_${key}`] = new CSSVariableInfo(name);
      }
      return target[`_${key}`];
    },
  };

  return desc;
}
