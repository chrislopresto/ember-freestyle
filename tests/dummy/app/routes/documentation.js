/* global hljs */
import Ember from 'ember';
import Route from '@ember/routing/route';

const { inject } = Ember;

export default Route.extend({
  emberFreestyle: inject.service(),

  actions: {
    didTransition() {
      let emberFreestyle = this.get('emberFreestyle');

      return emberFreestyle.ensureHljs()
        .then(() => {
          return emberFreestyle.ensureHljsTheme('solarized-light');
        }).then(() => {
          return emberFreestyle.ensureHljsLanguage('handlebars');
        }).then(() => {
          hljs.initHighlighting.called = false;
          let blocks = document.querySelectorAll('pre code');
          blocks.forEach((block) => {
            emberFreestyle.highlight(block);
          });
        }).finally(() => {
          return true;
        });
    }
  }
});
