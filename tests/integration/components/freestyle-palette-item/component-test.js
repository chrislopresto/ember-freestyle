import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | freestyle palette item', function (hooks) {
  setupRenderingTest(hooks);

  test('it has a base background color', async function (assert) {
    assert.expect(1);

    let color = '#abcdef';

    this.color = {
      base: color,
    };

    await render(hbs`
      <FreestylePaletteItem @color={{this.color}} />
    `);

    assert
      .dom('.FreestylePaletteItem-color')
      .hasAttribute('style', `background-color: ${color};`);
  });
});
