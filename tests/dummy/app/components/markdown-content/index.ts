// BEGIN-SNIPPET markdown-example
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { Remarkable } from 'remarkable';
import stripIndent from 'strip-indent';
import { modifier } from 'ember-modifier';

interface Signature {
  Element: HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class MarkdownContent extends Component<Signature> {
  @tracked rawMarkdown: string | undefined;

  extractMarkdown = modifier((element: HTMLElement): void => {
    this.rawMarkdown = element.querySelector('.MarkdownContent-raw')?.innerHTML;
  });

  get renderedMarkdown(): string | null {
    if (this.rawMarkdown) {
      return new Remarkable().render(stripIndent(this.rawMarkdown));
    }
    return null;
  }
}
// END-SNIPPET
