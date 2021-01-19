/* global hljs */
import { inject as service } from '@ember/service';

import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class DocumentationRoute extends Route {
  @service emberFreestyle;

  @action didTransition() {
    let { emberFreestyle } = this;

    return emberFreestyle
      .ensureHljs()
      .then(() => {
        return emberFreestyle.ensureHljsTheme('solarized-light');
      })
      .then(() => {
        return emberFreestyle.ensureHljsLanguage('handlebars');
      })
      .then(() => {
        return emberFreestyle.ensureHljsLanguage('scss');
      })
      .then(() => {
        hljs.initHighlighting.called = false;
        let blocks = document.querySelectorAll('pre code');
        blocks.forEach((block) => {
          emberFreestyle.highlight(block);
        });
      })
      .finally(() => {
        return true;
      });
  }
}
