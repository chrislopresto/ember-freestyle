/* eslint-disable ember/no-component-lifecycle-hooks */
/* eslint-disable ember/require-tagless-components */
import { deprecate } from '@ember/debug';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  emberFreestyle: service(),

  didInsertElement() {
    this._super(...arguments);

    deprecate(
      'The `<FreestyleShowdownContent />` component is deprecated. Please use `ember-cli-showdown` directly if you need Markdown support.',
      false,
      {
        for: 'ember-freestyle',
        id: 'freestyle-showdown-content-component',
        since: '0.12.12',
        until: '0.13.0',
      }
    );

    let pre = this.element.getElementsByTagName('pre');

    if (pre[0]) {
      this.emberFreestyle.highlight(pre[0]);
    }
  },
});
