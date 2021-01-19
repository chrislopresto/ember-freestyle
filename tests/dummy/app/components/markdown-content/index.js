// BEGIN-SNIPPET markdown-example
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Remarkable } from 'remarkable';
import stripIndent from 'strip-indent';

export default class extends Component {
  @tracked rawMarkdown;

  @action
  extractMarkdown(element) {
    this.rawMarkdown = element.querySelector('.MarkdownContent-raw').innerHTML;
  }

  get renderedMarkdown() {
    if (this.rawMarkdown) {
      return new Remarkable().render(stripIndent(this.rawMarkdown));
    }
    return null;
  }
}
// END-SNIPPET
