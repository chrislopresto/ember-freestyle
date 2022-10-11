import Modifier from 'ember-modifier';
import { dasherize } from '@ember/string';
import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';

function isObject(o) {
  return typeof o === 'object' && Boolean(o);
}

export default class StyleModifier extends Modifier {
  /**
   * Returns a two-dimensional array, like:
   *
   * ```js
   * [
   *   ['font-size', '16px'],
   *   ['text-align', 'center'],
   *   ['color', 'red']
   * ]
   * ```
   *
   * This data structure is slightly faster to process than an object / dictionary.
   */
  getStyles(positional, named) {
    // This is a workaround for the missing `Array#flat` in IE11.
    return [].concat(
      ...[...positional.filter(isObject), named].map((obj) =>
        Object.entries(obj).map(([k, v]) => [dasherize(k), v])
      )
    );
  }

  setStyles(element, newStyles) {
    const rulesToRemove = this._oldStyles || new Set();

    newStyles.forEach(([property, value]) => {
      assert(
        `Your given value for property '${property}' is ${value} (${typeOf(
          value
        )}). ` +
          'Accepted types are string and undefined. Please change accordingly.',
        typeof value === 'undefined' || typeOf(value) === 'string'
      );

      // priority must be specified as separate argument
      // value must not contain "!important"
      let priority = '';
      if (value && value.includes('!important')) {
        priority = 'important';
        value = value.replace('!important', '');
      }

      // support camelCase property name
      property = dasherize(property);

      // update CSSOM
      element.style.setProperty(property, value, priority);

      // should not remove rules that have been updated in this cycle
      rulesToRemove.delete(property);
    });

    // remove rules that were present in last cycle but aren't present in this one
    rulesToRemove.forEach((rule) => element.style.removeProperty(rule));

    // cache styles that in this rendering cycle for the next one
    this._oldStyles = new Set(newStyles.map((e) => e[0]));
  }

  modify(element, positional, named) {
    this.setStyles(element, this.getStyles(positional, named));
  }
}
