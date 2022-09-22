import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { PaletteItem } from 'ember-freestyle/components/freestyle-palette/index';
import type { TestContext } from '@ember/test-helpers';

interface Context extends TestContext {
  color: PaletteItem;
}

module('Integration | Component | freestyle palette item', function (hooks) {
  setupRenderingTest(hooks);

  test('it has a base background color', async function (this: Context, assert) {
    assert.expect(1);

    const color = '#abcdef';

    this.color = {
      name: 'alphabeta',
      base: color,
    };

    await render<Context>(hbs`
      <FreestylePaletteItem @color={{this.color}} />
    `);

    assert
      .dom('.FreestylePaletteItem-color')
      .hasAttribute('style', `background-color: ${color};`);
  });
});
