import Component from '@glimmer/component';
import EmberFreestyleService from '../../services/ember-freestyle';
import { service } from '@ember/service';
import { reads } from 'macro-decorators';
import { get } from '@ember/object';
import { modifier } from 'ember-modifier';

interface Signature {
  Args: {
    source?: string;
    isDynamic?: boolean;
    dynamicProperties?: Record<string, unknown>;
    useDoubleQuotesForStrings?: boolean;
  };
}

export default class FreestyleSource extends Component<Signature> {
  @service('ember-freestyle') declare emberFreestyle: EmberFreestyleService;
  @reads('args.dynamicProperties', {}) declare dynamicProperties: Record<
    string,
    unknown
  >;
  initialHighlightComplete = false;
  preElement: HTMLElement | undefined;

  private dynamafy(sourceCode: string) {
    const dynamicProperties = this.dynamicProperties;
    Object.keys(dynamicProperties).forEach((property) => {
      const propertyValue = get(dynamicProperties, `${property}.value`);
      const type = typeof propertyValue;
      const quote = this.args.useDoubleQuotesForStrings ? `"` : `'`;
      const angleAssignmentVal =
        type === 'string'
          ? `${quote}${propertyValue}${quote}`
          : `{{${propertyValue}}}`;
      const curlyAssignmentVal =
        type === 'string' ? `${quote}${propertyValue}${quote}` : propertyValue;
      const expressionVal = propertyValue;

      // First, replace in-block dynamic properties
      sourceCode = sourceCode.replace(
        `={{dynamic.${property}}}`,
        `=${angleAssignmentVal}`,
      );
      sourceCode = sourceCode.replace(
        `=dynamic.${property}`,
        `=${curlyAssignmentVal}`,
      );
      sourceCode = sourceCode.replace(
        `{{dynamic.${property}}}`,
        expressionVal as string,
      );
    });

    return sourceCode;
  }

  get renderableSource(): string {
    if (!this.args.source) {
      return '';
    }
    let result = this.args.source
      .replace(/^(\s*\n)*/, '')
      .replace(/\s*$/, '')
      .replace(/&#123;/g, '{')
      .replace(/&#125;/g, '}');

    if (this.args.isDynamic) {
      result = this.dynamafy(result);
    }

    if (this.initialHighlightComplete && this.preElement) {
      // highlight.js breaks binding, so we need to manually reset the innerText on changes
      // eslint-disable-next-line ember/no-side-effects
      this.preElement.innerText = result;
      // ...and then do the syntax highlighting again
      this.emberFreestyle.highlight(this.preElement);
    }

    return result;
  }

  highlight = modifier((preElement: HTMLElement) => {
    this.preElement = preElement;
    if (preElement && this.renderableSource) {
      this.emberFreestyle.highlight(preElement);
    }
    this.initialHighlightComplete = true;
  });
}
