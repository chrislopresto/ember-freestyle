import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import usage from '../../../pages/usage-component';

// Stub freestyle service
const FreestyleStub = Service.extend({
  defaultTheme: 'solarized-light',
  highlight: function() {}
});

module('Integration | Component | freestyle guide', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:emberFreestyle', FreestyleStub);
    this.emberFreestyle = this.owner.lookup('service:emberFreestyle');
    usage.setContext(this);
  });

  hooks.afterEach(function() {
    usage.removeContext();
  });

  test('it sets the passed in highlightJsTheme as the default theme on the service', async function(assert) {
    assert.expect(2);

    assert.equal(this.get('emberFreestyle.defaultTheme'), 'solarized-light');
    await render(hbs`
      {{#freestyle-guide
          title='Ember Freestyle'
          subtitle='Living Style Guide'
          highlightJsTheme='zenburn'
      }}
        I am the guide
      {{/freestyle-guide}}
      `);
    assert.equal(this.get('emberFreestyle.defaultTheme'), 'zenburn');
  });
});
