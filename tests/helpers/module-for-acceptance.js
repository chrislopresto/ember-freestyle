import { module } from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

const { RSVP: { Promise } } = Ember;

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();

      if (options.beforeEach) {
        // jscs:disable
        return options.beforeEach.apply(this, arguments);
        // jscs:enable
      }
    },

    afterEach() {
      // jscs:disable
      let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
      // jscs:enable
      return Promise.resolve(afterEach).then(() => destroyApp(this.application));
    }
  });
}
