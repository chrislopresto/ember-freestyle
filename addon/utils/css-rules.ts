// module-scope variable to cache an array of all our readable CSS rules
let allRules: CSSRule[] | undefined;

function getReadableCssRules(): CSSRule[] {
  if (!allRules) {
    allRules = Array.from(document.styleSheets)
      .map((ss: CSSStyleSheet) => {
        try {
          return ss.cssRules;
        } catch (e) {
          // Not all stylesheets allow you to access the rules. The restrictions generally match CORS rules.
          return null;
        }
      })
      .filter(Boolean)
      .flatMap((rules: CSSRuleList) => Array.from(rules));
  }
  return allRules;
}

function getStyleDeclarations(selector: string): CSSStyleDeclaration[] {
  return getReadableCssRules()
    .filter((rule: CSSStyleRule) => rule.selectorText === selector)
    .flatMap((rule: CSSStyleRule) => rule.style);
}

export function getCssVariableDefinition(
  variableName: string,
  selector: string
): string {
  // find the last declaration of the selector that contains a value
  // for the CSS variable we're interested in
  const styleDeclaration = getStyleDeclarations(selector)
    .filter((sd) => sd.getPropertyValue(`--${variableName}`))
    .reverse()[0];

  // return the value as defined in this declaration
  return styleDeclaration?.getPropertyValue(`--${variableName}`);
}

export function getComputedValueForCssVariable(
  variableName: string,
  cssClassName: string
): string {
  let element = document.querySelector('.' + cssClassName);
  let tempElement;
  if (!element) {
    // if an element with the specified classname is not present
    // in the DOM, create a temporary one that we can use to read
    // the computed property value
    tempElement = document.createElement('div');
    tempElement.className = cssClassName;
    document.body.appendChild(tempElement);
    element = tempElement;
  }
  const result = getComputedStyle(element).getPropertyValue(
    `--${variableName}`
  );
  tempElement?.remove();
  return result;
}
