import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | freestyle-guide', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.emberFreestyle = this.owner.lookup('service:ember-freestyle');
  });

  test('it sets the passed in `@highlightJsTheme` as the default theme on the `ember-freestyle` service', async function (assert) {
    assert.equal(this.emberFreestyle.defaultTheme, 'zenburn');

    await render(hbs`
      <FreestyleGuide
        @highlightJsTheme="solarized-light"
      />
    `);

    assert.equal(this.emberFreestyle.defaultTheme, 'solarized-light');
  });
});
