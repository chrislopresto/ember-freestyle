import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

type CSSValueOrFuncReturningCSSValue =
  | string
  | number
  | (() => string)
  | undefined;

function formatValue(value: CSSValueOrFuncReturningCSSValue) {
  if (typeof value === 'function') {
    value = value();
  }
  if (typeof value === 'number') {
    value = value.toString();
  }

  return value;
}

export function cssVar(
  pairs: Record<string, CSSValueOrFuncReturningCSSValue>
): string {
  const vars: string[] = [];
  Object.keys(pairs)
    .filter((name) => pairs[name] !== undefined)
    .forEach((name) => {
      vars.push(`--${name}: ${formatValue(pairs[name])}`);
    });

  return vars.join('; ');
}

export default helper(function (
  _params,
  hash: Record<string, CSSValueOrFuncReturningCSSValue>
) {
  return htmlSafe(cssVar(hash));
});
