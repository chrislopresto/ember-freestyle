/* eslint-disable @typescript-eslint/no-unused-vars */
import { service } from '@ember/service';
import { action } from '@ember/object';
/* eslint-enable @typescript-eslint/no-unused-vars */

import Route from '@ember/routing/route';
import EmberFreestyleService from '../../../../addon/services/ember-freestyle';

export default class DocumentationRoute extends Route {
  @service('ember-freestyle') declare emberFreestyle: EmberFreestyleService;

  @action async didTransition(): Promise<boolean> {
    const { emberFreestyle } = this;

    await emberFreestyle.ensureHljs();
    await emberFreestyle.ensureHljsTheme('solarized-light');
    await emberFreestyle.ensureHljsLanguage('handlebars');
    await emberFreestyle.ensureHljsLanguage('scss');

    hljs.initHighlighting.called = false;
    const blocks = document.querySelectorAll('pre code');
    blocks.forEach((block) => {
      emberFreestyle.highlight(block as HTMLElement);
    });
    return true;
  }
}
