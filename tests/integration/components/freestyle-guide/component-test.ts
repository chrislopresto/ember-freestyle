import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';
import EmberFreestyleService from '../../../../addon/services/ember-freestyle';
import { TestContext } from '@ember/test-helpers';

interface Context extends TestContext {
  emberFreestyle: EmberFreestyleService;
}

module('Integration | Component | freestyle-guide', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (this: Context) {
    this.emberFreestyle = this.owner.lookup(
      'service:ember-freestyle'
    ) as EmberFreestyleService;
  });

  test('it sets the passed in `@highlightJsTheme` as the default theme on the `ember-freestyle` service', async function (this: Context, assert) {
    assert.strictEqual(this.emberFreestyle.defaultTheme, 'zenburn');

    await render(hbs`
      <FreestyleGuide
        @highlightJsTheme="solarized-light"
      />
    `);

    assert.strictEqual(this.emberFreestyle.defaultTheme, 'solarized-light');
  });
});
