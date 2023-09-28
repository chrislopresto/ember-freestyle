// BEGIN-SNIPPET markdown-example
import Component from '@glimmer/component';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
/* eslint-enable @typescript-eslint/no-unused-vars */
import { Remarkable } from 'remarkable';
import stripIndent from 'strip-indent';

export default class MarkdownContent extends Component {
  @tracked rawMarkdown: string | undefined;

  @action
  extractMarkdown(element: HTMLElement): void {
    this.rawMarkdown = element.querySelector('.MarkdownContent-raw')?.innerHTML;
  }

  get renderedMarkdown(): string | null {
    if (this.rawMarkdown) {
      return new Remarkable().render(stripIndent(this.rawMarkdown));
    }
    return null;
  }
}
// END-SNIPPET
